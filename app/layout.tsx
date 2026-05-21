import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "jmy — grab handles. vibe there.",
  description:
    "jmy is where you meet strangers worth knowing. swipe real humans, grab their handles, slide to insta, snap, or tiktok. that's it — we don't do dms.",
  metadataBase: new URL("https://jmy.app"),
  openGraph: {
    title: "jmy — grab handles. vibe there.",
    description:
      "meet strangers worth knowing. swipe real humans, grab their handles, vibe on whichever app you already live on.",
    url: "https://jmy.app",
    siteName: "jmy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "jmy — grab handles. vibe there.",
    description:
      "meet strangers worth knowing. grab their handles, vibe on whichever app you already live on.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg text-ink">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
