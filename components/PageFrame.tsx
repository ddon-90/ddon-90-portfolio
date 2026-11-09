import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PageFrame({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 p-4 sm:p-8">
      <Navbar />
      <main role="main">{children}</main>
      <Footer />
    </div>
  );
}