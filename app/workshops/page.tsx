import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock workshops data
const workshops = [
  {
    id: 1,
    title: "Curso de Prática Processual Civil",
    description:
      "Aprendizado prático sobre elaboração de peças processuais, prazos e procedimentos no processo civil brasileiro.",
    date: "Abril 15, 2025",
    time: "10:00 - 14:00",
    duration: "4 horas",
    location: "Online",
    capacity: "30 participantes",
    price: "R$149",
    image: "/placeholder.svg?height=400&width=800",
    status: "Upcoming",
    slug: "pratica-processual-civil",
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Advogada",
        company: "Escritório Jurídico",
        quote: "Este curso transformou minha abordagem na elaboração de peças processuais. Altamente recomendado!",
      },
    ],
  },
  {
    id: 2,
    title: "Especialização em Direito Digital",
    description:
      "Uma introdução abrangente ao direito digital para profissionais jurídicos, abordando temas como LGPD, crimes cibernéticos e propriedade intelectual.",
    date: "Maio 10, 2025",
    time: "9:00 - 12:00",
    duration: "3 horas",
    location: "Centro Jurídico, São Paulo",
    capacity: "25 participantes",
    price: "R$129",
    image: "/placeholder.svg?height=400&width=800",
    status: "Upcoming",
    slug: "direito-digital",
    testimonials: [
      {
        name: "Michael Chen",
        role: "Advogado Sênior",
        company: "Tech Jurídico",
        quote:
          "O equilíbrio perfeito entre teoria e prática. Agora estou aplicando os conhecimentos em todos os meus casos de direito digital.",
      },
    ],
  },
  {
    id: 3,
    title: "Fundamentos de Direito Administrativo",
    description:
      "Explore os princípios do direito administrativo e aprenda sobre procedimentos administrativos, licitações e contratos públicos.",
    date: "Março 5, 2025",
    time: "13:00 - 17:00",
    duration: "4 horas",
    location: "Online",
    capacity: "35 participantes",
    price: "R$149",
    image: "/placeholder.svg?height=400&width=800",
    status: "Past",
    slug: "direito-administrativo",
    testimonials: [
      {
        name: "Alex Rivera",
        role: "Gestor Público",
        company: "Prefeitura Municipal",
        quote:
          "O curso de Direito Administrativo forneceu ao nosso departamento o conhecimento necessário para melhorar significativamente nossos procedimentos.",
      },
    ],
  },
  {
    id: 4,
    title: "Técnicas de Mediação e Arbitragem",
    description:
      "Domine a arte da mediação e arbitragem para resolução alternativa de conflitos. Este curso aborda técnicas de negociação, mediação e procedimentos arbitrais.",
    date: "Fevereiro 20, 2025",
    time: "10:00 - 15:00",
    duration: "5 horas",
    location: "Centro de Mediação, Rio de Janeiro",
    capacity: "20 participantes",
    price: "R$179",
    image: "/placeholder.svg?height=400&width=800",
    status: "Past",
    slug: "mediacao-arbitragem",
    testimonials: [
      {
        name: "Emily Wong",
        role: "Advogada",
        company: "Consultoria Jurídica",
        quote:
          "Este curso preencheu a lacuna entre teoria e prática para mim. Agora tenho uma compreensão muito melhor dos princípios de mediação.",
      },
    ],
  },
  {
    id: 5,
    title: "Gestão de Escritório de Advocacia",
    description:
      "Explore diferentes soluções de gestão para escritórios de advocacia e aprenda quando usar cada abordagem. Este curso aborda marketing jurídico, gestão financeira e atendimento ao cliente.",
    date: "Janeiro 15, 2025",
    time: "9:00 - 13:00",
    duration: "4 horas",
    location: "Online",
    capacity: "30 participantes",
    price: "R$149",
    image: "/placeholder.svg?height=400&width=800",
    status: "Past",
    slug: "gestao-escritorio-advocacia",
    testimonials: [
      {
        name: "David Kim",
        role: "Advogado",
        company: "Escritório Associados",
        quote:
          "As comparações entre diferentes estratégias de gestão foram incrivelmente valiosas. Agora tenho um plano claro para meu escritório.",
      },
    ],
  },
]

