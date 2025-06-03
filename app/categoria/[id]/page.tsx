import { notFound } from "next/navigation"
import ProductGrid from "@/components/product-grid"

// Datos simulados de categorías
const categories = [
  { id: "1", name: "Dormitorio", description: "Muebles y accesorios de madera para tu dormitorio" },
  { id: "2", name: "Living", description: "Soluciones en madera para tu sala de estar" },
  { id: "3", name: "Baño", description: "Accesorios y muebles de madera para tu baño" },
  { id: "4", name: "Exterior", description: "Productos de madera tratada para exteriores" },
  { id: "5", name: "Deco", description: "Elementos decorativos en madera para tu hogar" },
  { id: "6", name: "Profesional", description: "Maderas y materiales para proyectos profesionales" },
]

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find((cat) => cat.id === params.id)

  if (!category) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Reutilizamos el componente de header aquí o lo importamos */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <a href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-semibold text-emerald-900">LIGNINA</span>
          </a>
          <nav className="hidden md:flex md:items-center md:gap-6">
            <a href="/" className="text-sm font-medium text-zinc-800 transition-colors hover:text-emerald-700">
              Inicio
            </a>
            <a href="/#nosotros" className="text-sm font-medium text-zinc-800 transition-colors hover:text-emerald-700">
              Nosotros
            </a>
            <a
              href="/#categorias"
              className="text-sm font-medium text-emerald-900 transition-colors hover:text-emerald-700"
            >
              Productos
            </a>
            <a href="/#consejos" className="text-sm font-medium text-zinc-800 transition-colors hover:text-emerald-700">
              Consejos
            </a>
            <a href="/#contacto" className="text-sm font-medium text-zinc-800 transition-colors hover:text-emerald-700">
              Contacto
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-xs text-white">
                0
              </span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Category Hero */}
        <section className="bg-emerald-50 py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-emerald-900 md:text-4xl">
                {category.name}
              </h1>
              <p className="mt-4 max-w-2xl text-zinc-700">{category.description}</p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <ProductGrid categoryId={params.id} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container px-4 py-6 md:px-6">
          <p className="text-center text-sm text-zinc-500">
            © 2021 Maderera LIGNINA. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
