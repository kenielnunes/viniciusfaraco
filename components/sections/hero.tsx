import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container-custom section-spacing flex flex-col justify-center min-h-[90vh]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div>
            <p className="text-muted-foreground text-lg mb-2 font-medium">
              Olá, eu sou
            </p>
            <h1 className="heading-xl mb-4 animate-text-gradient bg-gradient-to-r from-primary via-purple-500 to-primary bg-300% text-transparent bg-clip-text">
              Vinicius Faraco
            </h1>
            <h2 className="heading-md text-muted-foreground">
              Profissional Jurídico
            </h2>
          </div>
          <p className="body-lg text-muted-foreground max-w-md">
            Estudante de Direito na UNESC (8ª fase) com experiência em
            escritório de advocacia, buscando oportunidades nas áreas jurídica e
            administrativa.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="text-lg px-8">
              <a href="#contact">Entre em Contato</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 hover:scale-105 transition-transform"
            >
              <a href="#experience">Ver Experiências</a>
            </Button>
          </div>
        </div>
        <div className="relative animate-fade-in-right">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-muted rounded-full opacity-50 animate-blob"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-muted rounded-full opacity-50 animate-blob animation-delay-2000"></div>
          <div className="relative z-10 aspect-square rounded-full overflow-hidden border-4 border-primary/20 shadow-xl animate-border-pulse">
            <Image
              src="/"
              alt="Vinicius Faraco"
              width={600}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <a href="#about" className="animate-bounce">
          <ArrowRight className="h-10 w-10 rotate-90 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}
