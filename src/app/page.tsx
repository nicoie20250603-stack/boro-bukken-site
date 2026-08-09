import ArticleCard from "@/components/ArticleCard";
import HouseIllustration from "@/components/HouseIllustration";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <section className="mb-10 flex flex-col items-center gap-4 rounded-3xl border border-border bg-card px-6 py-10 text-center sm:flex-row sm:text-left">
        <HouseIllustration className="h-28 w-28 shrink-0 text-accent" />
        <div>
          <h1 className="text-2xl font-bold">ボロ物件投資ラボ</h1>
          <p className="mt-2 text-foreground/70">
            宮城県内の不動産会社に勤務し、100万円以下のボロ物件売買に100件以上携わってきました。
            「相続した空き家をどうすればいいかわからない」「管理も処分も後回しになっている」——
            そんなお悩みをお持ちの方に向けて、県内の空き家事情や実践的な対処法を発信しています。
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>
    </div>
  );
}
