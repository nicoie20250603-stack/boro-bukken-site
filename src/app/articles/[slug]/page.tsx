import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-6 flex items-center gap-2 text-xs text-black/50 dark:text-white/50">
        <time>{article.date}</time>
        {article.tier === "member" && (
          <span className="rounded-full bg-amber-500/15 px-2 py-0.5 font-medium text-amber-700 dark:text-amber-400">
            会員限定
          </span>
        )}
      </div>
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <div className="prose prose-neutral mt-6 max-w-none dark:prose-invert">
        <MDXRemote source={article.content} />
      </div>
    </article>
  );
}
