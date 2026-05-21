export default function AppStoreBadge({ id }: { id?: string }) {
  return (
    <div
      id={id}
      className="inline-flex flex-col items-start gap-2"
    >
      <button
        type="button"
        disabled
        className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-bg text-base font-semibold lowercase shadow-[0_8px_30px_-12px_rgba(123,97,255,0.6)] cursor-not-allowed opacity-95"
      >
        <span aria-hidden className="text-xl leading-none">⌘</span>
        coming soon to ios
      </button>
      <span className="text-xs text-ink-mute lowercase pl-2">
        android? a guy can dream.
      </span>
    </div>
  );
}
