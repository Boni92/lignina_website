import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: "1",
    name: "Dormitorio",
    image: "/placeholder.svg?height=400&width=600",
    description: "Muebles y accesorios de madera para tu dormitorio",
  },
  {
    id: "2",
    name: "Living",
    image: "/placeholder.svg?height=400&width=600",
    description: "Soluciones en madera para tu sala de estar",
  },
  {
    id: "3",
    name: "Baño",
    image: "/placeholder.svg?height=400&width=600",
    description: "Accesorios y muebles de madera para tu baño",
  },
  {
    id: "4",
    name: "Exterior",
    image: "/placeholder.svg?height=400&width=600",
    description: "Productos de madera tratada para exteriores",
  },
  {
    id: "5",
    name: "Deco",
    image: "/placeholder.svg?height=400&width=600",
    description: "Elementos decorativos en madera para tu hogar",
  },
  {
    id: "6",
    name: "Profesional",
    image: "/placeholder.svg?height=400&width=600",
    description: "Maderas y materiales para proyectos profesionales",
  },
]

export default function ProductCategories() {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categoria/${category.id}`}
          className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
        >
          <div className="aspect-[4/3] w-full overflow-hidden">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="font-serif text-xl font-semibold text-emerald-900">{category.name}</h3>
            <p className="mt-2 text-sm text-zinc-600">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
