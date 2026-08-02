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
      <div className="mb-6 flex items-center gap-2 text-xs text-foreground/50">
        <time>{article.date}</time>
        {article.tier === "member" && (
          <span className="rounded-full bg-accent-soft px-2 py-0.5 font-medium text-accent">
            会員限定
          </span>
        )}
      </div>
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <div className="prose prose-neutral mt-6 max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground/85 prose-li:text-foreground/85 prose-strong:text-accent">
        <MDXRemote source={article.content} />
      </div>
    </article>
  );
}
