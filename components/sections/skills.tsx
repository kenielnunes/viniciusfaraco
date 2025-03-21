import { Skill } from "@/types/experience";
import type { RefObject } from "react";

interface SkillsSectionProps {
  skillsRef: RefObject<HTMLElement | null>;
}

export function SkillsSection({ skillsRef }: SkillsSectionProps) {
  const juridicalSkills: Skill[] = [
    { name: "Direito Civil", level: "Avançado" },
    { name: "Direito Trabalhista", level: "Intermediário" },
    { name: "Direito Administrativo", level: "Intermediário" },
    { name: "Pesquisa Jurídica", level: "Avançado" },
    { name: "Redação Jurídica", level: "Avançado" },
  ];

  const administrativeSkills: Skill[] = [
    { name: "Gestão de Processos", level: "Avançado" },
    { name: "Atendimento ao Cliente", level: "Avançado" },
    { name: "Microsoft Office", level: "Avançado" },
    { name: "Organização", level: "Avançado" },
    { name: "Trabalho em Equipe", level: "Avançado" },
  ];

  const complementarySkills: string[] = [
    "Comunicação",
    "Negociação",
    "Análise Crítica",
    "Resolução de Problemas",
    "Ética Profissional",
    "Adaptabilidade",
    "Proatividade",
    "Empatia",
  ];

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="container-custom section-spacing animate-on-scroll"
    >
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="heading-lg mb-6 relative">
            Habilidades
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">
              04
            </span>
          </h2>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-border">
                Habilidades Jurídicas
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {juridicalSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-card border border-border rounded-lg p-4 hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <div className="font-medium text-lg mb-1">{skill.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {skill.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-border">
                Habilidades Administrativas
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {administrativeSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-card border border-border rounded-lg p-4 hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <div className="font-medium text-lg mb-1">{skill.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {skill.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-border">
                Competências Complementares
              </h3>
              <div className="flex flex-wrap gap-3">
                {complementarySkills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-muted/30 border border-border rounded-full px-5 py-2.5 text-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
