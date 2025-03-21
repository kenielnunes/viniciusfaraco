import type { RefObject } from "react";
import {
  Calendar,
  Building,
  GraduationCap,
  Clock,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AcademicProject, Certification } from "@/types/experience";

interface EducationSectionProps {
  educationRef: RefObject<HTMLElement | null>;
  certifications: Certification[];
  academicProjects: AcademicProject[];
}

export function EducationSection({
  educationRef,
  certifications,
  academicProjects,
}: EducationSectionProps) {
  return (
    <section
      id="education"
      ref={educationRef}
      className="container-custom section-spacing animate-on-scroll"
    >
      <h2 className="heading-lg mb-10 relative">
        Formação
        <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">
          03
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Formação Acadêmica */}
        <div className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
          <div className="flex items-center mb-6">
            <GraduationCap className="h-10 w-10 text-primary mr-4" />
            <h3 className="text-2xl font-bold">Formação Acadêmica</h3>
          </div>

          <div className="border-l-4 border-primary pl-6 py-4 hover:border-primary/70 transition-colors">
            <h4 className="text-xl font-bold mb-2">Bacharelado em Direito</h4>
            <p className="text-lg font-medium text-primary mb-2">
              UNESC - Universidade do Extremo Sul Catarinense
            </p>
            <p className="text-muted-foreground mb-2">
              2020 - 2024 (8ª fase em andamento)
            </p>
            <p className="mb-4">
              Formação em Direito com ênfase em Direito Civil e Empresarial.
            </p>

            <div className="mb-4">
              <h5 className="font-medium mb-2">Atividades Complementares:</h5>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Participação no Núcleo de Prática Jurídica</li>
                <li>Membro do Centro Acadêmico de Direito</li>
                <li>Participação em competições de simulação de julgamentos</li>
                <li>Monitoria em disciplinas de Direito Civil</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projetos Acadêmicos */}
        <div className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
          <div className="flex items-center mb-6">
            <BookOpen className="h-10 w-10 text-primary mr-4" />
            <h3 className="text-2xl font-bold">Projetos Acadêmicos</h3>
          </div>

          <div className="space-y-6">
            {academicProjects.map((project) => (
              <div
                key={project.id}
                className="border-l-4 border-muted pl-4 py-2 hover:border-primary transition-colors"
              >
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    {project.period}
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-2 hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificações */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8 pb-2 border-b border-border">
          Certificações e Cursos
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {cert.title}
                </h4>
                {cert.certificate && (
                  <Badge variant="outline" className="bg-primary/10">
                    Certificado
                  </Badge>
                )}
              </div>

              <p className="text-muted-foreground mb-6">{cert.description}</p>

              <div className="space-y-3 mb-6 p-4 bg-muted/20 rounded-lg">
                <div className="flex items-center text-sm">
                  <Building className="h-4 w-4 mr-2 text-primary" />
                  <span className="font-medium mr-2">Instituição:</span>
                  <span className="text-muted-foreground">
                    {cert.institution}
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  <span className="font-medium mr-2">Data:</span>
                  <span className="text-muted-foreground">{cert.date}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span className="font-medium mr-2">Carga Horária:</span>
                  <span className="text-muted-foreground">{cert.duration}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
