import type { Metadata, Viewport } from "next";
import { DM_Mono, Manrope, Space_Grotesk } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Muhammad Khaekal | Software Developer",
    template: "%s | Muhammad Khaekal",
  },
  description: "Muhammad Khaekal's portfolio, Software Developer. Explore his projects, technical skills, and software development journey.",
  applicationName: "GEORGE'S AREA",
  openGraph: {
    title: "Muhammad Khaekal | Software Developer ",
    description: "Software, database, and digital product development portfolio.",
    type: "website",
    locale: "id_ID",
    siteName: "GEORGE'S AREA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1020",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${manrope.variable} ${dmMono.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
