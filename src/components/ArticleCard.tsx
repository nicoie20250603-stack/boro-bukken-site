import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block rounded-lg border border-black/10 p-5 transition hover:border-black/30 dark:border-white/10 dark:hover:border-white/30"
    >
      <div className="mb-2 flex items-center gap-2 text-xs text-black/50 dark:text-white/50">
        <time>{article.date}</time>
        {article.tier === "member" && (
          <span className="rounded-full bg-amber-500/15 px-2 py-0.5 font-medium text-amber-700 dark:text-amber-400">
            会員限定
          </span>
        )}
      </div>
      <h2 className="text-lg font-semibold">{article.title}</h2>
      <p className="mt-2 text-sm text-black/70 dark:text-white/70">
        {article.excerpt}
      </p>
    </Link>
  );
}
