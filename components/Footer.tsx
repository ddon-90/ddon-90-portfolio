import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          © {new Date().getFullYear()} Diego Donaggio. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/ddon-90" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/don90/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

