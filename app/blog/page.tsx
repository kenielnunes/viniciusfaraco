import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "A Reforma Trabalhista e seus Impactos Práticos",
    excerpt:
      "Uma análise das principais mudanças trazidas pela reforma trabalhista e como elas afetam empregadores e empregados.",
    date: "Março 1, 2025",
    category: "Direito Trabalhista",
    image: "/placeholder.svg?height=400&width=600",
    slug: "reforma-trabalhista-impactos",
  },
  {
    id: 2,
    title: "Direito Digital: Desafios na Era da Informação",
    excerpt:
      "Explorando as questões jurídicas emergentes relacionadas à privacidade de dados, propriedade intelectual e crimes cibernéticos.",
    date: "Fevereiro 15, 2025",
    category: "Direito Digital",
    image: "/placeholder.svg?height=400&width=600",
    slug: "direito-digital-desafios",
  },
  {
    id: 3,
    title: "O Futuro do Direito Administrativo: Tendências para 2025",
    excerpt:
      "Analisando as tendências emergentes no direito administrativo que moldarão as práticas jurídicas nos próximos anos.",
    date: "Fevereiro 1, 2025",
    category: "Direito Administrativo",
    image: "/placeholder.svg?height=400&width=600",
    slug: "futuro-direito-administrativo",
  },
  {
    id: 4,
    title: "Mediação e Arbitragem: Alternativas Eficientes",
    excerpt:
      "Como os métodos alternativos de resolução de conflitos podem desafogar o judiciário e proporcionar soluções mais rápidas.",
    date: "Janeiro 20, 2025",
    category: "Resolução de Conflitos",
    image: "/placeholder.svg?height=400&width=600",
    slug: "mediacao-arbitragem-alternativas",
  },
  {
    id: 5,
    title: "Acessibilidade no Sistema Judiciário: Além do Básico",
    excerpt:
      "Explorando formas de tornar o sistema judiciário mais acessível para todos os cidadãos, com foco em tecnologia e simplificação de processos.",
    date: "Janeiro 5, 2025",
    category: "Acesso à Justiça",
    image: "/placeholder.svg?height=400&width=600",
    slug: "acessibilidade-sistema-judiciario",
  },
  {
    id: 6,
    title: "Da Faculdade ao Escritório: A Jornada de um Estudante de Direito",
    excerpt:
      "Minha experiência pessoal transitando da teoria acadêmica para a prática profissional e lições aprendidas ao longo do caminho.",
    date: "Dezembro 15, 2024",
    category: "Carreira Jurídica",
    image: "/placeholder.svg?height=400&width=600",
    slug: "faculdade-escritorio-jornada",
  },
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Artigos</h1>
          <p className="body-lg text-zinc-600">
            Reflexões, análises e perspectivas sobre direito, administração e o cenário jurídico atual.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <Link href={`/blog/${blogPosts[0].slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="text-sm font-medium text-zinc-500 mb-2">
                  {blogPosts[0].category} • {blogPosts[0].date}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-zinc-600 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-xl text-zinc-600 mb-6">{blogPosts[0].excerpt}</p>
                <Button
                  variant="outline"
                  size="lg"
                  className="group-hover:bg-zinc-900 group-hover:text-white transition-colors"
                >
                  Read Article
                </Button>
              </div>
              <div className="order-1 md:order-2 overflow-hidden rounded-lg">
                <div className="aspect-video bg-zinc-200 rounded-lg overflow-hidden">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-lg overflow-hidden border border-zinc-200 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-zinc-100 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-zinc-500 mb-2">
                  {post.category} • {post.date}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-zinc-600 transition-colors">{post.title}</h3>
                <p className="text-zinc-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

