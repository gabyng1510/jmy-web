import { AppleLogo } from "@phosphor-icons/react/dist/ssr";

export default function AppStoreBadge({ id }: { id?: string }) {
  return (
    <button
      id={id}
      type="button"
      disabled
      className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-white text-base font-medium lowercase cursor-not-allowed opacity-95 shadow-[0_8px_24px_-12px_rgba(20,184,166,0.5)]"
    >
      <AppleLogo size={22} weight="fill" />
      coming soon to ios
    </button>
  );
}
