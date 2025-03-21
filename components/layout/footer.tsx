import Link from "next/link"
import { ThemeToggle } from "@/components/theme/theme-toggle"

export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="font-playfair text-2xl font-bold tracking-tight mb-4 md:mb-0">
          Vinicius<span className="text-muted-foreground">Faraco</span>
        </Link>

        <ThemeToggle />
      </div>
    </footer>
  )
}

