import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="mb-2 flex items-center gap-2 text-xs text-foreground/50">
        <time>{article.date}</time>
        {article.tier === "member" && (
          <span className="rounded-full bg-accent-soft px-2 py-0.5 font-medium text-accent">
            会員限定
          </span>
        )}
      </div>
      <h2 className="text-lg font-semibold">{article.title}</h2>
      <p className="mt-2 text-sm text-foreground/70">
        {article.excerpt}
      </p>
    </Link>
  );
}
