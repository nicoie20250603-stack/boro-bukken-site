import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          ボロ物件投資ラボ
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/" className="hover:underline">
            記事一覧
          </Link>
          <Link href="/membership" className="hover:underline">
            会員プラン
          </Link>
        </nav>
      </div>
    </header>
  );
}
