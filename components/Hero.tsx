import AppStoreBadge from "./AppStoreBadge";
import SocialPill from "./SocialPill";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-teal-light/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-teal/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-24 md:px-10 md:pt-16 md:pb-32">
        <h1 className="font-display font-bold tracking-tight lowercase text-ink leading-[0.95] text-[clamp(3rem,10vw,7.5rem)]">
          grab handles.
          <br />
          <span className="text-teal-deep">vibe</span> there.
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-2xl text-ink-soft leading-relaxed">
          jmy is where you meet strangers worth knowing. swipe real humans, grab
          their handles, slide to <SocialPill platform="instagram" />,{" "}
          <SocialPill platform="snapchat" />, or <SocialPill platform="tiktok" />.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6">
          <AppStoreBadge id="get-the-app" />
          <a
            href="#how"
            className="text-sm lowercase text-ink-soft hover:text-ink underline underline-offset-4 decoration-teal decoration-2"
          >
            see how it works ↓
          </a>
        </div>
      </div>
    </section>
  );
}
