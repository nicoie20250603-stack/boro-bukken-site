import { execFileSync } from "node:child_process";
import path from "node:path";
import type { NextConfig } from "next";

// 本番ビルドの前に必ず content/articles/*.mdx の front matter を検証する。
// `npm run build` は package.json の prebuild で同じチェックが走るが、Vercel は
// `next build` を直接実行するため prebuild が呼ばれない。そこで設定読み込み時にも
// チェックを実行し、壊れた記事があるままデプロイされるのを防ぐ。
if (process.env.NODE_ENV === "production") {
  try {
    execFileSync(
      process.execPath,
      [path.join(process.cwd(), "scripts", "check-content.mjs"), "--quiet"],
      { stdio: "inherit" }
    );
  } catch {
    throw new Error(
      "content/articles の front matter チェックに失敗しました。上のエラーを修正してからビルドしてください。"
    );
  }
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
