import Link from "next/link";

export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="jmy home"
      className={`font-display font-extrabold tracking-tight lowercase leading-none ${className}`}
    >
      <span className="text-teal-deep">j</span>
      <span className="text-ink">m</span>
      <span className="text-grape">y</span>
    </Link>
  );
}
