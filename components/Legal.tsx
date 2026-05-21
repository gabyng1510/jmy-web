import type { ReactNode } from "react";

export function LegalShell({
  title,
  kicker,
  banner,
  updated,
  children,
}: {
  title: string;
  kicker: string;
  banner: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 md:px-10 py-16 md:py-24">
      <p className="text-sm lowercase text-grape font-medium">{kicker}</p>
      <h1 className="mt-3 font-display font-extrabold tracking-tight lowercase text-ink text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.95]">
        {title}
      </h1>

      <p className="mt-8 rounded-2xl border border-grape/30 bg-grape-soft/60 px-5 py-4 text-ink-soft italic text-sm md:text-base leading-relaxed">
        {banner}
      </p>

      <p className="mt-4 text-xs text-ink-mute lowercase">last updated · {updated}</p>

      <div className="prose-jmy mt-10 space-y-10">{children}</div>
    </article>
  );
}

export function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display font-bold text-2xl md:text-3xl lowercase text-ink leading-tight">
        <span className="text-ink-mute mr-3">{n}</span>
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-ink-soft leading-relaxed [&_strong]:text-ink [&_strong]:font-semibold [&_a]:text-grape [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:marker:text-grape">
        {children}
      </div>
    </section>
  );
}
