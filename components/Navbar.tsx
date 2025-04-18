"use client"

import Link from "next/link";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/app/contexts/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "About", href: "/" },
    { name: "Experiences", href: "/experiences" },
    { name: "Contact me", href: "/contact" },
  ];

  return (
    <nav role="navigation" className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto mb-10 sm:mb-15 space-y-4 sm:space-y-0">
      <div className="flex gap-4 sm:gap-8 flex-wrap justify-center">
        {navItems.map((item) => (
          <Button key={item.name} variant="link" asChild>
            <Link href={item.href}>{item.name}</Link>
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Button aria-label="theme" variant="outline" size="icon" onClick={toggleTheme}>
          {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
        <Button variant="default" className="text-base px-8 bg-black dark:bg-white text-white dark:text-black rounded-full">
          <Link href="/contact">
            Hire/Collab
          </Link>
        </Button>
      </div>
    </nav>
  )
}

