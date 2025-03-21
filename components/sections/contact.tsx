import type { RefObject } from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  contactRef: RefObject<HTMLElement | null>;
}

export function ContactSection({ contactRef }: ContactSectionProps) {
  return (
    <section
      id="contact"
      ref={contactRef}
      className="container-custom section-spacing animate-on-scroll"
    >
      <h2 className="heading-lg mb-16 relative text-center">
        Contato
        <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 left-1/2 -translate-x-1/2 opacity-80">
          05
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-2xl leading-relaxed mb-10">
            Estou sempre aberto a novas oportunidades profissionais nas áreas
            jurídica e administrativa. Sinta-se à vontade para entrar em
            contato!
          </p>
          <div className="flex flex-col gap-6">
            <a
              href="mailto:vinicius.faraco@example.com"
              className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="link-underline">
                vinicius.faraco@example.com
              </span>
            </a>
            <a
              href="https://linkedin.com/in/viniciusfaraco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="link-underline">
                linkedin.com/in/viniciusfaraco
              </span>
            </a>
            <a
              href="https://github.com/viniciusfaraco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="link-underline">github.com/viniciusfaraco</span>
            </a>
            <a
              href="https://twitter.com/viniciusfaraco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
            >
              <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="link-underline">twitter.com/viniciusfaraco</span>
            </a>
          </div>
        </div>
        <div>
          <form className="flex flex-col gap-8">
            <div>
              <label htmlFor="name" className="block text-lg mb-2 font-medium">
                Nome
              </label>
              <input
                id="name"
                type="text"
                className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg mb-2 font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg mb-2 font-medium"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
              ></textarea>
            </div>
            <div>
              <Button
                size="lg"
                className="text-lg px-8 w-full md:w-auto hover:scale-105 transition-transform"
              >
                Enviar Mensagem
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
