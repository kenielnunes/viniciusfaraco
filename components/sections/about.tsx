import { Button } from "@/components/ui/button";
import type { RefObject } from "react";

interface AboutSectionProps {
  aboutRef: RefObject<HTMLElement | null>;
}

export function AboutSection({ aboutRef }: AboutSectionProps) {
  return (
    <section
      id="about"
      ref={aboutRef}
      className="container-custom section-spacing animate-on-scroll"
    >
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="heading-lg mb-6 relative">
            Sobre
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">
              01
            </span>
          </h2>
        </div>
        <div className="md:col-span-2">
          <p className="body-lg mb-6">
            Sou estudante de Direito na UNESC, atualmente cursando a 8ª fase.
            Possuo experiência como estagiário em escritório de advocacia, onde
            desenvolvi habilidades em pesquisa jurídica, elaboração de peças
            processuais e atendimento ao cliente.
          </p>
          <p className="body-lg mb-6">
            Minha formação acadêmica e experiência profissional me
            proporcionaram uma sólida compreensão dos princípios jurídicos e
            procedimentos administrativos. Estou constantemente buscando
            aprimorar meus conhecimentos através de cursos complementares e
            leituras especializadas.
          </p>
          <p className="body-lg mb-10">
            Também participo regularmente de eventos e cursos para me manter
            atualizado sobre as mudanças na legislação e novas práticas
            administrativas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-transform"
            >
              <a href="#education">Ver Formação</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-transform"
            >
              <a href="#skills">Ver Habilidades</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
