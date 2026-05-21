import Link from "next/link";
import Wordmark from "./Wordmark";

export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Wordmark className="text-4xl md:text-5xl" />
        <nav className="flex items-center gap-2 md:gap-6 text-sm md:text-base font-medium">
          <Link
            href="/privacy/"
            className="hidden sm:inline text-ink-soft hover:text-ink transition-colors"
          >
            privacy
          </Link>
          <Link
            href="/terms/"
            className="hidden sm:inline text-ink-soft hover:text-ink transition-colors"
          >
            terms
          </Link>
          <a
            href="#get-the-app"
            className="rounded-full bg-teal px-5 py-2.5 text-white hover:bg-teal-deep transition-colors font-medium"
          >
            get the app
          </a>
        </nav>
      </div>
    </header>
  );
}
