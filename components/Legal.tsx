import type { ReactNode } from "react";

export function LegalShell({
  title,
  kicker,
  updated,
  intro,
  children,
}: {
  title: string;
  kicker: string;
  updated: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 md:px-10 py-16 md:py-24">
      <p className="text-sm lowercase text-teal-deep font-medium tracking-wide">
        {kicker}
      </p>
      <h1 className="mt-3 font-display font-bold tracking-tight lowercase text-ink text-[clamp(2.5rem,6vw,4rem)] leading-[0.95]">
        {title}
      </h1>
      <p className="mt-4 text-xs text-ink-mute lowercase">
        last updated · {updated}
      </p>

      {intro ? (
        <div className="mt-8 text-ink-soft leading-relaxed [&_strong]:text-ink [&_strong]:font-semibold space-y-4">
          {intro}
        </div>
      ) : null}

      <div className="mt-12 space-y-12">{children}</div>
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
        <span className="text-ink-mute mr-3 tabular-nums">{n}</span>
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-ink-soft leading-relaxed [&_strong]:text-ink [&_strong]:font-semibold [&_a]:text-teal-deep [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:marker:text-teal [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-ink [&_h3]:mt-6 [&_h3]:lowercase">
        {children}
      </div>
    </section>
  );
}
