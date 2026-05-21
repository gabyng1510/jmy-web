import { InstagramLogo, SnapchatLogo, TiktokLogo } from "@phosphor-icons/react/dist/ssr";

type Platform = "instagram" | "snapchat" | "tiktok";

const styles: Record<Platform, { className: string; label: string; Icon: React.ComponentType<{ size?: number; weight?: "fill" | "regular" | "bold" }> }> = {
  instagram: {
    className:
      "bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white",
    label: "instagram",
    Icon: InstagramLogo,
  },
  snapchat: {
    className: "bg-[#FFFC00] text-black",
    label: "snapchat",
    Icon: SnapchatLogo,
  },
  tiktok: {
    className: "bg-black text-white",
    label: "tiktok",
    Icon: TiktokLogo,
  },
};

export default function SocialPill({ platform }: { platform: Platform }) {
  const s = styles[platform];
  const Icon = s.Icon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.85em] font-medium lowercase align-middle ${s.className}`}
    >
      <Icon size={14} weight="fill" />
      {s.label}
    </span>
  );
}
