import { Cards, Heart, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";

const steps = [
  {
    n: "01",
    title: "swipe",
    body: "real humans, verified 18+, near you or far. one card at a time, no infinite-scroll trap.",
    Icon: Cards,
  },
  {
    n: "02",
    title: "react",
    body: "heart a photo, drop a line about that one weird thing in their bio. you don’t need to overthink it.",
    Icon: Heart,
  },
  {
    n: "03",
    title: "grab handles",
    body: "they react back → instagram / snapchat / tiktok unlock. one tap, slide there, vibe.",
    Icon: PaperPlaneTilt,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm lowercase text-teal-deep font-medium tracking-wide">
            how it works
          </p>
          <h2 className="mt-3 font-display font-bold tracking-tight lowercase text-ink text-[clamp(2.25rem,5vw,3.75rem)] leading-tight">
            three taps to somewhere new.
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map(({ n, title, body, Icon }) => (
            <li
              key={n}
              className="relative rounded-3xl bg-surface border border-border p-7 md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold text-ink-mute">{n}</span>
                <Icon size={32} weight="duotone" className="text-teal" />
              </div>
              <h3 className="mt-6 font-display font-bold text-2xl lowercase text-ink">
                {title}
              </h3>
              <p className="mt-2 text-ink-soft leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
