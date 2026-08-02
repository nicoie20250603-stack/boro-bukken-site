export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card/60">
      <div className="mx-auto max-w-3xl px-4 py-6 text-xs text-foreground/60">
        <p>
          本サイトの記事は不動産投資に関する一般的な情報提供を目的としており、
          特定の金融商品・投資手法の勧誘や、利回り・収益を保証するものではありません。
          投資に関する最終判断はご自身の責任で行ってください。
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} ボロ物件投資ラボ
        </p>
      </div>
    </footer>
  );
}
