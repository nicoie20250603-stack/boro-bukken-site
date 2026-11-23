#!/usr/bin/env node
/**
 * content/articles/*.mdx の front matter を検証するスクリプト。
 *
 * 目的: front matter の YAML が壊れている（例: タイトル内の半角 " が
 * クォートを閉じてしまう）と next build の途中まで気づけないため、
 * ビルド前・push 時に壊れたファイル名と原因を即座に出す。
 *
 * 使い方: npm run check:content
 *   --quiet : 成功時のメッセージを出さない（ビルド前の自動実行用）
 * 終了コード: 0 = 問題なし / 1 = エラーあり
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

/** 記事として必須の front matter 項目（README の書式に合わせる） */
const REQUIRED_FIELDS = [
  { key: "title", hint: '記事タイトル。"..." で囲む' },
  { key: "date", hint: '"YYYY-MM-DD" の文字列。クォートで囲む' },
  { key: "excerpt", hint: "一覧ページに出す要約文" },
];

/** 任意項目（省略可） */
const OPTIONAL_FIELDS = ["tier"];

const ALLOWED_FIELDS = [...REQUIRED_FIELDS.map((f) => f.key), ...OPTIONAL_FIELDS];

const TIERS = ["free", "member"];

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

const QUIET = process.argv.includes("--quiet");

const PARSE_HINT =
  'ヒント: タイトルや excerpt の中で半角の " を使いたいときは \\" でエスケープするか、「」『』に置き換えてください。';

function isBlank(value) {
  return value === undefined || value === null || String(value).trim() === "";
}

/** 実在する日付か（2026-02-30 のような存在しない日を弾く） */
function isRealDate(text) {
  const [y, m, d] = text.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return (
    date.getUTCFullYear() === y &&
    date.getUTCMonth() === m - 1 &&
    date.getUTCDate() === d
  );
}

/**
 * 1ファイルを検証し、エラー・警告の一覧を返す。
 * @returns {{ errors: string[], warnings: string[], data: Record<string, unknown> | null }}
 */
function checkFile(filename) {
  const errors = [];
  const warnings = [];
  const fullPath = path.join(ARTICLES_DIR, filename);

  let raw;
  try {
    raw = fs.readFileSync(fullPath, "utf8");
  } catch (error) {
    errors.push(`ファイルを読み込めません: ${error instanceof Error ? error.message : String(error)}`);
    return { errors, warnings, data: null };
  }

  // front matter ブロックの有無（gray-matter は無い場合エラーにせず data={} を返すため自前で確認）
  if (!/^---\r?\n/.test(raw)) {
    errors.push('front matter がありません（ファイル先頭を "---" で始まり "---" で閉じた YAML ブロックにしてください）');
    return { errors, warnings, data: null };
  }
  if (!/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/.test(raw)) {
    errors.push('front matter の閉じ "---" が見つかりません（先頭の "---" に対応する閉じ行が必要です）');
    return { errors, warnings, data: null };
  }

  let parsed;
  try {
    parsed = matter(raw);
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    errors.push(`front matter の YAML 解析に失敗しました\n${indent(reason)}`);
    errors.push(PARSE_HINT);
    return { errors, warnings, data: null };
  }

  const data = parsed.data ?? {};

  for (const field of REQUIRED_FIELDS) {
    const value = data[field.key];
    if (value === undefined) {
      errors.push(`必須項目「${field.key}」がありません（${field.hint}）`);
    } else if (typeof value !== "string") {
      errors.push(
        `「${field.key}」は文字列で指定してください（${field.hint}）。現在の型: ${
          value instanceof Date ? "Date（クォート無しの日付と解釈されています）" : typeof value
        }`
      );
    } else if (isBlank(value)) {
      errors.push(`「${field.key}」が空です（${field.hint}）`);
    }
  }

  if (typeof data.date === "string" && !isBlank(data.date)) {
    const date = data.date.trim();
    if (!DATE_PATTERN.test(date)) {
      errors.push(`「date」は "YYYY-MM-DD" の形式で指定してください（現在: "${date}"）`);
    } else if (!isRealDate(date)) {
      errors.push(`「date」が実在しない日付です（現在: "${date}"）`);
    }
  }

  if (data.tier !== undefined) {
    if (typeof data.tier !== "string" || !TIERS.includes(data.tier)) {
      errors.push(
        `「tier」は ${TIERS.map((t) => `"${t}"`).join(" または ")} のいずれかで指定してください（現在: ${JSON.stringify(
          data.tier
        )}）`
      );
    }
  }

  for (const key of Object.keys(data)) {
    if (!ALLOWED_FIELDS.includes(key)) {
      warnings.push(`未知の項目「${key}」があります（有効: ${ALLOWED_FIELDS.join(", ")}）`);
    }
  }

  // ファイル名は "YYYY-MM-DD-slug.mdx" の慣習。ズレはビルドを壊さないので警告のみ。
  const filenameDate = filename.match(/^(\d{4}-\d{2}-\d{2})-/);
  if (filenameDate && typeof data.date === "string" && DATE_PATTERN.test(data.date) && filenameDate[1] !== data.date) {
    warnings.push(
      `ファイル名の日付（${filenameDate[1]}）と front matter の date（${data.date}）が一致しません`
    );
  }

  return { errors, warnings, data };
}

