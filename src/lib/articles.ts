import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

export type ArticleTier = "free" | "member";

export type ArticleMeta = {
  slug: string;
  title: string;
  date: string;
  tier: ArticleTier;
  excerpt: string;
};

export type Article = ArticleMeta & {
  content: string;
};

function readArticleFile(filename: string): Article {
  const slug = filename.replace(/\.mdx$/, "");
  const fullPath = path.join(ARTICLES_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    date: data.date,
    tier: (data.tier as ArticleTier) ?? "free",
    excerpt: data.excerpt ?? "",
    content,
  };
}

export function getAllArticles(): ArticleMeta[] {
  const filenames = fs
    .readdirSync(ARTICLES_DIR)
    .filter((name) => name.endsWith(".mdx"));

  return filenames
    .map((name) => {
      const { content: _content, ...meta } = readArticleFile(name);
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  return readArticleFile(`${slug}.mdx`);
}
