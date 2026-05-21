import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-soft mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm text-ink-soft">
        <p className="lowercase">jmy © {year}</p>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 lowercase">
          <Link href="/privacy/" className="hover:text-ink transition-colors">
            privacy
          </Link>
          <Link href="/terms/" className="hover:text-ink transition-colors">
            terms
          </Link>
          <a
            href="mailto:hello@jmy.app"
            className="hover:text-ink transition-colors"
          >
            hello@jmy.app
          </a>
        </nav>
      </div>
    </footer>
  );
}
