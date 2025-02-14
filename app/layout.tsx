import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";

import { ThemeProvider } from "./contexts/ThemeContext";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ddon-90-portfolio.vercel.app"),
  title: "Diego Donaggio - My Portfolio",
  description: "Personal Portfolio Website built using Next.js",
  keywords: ["Next.js", "React", "JavaScript", "TypeScript", "Node", "Portfolio", "Website"],
  authors: [{ name: "Diego Donaggio" }],
  openGraph: {
    title: "Diego Donaggio - My Portfolio",
    description: "Personal Portfolio Website built with Next.js",
    type: 'website',
    locale: 'en_US',
    url: "https://ddon-90-portfolio.vercel.app",
    siteName: "Diego Donaggio - My Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  );
}
