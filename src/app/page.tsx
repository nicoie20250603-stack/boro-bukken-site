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
            田舎の不動産会社に勤務し、100万円以下のボロ物件売買に100件以上携わってきた経験から、
            成功例・失敗例を包み隠さず発信します。
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
