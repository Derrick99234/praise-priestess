import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "PraisePriestess — Official Profile",
    template: "%s — PraisePriestess",
  },
  description:
    "PraisePriestess official profile: artist story, featured releases, photos, and streaming links.",
  openGraph: {
    title: "PraisePriestess — Official Profile",
    description:
      "Artist story, featured releases, photos, and streaming links for PraisePriestess.",
    type: "website",
    images: [
      {
        url: "/images/praisepriestess-portrait-02.jpeg",
        alt: "PraisePriestess portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PraisePriestess — Official Profile",
    description:
      "Artist story, featured releases, photos, and streaming links for PraisePriestess.",
    images: ["/images/praisepriestess-portrait-02.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
