const steps = [
  {
    n: "01",
    title: "swipe",
    body: "real humans, verified 18+, near you or far. one card at a time, no infinite-scroll trap.",
    icon: <CompassIcon />,
  },
  {
    n: "02",
    title: "react",
    body: "heart a photo, drop a line about that one weird thing in their bio. you don’t need to overthink it.",
    icon: <HeartIcon />,
  },
  {
    n: "03",
    title: "grab handles",
    body: "they react back → instagram / snapchat / tiktok unlock. one tap, slide there, vibe.",
    icon: <PaperPlaneIcon />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm lowercase text-grape font-medium">how it works</p>
          <h2 className="mt-3 font-display font-extrabold tracking-tight lowercase text-ink text-[clamp(2.25rem,5vw,3.75rem)] leading-tight">
            three taps to <span className="text-grape">somewhere new</span>.
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-3xl bg-surface border border-border p-7 md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold text-ink-mute">{s.n}</span>
                <div className="text-grape">{s.icon}</div>
              </div>
              <h3 className="mt-6 font-display font-bold text-2xl lowercase text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-ink-soft leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CompassIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 256 256" fill="none" aria-hidden>
      <circle cx="128" cy="128" r="96" stroke="currentColor" strokeWidth="14" />
      <path
        d="M168 88l-56 24-24 56 56-24z"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 256 256" fill="none" aria-hidden>
      <path
        d="M128 216s-88-48-88-112a48 48 0 0 1 88-26 48 48 0 0 1 88 26c0 64-88 112-88 112z"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaperPlaneIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 256 256" fill="none" aria-hidden>
      <path
        d="M228 32 24 104l84 24 24 84z"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinejoin="round"
      />
      <path d="m108 128 56-56" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
    </svg>
  );
}
