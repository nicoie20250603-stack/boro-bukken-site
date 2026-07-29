# ボロ物件投資ラボ

不動産投資(ボロ物件)に関する情報発信サイト。Next.js製。現在はフェーズ1(無料記事のみ)の状態です。

## ローカルで動かす

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開くと確認できます。

## 記事の追加方法

`content/articles/` フォルダに `.mdx` ファイルを1つ追加するだけで、記事一覧・詳細ページに自動的に反映されます。React/JSXの知識は不要です。

ファイル名の例: `2026-08-01-shinki-kigyou-no-chuuijiten.mdx`

中身の書式:

```md
---
title: "記事タイトル"
date: "2026-08-01"
tier: "free"
excerpt: "一覧ページに表示される短い要約文"
---

ここから本文をMarkdownで書きます。

## 見出し

- 箇条書き
- も使えます
```

- `tier` は `"free"`(無料公開)または `"member"`(将来の会員限定記事用、現時点ではまだ実際のロック機能はありません)
- ファイルを保存してデプロイ(Vercelと連携していれば `git push` するだけ)すれば公開されます

## 今後の予定(フェーズ)

1. ✅ 無料記事のみの単純なブログ・ローカル動作確認
2. GitHub連携 + Vercelへの公開
3. ログイン機能(Supabase)の追加
4. Stripeによる有料会員・記事の課金機能追加
5. 継続稼働の仕組み・免責文言などの仕上げ

## 技術構成

- Next.js (App Router, TypeScript) + Tailwind CSS
- 記事は `content/articles/*.mdx`(gray-matter + next-mdx-remote で読み込み)
- ホスティングは Vercel の無料枠を想定
