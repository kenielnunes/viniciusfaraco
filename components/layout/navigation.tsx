"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme/theme-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const routes = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "#about" },
    { name: "Experiências", path: "#experience" },
    { name: "Formação", path: "#education" },
    { name: "Habilidades", path: "#skills" },
    { name: "Contato", path: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-custom flex items-center justify-between h-20">
        <Link href="/" className="font-playfair text-2xl font-bold tracking-tight">
          Vinicius<span className="text-muted-foreground">Faraco</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              className={cn("link-underline text-lg transition-colors hover:text-foreground text-muted-foreground")}
            >
              {route.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-background z-40 p-6">
          <nav className="flex flex-col space-y-6 text-center">
            {routes.map((route) => (
              <a
                key={route.path}
                href={route.path}
                className="text-2xl py-2 transition-colors text-muted-foreground hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

