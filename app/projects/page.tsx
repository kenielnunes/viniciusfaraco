import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Calendar, Building, GraduationCap } from "lucide-react"

export default function ProjectsPage() {
  const experiences = [
    {
      id: 1,
      title: "Estágio em Escritório de Advocacia",
      period: "Jan 2023 - Atual",
      company: "Escritório Jurídico Silva & Associados",
      description:
        "Atuação em processos cíveis e trabalhistas, elaboração de peças processuais, pesquisa jurisprudencial e atendimento ao cliente.",
      responsibilities: [
        "Elaboração de petições iniciais, contestações e recursos",
        "Pesquisa de jurisprudência e doutrina para fundamentação de peças processuais",
        "Acompanhamento de audiências e diligências",
        "Atendimento e orientação inicial a clientes",
      ],
      skills: ["Direito Civil", "Direito Trabalhista", "Atendimento ao Cliente"],
      slug: "estagio-advocacia",
    },
    {
      id: 2,
      title: "Projeto de Extensão Universitária",
      period: "Mar 2022 - Dez 2022",
      company: "UNESC - Universidade do Extremo Sul Catarinense",
      description:
        "Participação em projeto de assistência jurídica gratuita à comunidade, oferecendo orientação legal e acompanhamento de processos.",
      responsibilities: [
        "Atendimento jurídico à população de baixa renda",
        "Elaboração de documentos jurídicos",
        "Orientação sobre direitos básicos e procedimentos legais",
        "Participação em ações comunitárias de educação jurídica",
      ],
      skills: ["Direito Civil", "Atendimento ao Público", "Orientação Jurídica"],
      slug: "projeto-extensao",
    },
    {
      id: 3,
      title: "Monitoria em Direito Civil",
      period: "Ago 2021 - Dez 2021",
      company: "UNESC - Universidade do Extremo Sul Catarinense",
      description:
        "Auxílio a professores e alunos em disciplinas de Direito Civil, elaboração de materiais de estudo e condução de grupos de discussão.",
      responsibilities: [
        "Assistência aos alunos com dificuldades na disciplina",
        "Preparação de materiais complementares de estudo",
        "Organização de grupos de discussão sobre temas específicos",
        "Auxílio na correção de exercícios e simulados",
      ],
      skills: ["Direito Civil", "Didática", "Pesquisa Jurídica"],
      slug: "monitoria-direito-civil",
    },
  ]

  const academicProjects = [
    {
      id: 4,
      title: "Pesquisa Acadêmica - Direito Digital",
      period: "2022",
      description:
        "Participação em grupo de pesquisa sobre questões jurídicas relacionadas à privacidade de dados e crimes cibernéticos.",
      technologies: ["Direito Digital", "LGPD", "Pesquisa Acadêmica"],
      githubUrl: "https://github.com/viniciusfaraco/pesquisa-direito-digital",
    },
    {
      id: 5,
      title: "Artigo Científico - Reforma Trabalhista",
      period: "2021",
      description:
        "Elaboração de artigo científico analisando os impactos da reforma trabalhista nas relações de trabalho contemporâneas.",
      technologies: ["Direito Trabalhista", "Pesquisa Jurídica", "Redação Acadêmica"],
      githubUrl: "https://github.com/viniciusfaraco/artigo-reforma-trabalhista",
    },
    {
      id: 6,
      title: "Análise de Jurisprudência - STF",
      period: "2020",
      description:
        "Compilação e análise de decisões recentes do Supremo Tribunal Federal em matéria de direitos fundamentais.",
      technologies: ["Direito Constitucional", "Jurisprudência", "Análise Legal"],
      githubUrl: "https://github.com/viniciusfaraco/jurisprudencia-stf",
    },
  ]

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Experiências</h1>
          <p className="body-lg text-muted-foreground">
            Um resumo da minha trajetória profissional e acadêmica nas áreas jurídica e administrativa.
          </p>
        </div>

        {/* Experiências Profissionais */}
        <div className="mb-24">
          <h2 className="heading-lg mb-10 relative">
            Experiências Profissionais
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
          </h2>

          <div className="relative border-l border-muted ml-6 pl-12 space-y-16 before:absolute before:left-0 before:top-0 before:h-full before:border-l-2 before:border-primary/30">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Círculo na linha do tempo */}
                <div className="absolute w-8 h-8 bg-primary rounded-full -left-16 flex items-center justify-center text-primary-foreground font-bold">
                  {index + 1}
                </div>

                {/* Conteúdo */}
                <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <h3 className="text-2xl font-bold">{experience.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-primary mb-4">
                    <Building className="h-4 w-4 mr-2" />
                    <span className="font-medium">{experience.company}</span>
                  </div>

                  <p className="text-muted-foreground mb-6">{experience.description}</p>

                  <div className="mb-6">
                    <h4 className="font-medium mb-3 text-lg">Responsabilidades:</h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {experience.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Link href={`/projects/${experience.slug}`}>Ver Detalhes</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projetos Acadêmicos */}
        <div>
          <h2 className="heading-lg mb-10 relative">
            Projetos Acadêmicos
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">02</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
            Estes projetos acadêmicos demonstram meu interesse em pesquisa jurídica e produção de conteúdo
            especializado.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">{project.period}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span>Ver Projeto</span>
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

