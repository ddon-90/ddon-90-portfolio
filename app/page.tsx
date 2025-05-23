import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main role="main" className="min-h-screen bg-zinc-100 dark:bg-zinc-900 p-4 sm:p-8">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center max-w-7xl mx-auto mb-10 md:mb-20">
        <div className="relative mx-auto md:mx-0 w-full max-w-md">
          <div className="aspect-square relative rounded-t-3xl overflow-hidden bg-gradient-to-b from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 border-4 border-black dark:border-zinc-700">
            <Image
              src="https://avatars.githubusercontent.com/u/38855585"
              alt="Profile"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 400px) 50vw, 100vw"
            />
          </div>
        </div>

        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold dark:text-white">Diego Donaggio</h1>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg text-justify">
            I began my career in an Engineering Studio as an Electric Industrial Engineer
            designing electrical and photovoltaic systems. Driven by a passion for IT, I pursued a degree
            in Computer Science and transitioned into a Software Engineer role. Over the years,
            I have cultivated a diverse skill set through 10+ years of experience across various engineering
            disciplines, progressively advancing to my current role as a Solution Engineer.
          </p>
          <div className="flex flex-col xl:flex-row gap-4 xl:gap-14 justify-between">
            <a className="w-full" href="/2025_CV.pdf" target="_blank">
              <Button variant="outline" className="w-full rounded-full py-6 text-lg dark:text-white dark:hover:bg-zinc-800">
                Download CV
              </Button>
            </a>
            <Button
              variant="default"
              className="w-full bg-black dark:bg-white text-white dark:text-black rounded-full py-6 text-lg"
            >
              <Link href="/experiences">
                Explore More
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
