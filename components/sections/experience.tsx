import { Experience } from "@/types/experience";
import { Calendar, Building } from "lucide-react";
import type { RefObject } from "react";

interface ExperienceSectionProps {
  experienceRef: RefObject<HTMLElement | null>;
  experiences: Experience[];
}

export function ExperienceSection({
  experienceRef,
  experiences,
}: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      ref={experienceRef}
      className="container-custom section-spacing animate-on-scroll"
    >
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
        <h2 className="heading-lg relative">
          Experiências Profissionais
          <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">
            02
          </span>
        </h2>
      </div>

      <div className="relative border-l-2 border-muted ml-6 pl-16 space-y-20 before:absolute before:left-0 before:top-0 before:h-full before:border-l-2 before:border-primary/30">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative group">
            {/* Círculo na linha do tempo */}
            <div className="absolute w-10 h-10 bg-primary rounded-full -left-20 flex items-center justify-center text-primary-foreground font-bold group-hover:scale-110 transition-transform">
              {index + 1}
            </div>

            {/* Conteúdo */}
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 group-hover:translate-x-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {experience.title}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{experience.period}</span>
                </div>
              </div>

              <div className="flex items-center text-primary mb-6">
                <Building className="h-4 w-4 mr-2" />
                <span className="font-medium">{experience.company}</span>
              </div>

              <p className="text-muted-foreground mb-8">
                {experience.description}
              </p>

              <div className="mb-8">
                <h4 className="font-medium mb-4 text-lg pb-2 border-b border-border">
                  Responsabilidades:
                </h4>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
