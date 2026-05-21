import Link from "next/link";

export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="jmy home"
      className={`font-display font-bold tracking-tight lowercase leading-none text-teal-deep ${className}`}
    >
      jmy
    </Link>
  );
}
