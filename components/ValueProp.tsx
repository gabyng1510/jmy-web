import { CompassRose, PaperPlaneTilt, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

const blocks = [
  {
    eyebrow: "discovery",
    title: "the people your feed will never show you.",
    body: "algorithms keep showing you the same 12 faces. jmy is for the other 8 billion — real humans, near you or anywhere, none of them already in your dms.",
    Icon: CompassRose,
  },
  {
    eyebrow: "connection",
    title: "skip the dm pile. grab their handles.",
    body: "no inbox to babysit, no “hey 👀” stuck on read. you both react, handles unlock, take it to insta / snap / tiktok. wherever you already live.",
    Icon: PaperPlaneTilt,
  },
  {
    eyebrow: "safety",
    title: "verified. blocks bite.",
    body: "every account is 18+ verified. blocking is mutual and instant — they disappear from your discovery, you disappear from theirs. reports get read by humans.",
    Icon: ShieldCheck,
  },
];

export default function ValueProp() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {blocks.map(({ eyebrow, title, body, Icon }) => (
          <article
            key={title}
            className="rounded-3xl border border-border bg-surface p-7 md:p-8 shadow-[0_4px_24px_-12px_rgba(17,24,39,0.08)] hover:shadow-[0_8px_28px_-12px_rgba(17,24,39,0.14)] transition-shadow"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs lowercase font-medium text-teal-deep tracking-wide">
                {eyebrow}
              </span>
              <Icon size={28} weight="duotone" className="text-teal" />
            </div>
            <h3 className="mt-6 font-display font-bold text-2xl md:text-[1.6rem] leading-snug lowercase text-ink">
              {title}
            </h3>
            <p className="mt-3 text-ink-soft leading-relaxed">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
