import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const chubbo = localFont({
  src: [{ path: "../public/fonts/Chubbo-Bold.otf", weight: "700", style: "normal" }],
  variable: "--font-chubbo",
  display: "swap",
});

const supreme = localFont({
  src: [
    { path: "../public/fonts/Supreme-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/Supreme-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Supreme-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/Supreme-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-supreme",
  display: "swap",
});

export const metadata: Metadata = {
  title: "jmy — grab handles. vibe there.",
  description:
    "jmy is where you meet strangers worth knowing. swipe real humans, grab their handles, vibe on whichever app you already live on.",
  metadataBase: new URL("https://jmy.app"),
  openGraph: {
    title: "jmy — grab handles. vibe there.",
    description:
      "meet strangers worth knowing. grab their handles, vibe on whichever app you already live on.",
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
    <html lang="en" className={`${chubbo.variable} ${supreme.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg text-ink">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
