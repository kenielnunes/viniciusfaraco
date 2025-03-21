import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  return {
    title: "A Reforma Trabalhista e seus Impactos Práticos",
    date: "Março 1, 2025",
    author: "Vinicius Alves Faraco",
    category: "Direito Trabalhista",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
        <p class="text-xl leading-relaxed mb-6">A reforma trabalhista implementada pela Lei nº 13.467/2017 trouxe mudanças significativas nas relações de trabalho no Brasil. Este artigo analisa os principais impactos práticos dessas alterações após anos de sua implementação.</p>
        
        <h2 class="text-3xl font-bold mt-12 mb-6">As Principais Mudanças</h2>
        
        <p class="text-lg leading-relaxed mb-6">A reforma trabalhista alterou mais de 100 pontos da CLT, afetando diretamente empregadores e empregados em diversos aspectos das relações laborais.</p>
        
        <p class="text-lg leading-relaxed mb-6">Entre as principais mudanças, destacam-se:</p>
        
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li>Prevalência do negociado sobre o legislado</li>
          <li>Novas modalidades de contratação (trabalho intermitente)</li>
          <li>Alterações nas regras de jornada de trabalho</li>
          <li>Mudanças nos procedimentos para rescisão contratual</li>
          <li>Novas regras para contribuição sindical</li>
        </ul>
        
        <h2 class="text-3xl font-bold mt-12 mb-6">Impactos para Empregadores</h2>
        
        <p class="text-lg leading-relaxed mb-6">Para as empresas, a reforma trouxe maior flexibilidade na gestão da força de trabalho e redução de custos em alguns aspectos. No entanto, também exigiu adaptações em políticas internas e revisão de procedimentos para adequação às novas regras.
        
        <p class="text-lg leading-relaxed mb-6">A possibilidade de negociação direta com os empregados, sem necessidade de intermediação sindical em determinados casos, permitiu arranjos mais personalizados de trabalho, como home office, banco de horas e jornadas flexíveis.</p>
        
        <blockquote class="border-l-4 border-zinc-900 pl-6 italic my-8 text-xl">
          "A reforma trabalhista não é uma solução definitiva, mas um passo importante na modernização das relações de trabalho no Brasil."
          <cite class="block text-sm mt-2 not-italic">— Ministro do TST</cite>
        </blockquote>
        
        <h2 class="text-3xl font-bold mt-12 mb-6">Impactos para Trabalhadores</h2>
        
        <p class="text-lg leading-relaxed mb-6">Para os trabalhadores, os impactos são variados e dependem muito da categoria profissional e do setor econômico. Profissionais com maior qualificação e poder de negociação tendem a se beneficiar da flexibilidade, enquanto trabalhadores em posições mais vulneráveis podem enfrentar desafios adicionais.</p>
        
        <p class="text-lg leading-relaxed mb-6">A redução do papel dos sindicatos, especialmente com o fim da contribuição sindical obrigatória, também alterou a dinâmica de representação coletiva dos trabalhadores.</p>
        
        <h2 class="text-3xl font-bold mt-12 mb-6">Perspectivas Futuras</h2>
        
        <p class="text-lg leading-relaxed mb-6">Após anos de implementação, ainda há debates sobre possíveis ajustes na reforma. O monitoramento contínuo dos impactos e a jurisprudência que vem sendo formada pelos tribunais trabalhistas são essenciais para compreender a evolução desse novo cenário.</p>
        
        <p class="text-lg leading-relaxed mb-6">É fundamental que tanto empregadores quanto trabalhadores busquem informação qualificada e assessoria jurídica adequada para navegar nesse ambiente de constantes mudanças e interpretações.</p>
      `,
    relatedPosts: [
      {
        id: 2,
        title: "Direito Digital: Desafios na Era da Informação",
        slug: "direito-digital-desafios",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 5,
        title: "Acessibilidade no Sistema Judiciário: Além do Básico",
        slug: "acessibilidade-sistema-judiciario",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <div className="pt-20">
      <article className="container-custom section-spacing">
        {/* Back Button */}
        <div className="mb-10">
          <Button asChild variant="ghost" className="group">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>
          </Button>
        </div>

        {/* Post Header */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="text-sm font-medium text-zinc-500 mb-4">
            {post.category} • {post.date}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt={post.author}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-zinc-600">By {post.author}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-[16/9] bg-zinc-100 rounded-lg overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Post Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-zinc max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Author Bio */}
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-zinc-100 rounded-lg">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-zinc-200 overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt={post.author}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
              <p className="text-zinc-600">
                Full Stack Developer with a passion for typography and user experience. Writing about web development,
                design, and the intersection of technology and creativity.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {post.relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="group block bg-white rounded-lg overflow-hidden border border-zinc-200 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-zinc-100 overflow-hidden">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-zinc-600 transition-colors">{relatedPost.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

