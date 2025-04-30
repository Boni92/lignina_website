"use client"

import { useState } from "react"
import Image from "next/image"
import ProductModal from "@/components/product-modal"

// Datos simulados de productos por categoría
const productsByCategory: Record<string, any[]> = {
  "1": [
    {
      id: "101",
      name: "Cama de madera maciza",
      description: "Cama de madera maciza de pino con acabado natural. Diseño elegante y resistente.",
      price: 89999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "102",
      name: "Mesa de noche",
      description: "Mesa de noche con cajón y estante inferior. Perfecta para complementar tu dormitorio.",
      price: 24999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "103",
      name: "Armario ropero",
      description: "Armario de 3 puertas con espacio para colgar y estantes. Madera de calidad con acabado premium.",
      price: 129999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "104",
      name: "Tocador con espejo",
      description: "Tocador con espejo y cajones para almacenamiento. Diseño elegante para tu dormitorio.",
      price: 59999,
      image: "/placeholder.svg?height=600&width=800",
    },
  ],
  "2": [
    {
      id: "201",
      name: "Sofá de madera",
      description: "Sofá con estructura de madera maciza y cojines de alta densidad. Confort y estilo para tu living.",
      price: 149999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "202",
      name: "Mesa de centro",
      description: "Mesa de centro con diseño moderno y acabado en madera natural. Perfecta para tu sala de estar.",
      price: 39999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "203",
      name: "Biblioteca modular",
      description: "Biblioteca modular adaptable a tus necesidades. Ideal para organizar libros y objetos decorativos.",
      price: 89999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "204",
      name: "Rack para TV",
      description: "Mueble para TV con espacio para equipos y almacenamiento. Diseño funcional y elegante.",
      price: 69999,
      image: "/placeholder.svg?height=600&width=800",
    },
  ],
  "3": [
    {
      id: "301",
      name: "Vanitory de madera",
      description: "Mueble vanitory con lavabo integrado. Madera tratada para resistir la humedad del baño.",
      price: 79999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "302",
      name: "Espejo con marco de madera",
      description: "Espejo con marco de madera maciza. Diseño elegante para complementar tu baño.",
      price: 19999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "303",
      name: "Estantería para toallas",
      description: "Estantería de madera para organizar toallas y productos de baño. Práctica y decorativa.",
      price: 29999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "304",
      name: "Banco para baño",
      description: "Banco de madera tratada para usar en la ducha o como asiento en el baño. Resistente a la humedad.",
      price: 15999,
      image: "/placeholder.svg?height=600&width=800",
    },
  ],
  "4": [
    {
      id: "401",
      name: "Mesa de jardín",
      description: "Mesa de jardín de madera tratada para exteriores. Resistente a la intemperie y rayos UV.",
      price: 69999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "402",
      name: "Sillas de exterior",
      description: "Sillas de madera tratada para exterior. Diseño ergonómico y alta durabilidad.",
      price: 24999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "403",
      name: "Deck modular",
      description: "Módulos de deck para armar tu piso exterior. Fácil instalación y mantenimiento.",
      price: 8999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "404",
      name: "Pérgola de madera",
      description: "Pérgola de madera tratada para crear espacios de sombra en tu jardín o terraza.",
      price: 159999,
      image: "/placeholder.svg?height=600&width=800",
    },
  ],
  "5": [
    {
      id: "501",
      name: "Estante flotante",
      description: "Estante flotante de madera maciza. Ideal para decorar y organizar cualquier espacio.",
      price: 9999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "502",
      name: "Marco de fotos",
      description: "Marco de fotos de madera con acabado artesanal. Disponible en varios tamaños.",
      price: 4999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "503",
      name: "Centro de mesa",
      description: "Centro de mesa decorativo de madera. Pieza única con detalles artesanales.",
      price: 7999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "504",
      name: "Lámpara de mesa",
      description: "Lámpara de mesa con base de madera torneada. Diseño elegante para cualquier ambiente.",
      price: 12999,
      image: "/placeholder.svg?height=600&width=800",
    },
  ],
  "6": [
    {
      id: "601",
      name: "Tablones de pino",
      description: "Tablones de pino de primera calidad. Ideales para proyectos de carpintería y construcción.",
      price: 5999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "602",
      name: "Listones de cedro",
      description: "Listones de cedro seleccionados. Perfectos para trabajos que requieren madera aromática y durable.",
      price: 8999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "603",
      name: "Placas de MDF",
      description: "Placas de MDF de alta densidad. Superficie lisa ideal para trabajos de precisión.",
      price: 12999,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "604",
      name: "Kit de herrajes",
      description: "Kit completo de herrajes para muebles. Incluye tornillos, bisagras y manijas.",
      price: 9999,
      image: "/placeholder.svg?height=600&width=800",
    },
  ],
}

export default function ProductGrid({ categoryId }: { categoryId: string }) {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null)
  const products = productsByCategory[categoryId] || []

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="aspect-square w-full overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-serif text-lg font-semibold text-emerald-900">{product.name}</h3>
              <p className="mt-2 text-emerald-700 font-medium">${product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </>
  )
}
