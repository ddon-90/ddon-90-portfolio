import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";

import { ThemeProvider } from "./contexts/ThemeContext";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Diego Donaggio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={spaceMono.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
