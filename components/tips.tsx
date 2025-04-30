import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const tips = [
  {
    id: "1",
    title: "Cómo cuidar tus muebles de madera",
    excerpt: "Aprende los mejores consejos para mantener tus muebles de madera como nuevos por más tiempo.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "2",
    title: "Tipos de barnices y sus usos",
    excerpt: "Conoce los diferentes tipos de barnices y cuál es el más adecuado para cada proyecto.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    title: "Cómo prevenir daños por humedad",
    excerpt: "Protege tus productos de madera de la humedad con estos consejos prácticos.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Tips() {
  return (
    <div className="mt-8 grid gap-8 md:grid-cols-3">
      {tips.map((tip) => (
        <article
          key={tip.id}
          className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
        >
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={tip.image || "/placeholder.svg"}
              alt={tip.title}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="font-serif text-xl font-semibold text-emerald-900">{tip.title}</h3>
            <p className="mt-2 text-zinc-600">{tip.excerpt}</p>
            <Link
              href={`/consejos/${tip.id}`}
              className="mt-4 inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
            >
              Leer más
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}
