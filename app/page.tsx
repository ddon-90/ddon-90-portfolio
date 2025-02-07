import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-100 dark:bg-zinc-900 p-4 sm:p-8">
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 items-center max-w-7xl mx-auto mb-10 sm:mb-20">
        <div className="relative mx-auto sm:mx-0" style={{ maxWidth: "400px", width: "100%" }}>
          <div className="aspect-square relative rounded-full overflow-hidden bg-gradient-to-b from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800">
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

        <div className="space-y-8 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold dark:text-white">Diego Donaggio</h1>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg text-justify">
            I began my career in an Engineering Studio as an Electric Industrial Engineer
            designing electrical and photovoltaic systems. Driven by a passion for IT, I pursued a degree
            in Computer Science and transitioned into a Software Engineer role. Over the years,
            I have cultivated a diverse skill set through 10+ years of experience across various engineering
            disciplines, progressively advancing to my current role as a Solution Engineer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a href="/2025_CV.pdf" target="_blank">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg dark:text-white dark:hover:bg-zinc-800">
                Download CV
              </Button>
            </a>
            <Button
              variant="default"
              className="bg-black dark:bg-white text-white dark:text-black rounded-full px-8 py-6 text-lg"
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
