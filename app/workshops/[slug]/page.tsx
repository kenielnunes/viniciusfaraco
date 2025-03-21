import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// This would typically come from a CMS or database
const getWorkshop = (slug: string) => {
  return {
    title: "Curso de Prática Processual Civil",
    description: "Aprendizado prático sobre elaboração de peças processuais, prazos e procedimentos no processo civil brasileiro.",
    longDescription: `
        <p>Este curso intensivo é projetado para estudantes de Direito e advogados iniciantes que desejam aprimorar suas habilidades práticas em processo civil. Mergulharemos em técnicas avançadas de elaboração de peças processuais, cálculo de prazos e estratégias processuais.</p>
        
        <p>Ao longo do curso, você trabalhará em exercícios práticos e exemplos reais que demonstram como aplicar esses conhecimentos em seus próprios casos.</p>
      `,
    date: "Abril 15, 2025",
    time: "10:00 - 14:00",
    duration: "4 horas",
    location: "Online",
    capacity: "30 participantes",
    price: "R$149",
    image: "/placeholder.svg?height=600&width=1200",
    status: "Upcoming",
    instructor: {
      name: "Vinicius Alves Faraco",
      bio: "Estudante de Direito na UNESC (8ª fase) com experiência em escritório de advocacia. Vinicius tem se especializado em processo civil e compartilha conhecimentos práticos adquiridos em sua experiência profissional.",
      image: "/placeholder.svg?height=200&width=200",
    },
    topics: [
      "Técnicas de redação jurídica",
      "Elaboração de petições iniciais",
      "Contestações e recursos",
      "Cálculo de prazos processuais",
      "Estratégias processuais eficientes",
      "Uso de jurisprudência e precedentes",
    ],
    prerequisites: [
      "Conhecimento básico de Direito Civil",
      "Familiaridade com o Código de Processo Civil",
      "Noções de prática jurídica",
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Advogada",
        company: "Escritório Jurídico",
        quote: "Este curso transformou minha abordagem na elaboração de peças processuais. Altamente recomendado!",
      },
      {
        name: "Michael Chen",
        role: "Estudante de Direito",
        company: "Universidade Federal",
        quote:
          "O equilíbrio perfeito entre teoria e prática. Agora me sinto muito mais confiante para iniciar meu estágio.",
      },
      relatedWorkshops: [
        {
          title: \"Especialização em Direito Digital",
          slug: "direito-digital",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Técnicas de Mediação e Arbitragem",
          slug: "mediacao-arbitragem",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    }
  }
}

export default function WorkshopPage({ params }: { params: { slug: string } }) {
  const workshop = getWorkshop(params.slug)

  return (
    <div className="pt-20">
      <article className="container-custom section-spacing">
        {/* Back Button */}
        <div className="mb-10">
          <Button asChild variant="ghost" className="group">
            <Link href="/workshops" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Workshops</span>
            </Link>
          </Button>
        </div>

        {/* Workshop Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-4">
              <Badge variant={workshop.status === "Upcoming" ? "default" : "secondary"}>{workshop.status}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{workshop.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{workshop.description}</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-3" />
                <span>{workshop.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3" />
                <span>
                  {workshop.time} ({workshop.duration})
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3" />
                <span>{workshop.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-3" />
                <span>{workshop.capacity}</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-3xl font-bold">{workshop.price}</div>
            </div>

            {workshop.status === "Upcoming" && (
              <Button size="lg" className="w-full md:w-auto">
                Register Now
              </Button>
            )}
          </div>

          <div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <Image
                src={workshop.image || "/placeholder.svg"}
                alt={workshop.title}
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
  </div>
          </div>
        </div>
  ;<div className="grid md:grid-cols-3 gap-12 mb-16">
    <div className="md:col-span-2">
      <h2 className="text-2xl font-bold mb-6">About This Workshop</h2>
      <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: workshop.longDescription }} />

      <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
      <ul className="space-y-3 mb-8">
        {workshop.topics.map((topic, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>{topic}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mb-6">Prerequisites</h2>
      <ul className="space-y-3 mb-8">
        {workshop.prerequisites.map((prerequisite, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>{prerequisite}</span>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <div className="bg-muted/30 p-6 rounded-lg border border-border mb-8">
        <h2 className="text-xl font-bold mb-4">Your Instructor</h2>
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full bg-muted overflow-hidden mr-4">
            <Image
              src={workshop.instructor.image || "/placeholder.svg"}
              alt={workshop.instructor.name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-bold">{workshop.instructor.name}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{workshop.instructor.bio}</p>
      </div>

      {workshop.status === "Upcoming" && (
        <div className="bg-muted/30 p-6 rounded-lg border border-border">
          <h2 className="text-xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Secure your spot now. Space is limited to ensure a quality learning experience.
          </p>
          <Button className="w-full">Register Now</Button>
        </div>
      )}
    </div>
  </div>
  workshop.testimonials && workshop.testimonials.length > 0 && (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8">What Participants Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {workshop.testimonials.map((testimonial, index) => (
          <div key={index} className="bg-muted/30 p-8 rounded-lg border border-border">
            <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-muted overflow-hidden mr-4">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
  workshop.relatedWorkshops && workshop.relatedWorkshops.length > 0 && (
    <div>
      <h2 className="text-2xl font-bold mb-8">Related Workshops</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {workshop.relatedWorkshops.map((relatedWorkshop, index) => (
          <Link
            key={index}
            href={`/workshops/${relatedWorkshop.slug}`}
            className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
          >
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-muted overflow-hidden">
                <Image
                  src={relatedWorkshop.image || "/placeholder.svg"}
                  alt={relatedWorkshop.title}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <div className="col-span-2 p-4 flex items-center">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {relatedWorkshop.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
  </article>
    </div>
  )
}