function indent(text) {
  return text
    .split("\n")
    .map((line) => `      ${line}`)
    .join("\n");
}

function main() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    fail(`記事フォルダが見つかりません: ${path.relative(process.cwd(), ARTICLES_DIR)}`);
    return 1;
  }

  const entries = fs.readdirSync(ARTICLES_DIR);
  const filenames = entries.filter((name) => name.endsWith(".mdx")).sort();

  if (filenames.length === 0) {
    fail("content/articles に .mdx ファイルがありません（実行ディレクトリを確認してください）");
    return 1;
  }

  const reported = [];

  for (const filename of filenames) {
    const { errors, warnings } = checkFile(filename);
    if (errors.length > 0 || warnings.length > 0) {
      reported.push({ filename, errors, warnings });
    }
  }

  const errorFiles = reported.filter((r) => r.errors.length > 0);
  const warningFiles = reported.filter((r) => r.errors.length === 0 && r.warnings.length > 0);

  for (const { filename, errors, warnings } of reported) {
    if (errors.length === 0 && warnings.length === 0) continue;
    const label = errors.length > 0 ? "❌" : "⚠️";
    process.stderr.write(`${label} content/articles/${filename}\n`);
    for (const message of errors) process.stderr.write(`  ・${message}\n`);
    for (const message of warnings) process.stderr.write(`  ・(警告) ${message}\n`);
    process.stderr.write("\n");
  }

  // 記事として拾われない拡張子（.md など）は公開されずに終わるので警告
  const ignored = entries.filter(
    (name) => !name.endsWith(".mdx") && /\.(md|markdown|mdoc)$/i.test(name)
  );
  for (const name of ignored) {
    process.stderr.write(`⚠️ content/articles/${name}\n  ・(警告) .mdx ではないため記事として公開されません\n\n`);
  }

  if (errorFiles.length > 0) {
    process.stderr.write(
      `front matter チェック失敗: ${filenames.length} ファイル中 ${errorFiles.length} ファイルにエラーがあります。\n`
    );
    process.stderr.write("上記のファイルを修正してから、もう一度実行してください。\n");
    return 1;
  }

  if (!QUIET) {
    const warningNote = warningFiles.length + ignored.length;
    process.stdout.write(
      `✅ front matter チェックOK: content/articles の ${filenames.length} ファイルはすべて正常です` +
        (warningNote > 0 ? `（警告 ${warningNote} 件）\n` : "\n")
    );
  }
  return 0;
}

function fail(message) {
  process.stderr.write(`❌ ${message}\n`);
}

process.exit(main());
