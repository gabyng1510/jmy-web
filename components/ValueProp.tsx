const blocks: { eyebrow: string; title: string; body: string; tone: "teal" | "grape" | "coral" }[] = [
  {
    eyebrow: "the discovery part",
    title: "the people your feed will never show you.",
    body: "algorithms keep showing you the same 12 faces. jmy is for the other 8 billion. real humans, near you or anywhere, none of them already in your dms.",
    tone: "grape",
  },
  {
    eyebrow: "the connection part",
    title: "skip the dm pile. grab their handles.",
    body: "no inbox to babysit, no “hey 👀” stuck on read. you both react, handles unlock, take it to insta / snap / tiktok. wherever you already live.",
    tone: "teal",
  },
  {
    eyebrow: "the safety part",
    title: "verified. blocks bite. zero creeps.",
    body: "every account is 18+ verified. blocking is mutual + instant — they disappear from your discovery, you disappear from theirs. reports get read by humans.",
    tone: "coral",
  },
];

const toneStyles = {
  teal: { dot: "bg-teal", text: "text-teal-deep" },
  grape: { dot: "bg-grape", text: "text-grape-deep" },
  coral: { dot: "bg-coral", text: "text-coral" },
};

export default function ValueProp() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {blocks.map((b) => {
          const s = toneStyles[b.tone];
          return (
            <article
              key={b.title}
              className="rounded-3xl border border-border bg-surface p-7 md:p-8 shadow-[0_4px_24px_-12px_rgba(10,14,18,0.08)] hover:shadow-[0_12px_40px_-12px_rgba(10,14,18,0.15)] transition-shadow"
            >
              <div className={`flex items-center gap-2 text-xs lowercase font-medium ${s.text}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                {b.eyebrow}
              </div>
              <h3 className="mt-4 font-display font-bold text-2xl md:text-[1.6rem] leading-snug lowercase text-ink">
                {b.title}
              </h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{b.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
