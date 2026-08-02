import Link from "next/link";
import HouseIllustration from "./HouseIllustration";

export default function Header() {
  return (
    <header className="border-b border-border bg-card/60">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-accent">
          <HouseIllustration className="h-8 w-8 text-accent" />
          ボロ物件投資ラボ
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/" className="hover:underline">
            記事一覧
          </Link>
          <Link href="/membership" className="hover:underline">
            会員プラン
          </Link>
          <a
            href="https://x.com/rengonborobuken"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            X(旧Twitter)
          </a>
        </nav>
      </div>
    </header>
  );
}
