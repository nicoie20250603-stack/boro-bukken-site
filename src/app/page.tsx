import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <section className="mb-10">
        <h1 className="text-2xl font-bold">ボロ物件投資ラボ</h1>
        <p className="mt-2 text-black/70 dark:text-white/70">
          田舎の不動産会社に勤務し、100万円以下のボロ物件売買に100件以上携わってきた経験から、
          成功例・失敗例を包み隠さず発信します。
        </p>
      </section>

      <section className="flex flex-col gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>
    </div>
  );
}
