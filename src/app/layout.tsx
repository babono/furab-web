import type { Metadata, Viewport } from "next";
import "./globals.css";

const description =
  "Track, Highlight, Remind. FURAB keeps up with your newborn — every feed, nappy, nap and dose — and turns it into plain-language highlights, entirely on your device.";

export const metadata: Metadata = {
  // Set so Open Graph and Twitter image URLs resolve absolutely. Point this at
  // the real domain once the site is deployed.
  metadataBase: new URL("https://furab.app"),
  title: "FURAB — Track, Highlight, Remind",
  description,
  applicationName: "FURAB",
  keywords: [
    "baby tracker", "newborn", "feeding log", "nappy tracker",
    "sleep tracker", "medication reminder", "breastfeeding", "pumping",
  ],
  openGraph: {
    title: "FURAB — for your baby",
    description,
    type: "website",
    images: [{ url: "/screenshots/01-home.png", width: 1320, height: 2868 }],
  },
  twitter: { card: "summary_large_image", title: "FURAB — for your baby", description },
  // Icons come from the file conventions in this directory — icon.svg,
  // icon.png and apple-icon.png — so there is no `icons` field here.
};

export const viewport: Viewport = {
  themeColor: "#0abba5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