export default function WorkshopsPage() {
  const certifications = [
    {
      id: 1,
      title: "Curso de Prática Processual Civil",
      institution: "Escola Superior de Advocacia - ESA",
      date: "Abril 2023",
      duration: "40 horas",
      description:
        "Aprendizado prático sobre elaboração de peças processuais, prazos e procedimentos no processo civil brasileiro.",
      skills: ["Direito Processual Civil", "Redação Jurídica", "Prática Forense"],
      status: "Concluído",
      certificate: true,
      slug: "pratica-processual-civil",
    },
    {
      id: 2,
      title: "Especialização em Direito Digital",
      institution: "Instituto Brasileiro de Direito Digital",
      date: "Junho 2023",
      duration: "60 horas",
      description: "Estudo abrangente sobre LGPD, crimes cibernéticos, propriedade intelectual e contratos digitais.",
      skills: ["Direito Digital", "LGPD", "Crimes Cibernéticos"],
      status: "Concluído",
      certificate: true,
      slug: "direito-digital",
    },
    {
      id: 3,
      title: "Fundamentos de Direito Administrativo",
      institution: "Escola Nacional de Administração Pública - ENAP",
      date: "Agosto 2022",
      duration: "45 horas",
      description:
        "Estudo dos princípios do direito administrativo, procedimentos administrativos, licitações e contratos públicos.",
      skills: ["Direito Administrativo", "Licitações", "Contratos Públicos"],
      status: "Concluído",
      certificate: true,
      slug: "direito-administrativo",
    },
    {
      id: 4,
      title: "Técnicas de Mediação e Arbitragem",
      institution: "Conselho Nacional de Justiça - CNJ",
      date: "Outubro 2022",
      duration: "30 horas",
      description:
        "Capacitação em técnicas de mediação, conciliação e arbitragem para resolução alternativa de conflitos.",
      skills: ["Mediação", "Arbitragem", "Resolução de Conflitos"],
      status: "Concluído",
      certificate: true,
      slug: "mediacao-arbitragem",
    },
    {
      id: 5,
      title: "Gestão de Escritório de Advocacia",
      institution: "OAB - Ordem dos Advogados do Brasil",
      date: "Janeiro 2023",
      duration: "20 horas",
      description: "Treinamento em gestão administrativa, financeira e de marketing para escritórios de advocacia.",
      skills: ["Gestão Administrativa", "Marketing Jurídico", "Atendimento ao Cliente"],
      status: "Concluído",
      certificate: true,
      slug: "gestao-escritorio-advocacia",
    },
    {
      id: 6,
      title: "Excel Avançado para Área Jurídica",
      institution: "Fundação Getúlio Vargas - FGV",
      date: "Março 2022",
      duration: "25 horas",
      description:
        "Aplicação de ferramentas avançadas do Excel para gestão de processos, controle de prazos e análise de dados jurídicos.",
      skills: ["Excel", "Gestão de Processos", "Análise de Dados"],
      status: "Concluído",
      certificate: true,
      slug: "excel-avancado-juridico",
    },
  ]

  const upcomingCourses = [
    {
      id: 7,
      title: "Compliance e Governança Corporativa",
      institution: "Instituto Brasileiro de Governança Corporativa - IBGC",
      date: "Previsão: Maio 2025",
      duration: "50 horas",
      description:
        "Estudo sobre implementação de programas de compliance, gestão de riscos e melhores práticas de governança corporativa.",
      skills: ["Compliance", "Governança Corporativa", "Gestão de Riscos"],
      status: "Planejado",
      slug: "compliance-governanca",
    },
    {
      id: 8,
      title: "Direito Empresarial Aplicado",
      institution: "Fundação Dom Cabral - FDC",
      date: "Previsão: Julho 2025",
      duration: "40 horas",
      description:
        "Curso prático sobre aspectos jurídicos da constituição e administração de empresas, contratos empresariais e recuperação judicial.",
      skills: ["Direito Empresarial", "Contratos", "Recuperação Judicial"],
      status: "Planejado",
      slug: "direito-empresarial",
    },
  ]

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Formação Complementar</h1>
          <p className="body-lg text-muted-foreground">
            Cursos e certificações para aprimoramento contínuo nas áreas jurídica e administrativa.
          </p>
        </div>

        {/* Certificações Concluídas */}
        <div className="mb-20">
          <h2 className="heading-lg mb-10 relative">
            Certificações
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  {cert.certificate && (
                    <Badge variant="outline" className="bg-primary/10">
                      Certificado
                    </Badge>
                  )}
                </div>

                <p className="text-muted-foreground mb-4">{cert.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="font-medium mr-2">Instituição:</span>
                    <span className="text-muted-foreground">{cert.institution}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-medium mr-2">Data:</span>
                    <span className="text-muted-foreground">{cert.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-medium mr-2">Carga Horária:</span>
                    <span className="text-muted-foreground">{cert.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>

                <Button asChild variant="outline" className="w-full mt-2">
                  <Link href={`/workshops/${cert.slug}`}>Ver Detalhes</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Cursos Planejados */}
        <div className="mb-20">
          <h2 className="heading-lg mb-10 relative">
            Próximos Cursos
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">02</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingCourses.map((course) => (
              <div
                key={course.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <Badge>Planejado</Badge>
                </div>

                <p className="text-muted-foreground mb-4">{course.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="font-medium mr-2">Instituição:</span>
                    <span className="text-muted-foreground">{course.institution}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-medium mr-2">Data:</span>
                    <span className="text-muted-foreground">{course.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-medium mr-2">Carga Horária:</span>
                    <span className="text-muted-foreground">{course.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formação Acadêmica */}
        <div className="mb-20">
          <h2 className="heading-lg mb-10 relative">
            Formação Acadêmica
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">03</span>
          </h2>

          <div className="border-l-4 border-primary pl-6 py-4">
            <h3 className="text-2xl font-bold mb-2">Bacharelado em Direito</h3>
            <p className="text-lg font-medium text-primary mb-2">UNESC - Universidade do Extremo Sul Catarinense</p>
            <p className="text-muted-foreground mb-2">2020 - 2024 (8ª fase em andamento)</p>
            <p className="mb-4">Formação em Direito com ênfase em Direito Civil e Empresarial.</p>

            <div className="mb-4">
              <h4 className="font-medium mb-2">Atividades Complementares:</h4>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Participação no Núcleo de Prática Jurídica</li>
                <li>Membro do Centro Acadêmico de Direito</li>
                <li>Participação em competições de simulação de julgamentos</li>
                <li>Monitoria em disciplinas de Direito Civil</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-muted/30 p-12 rounded-lg border border-border">
          <h2 className="text-3xl font-bold mb-4">Desenvolvimento Contínuo</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estou sempre em busca de novas oportunidades de aprendizado e desenvolvimento profissional. Entre em contato
            para discutir possibilidades de colaboração.
          </p>
          <Button asChild size="lg">
            <Link href="/#contact">Entre em Contato</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

