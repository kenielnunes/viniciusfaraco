import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a CMS or database
const getProject = (slug: string) => {
  return {
    title: "Estágio em Escritório de Advocacia",
    client: "Escritório Jurídico Silva & Associados",
    year: "2023-2024",
    role: "Estagiário Jurídico",
    description:
      "Atuação em processos cíveis e trabalhistas, elaboração de peças processuais, pesquisa jurisprudencial e atendimento ao cliente.",
    challenge:
      "O principal desafio foi aplicar os conhecimentos teóricos adquiridos na faculdade em situações práticas do dia a dia de um escritório de advocacia, lidando com prazos rigorosos e casos complexos que exigiam pesquisa aprofundada.",
    solution:
      "Desenvolvi um sistema pessoal de organização para gerenciar múltiplos casos simultaneamente, criei modelos de documentos para agilizar a elaboração de peças processuais comuns e estabeleci uma rotina de estudos para aprofundar conhecimentos em áreas específicas conforme a demanda dos casos.",
    technologies: ["Direito Civil", "Direito Trabalhista", "Pesquisa Jurídica", "Atendimento ao Cliente"],
    featuredImage: "/placeholder.svg?height=800&width=1600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/viniciusfaraco/portfolio-juridico",
    nextProject: {
      title: "Projeto de Extensão Universitária",
      slug: "projeto-extensao",
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  return (
    <div className="pt-20">
      <article className="container-custom section-spacing">
        {/* Back Button */}
        <div className="mb-10">
          <Button asChild variant="ghost" className="group">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Projects</span>
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-zinc-600 mb-8">{project.description}</p>
          <div className="flex flex-wrap gap-6">
            {project.liveUrl && (
              <Button asChild size="lg" className="gap-2">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <span>View Live Site</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span>View Code</span>
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="aspect-video bg-zinc-100 rounded-lg overflow-hidden">
            <Image
              src={project.featuredImage || "/placeholder.svg"}
              alt={project.title}
              width={1600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Project Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-zinc-500 uppercase">Client</h3>
                <p className="text-lg">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm text-zinc-500 uppercase">Year</h3>
                <p className="text-lg">{project.year}</p>
              </div>
              <div>
                <h3 className="text-sm text-zinc-500 uppercase">Role</h3>
                <p className="text-lg">{project.role}</p>
              </div>
              <div>
                <h3 className="text-sm text-zinc-500 uppercase">Technologies</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-lg text-zinc-600">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-lg text-zinc-600">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="aspect-video bg-zinc-100 rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Project */}
        {project.nextProject && (
          <div className="border-t border-zinc-200 pt-16">
            <div className="text-center">
              <p className="text-zinc-500 mb-4">Next Project</p>
              <h2 className="text-3xl font-bold mb-8">{project.nextProject.title}</h2>
              <Button asChild size="lg">
                <Link href={`/projects/${project.nextProject.slug}`}>View Project</Link>
              </Button>
            </div>
          </div>
        )}
      </article>
    </div>
  )
}

