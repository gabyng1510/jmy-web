import AppStoreBadge from "./AppStoreBadge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-grape-soft blur-3xl opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-teal-light/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-24 md:px-10 md:pt-16 md:pb-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1 text-xs lowercase text-ink-soft mb-8">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-grape animate-pulse" />
          new — early access soon
        </div>

        <h1 className="font-display font-extrabold tracking-tight lowercase text-ink leading-[0.95] text-[clamp(3rem,10vw,7.5rem)]">
          grab handles.
          <br />
          <span className="text-grape">vibe</span> there.
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-2xl text-ink-soft leading-relaxed">
          jmy is where you meet strangers worth knowing. swipe real humans, grab
          their handles, slide to <Pill color="pink">insta</Pill>,{" "}
          <Pill color="yellow">snap</Pill>, or <Pill color="black">tiktok</Pill>.
          that&apos;s it — we don&apos;t do dms.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6">
          <AppStoreBadge id="get-the-app" />
          <a
            href="#how"
            className="text-sm lowercase text-ink-soft hover:text-ink underline underline-offset-4 decoration-grape decoration-2"
          >
            see how it works ↓
          </a>
        </div>
      </div>
    </section>
  );
}

function Pill({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "pink" | "yellow" | "black";
}) {
  const styles = {
    pink: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white",
    yellow: "bg-[#FFFC00] text-black",
    black: "bg-black text-white",
  }[color];
  return (
    <span
      className={`inline-block rounded-md px-2 py-0.5 text-[0.85em] font-semibold lowercase ${styles}`}
    >
      {children}
    </span>
  );
}
