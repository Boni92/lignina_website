"use client"

import { useState } from "react"
import Image from "next/image"
import ProductModal from "@/components/product-modal"

// Datos simulados de productos por categoría
const productsByCategory: Record<string, any[]> = {
  "1": [
    {
      id: "101",
      name: "Lámpara de madera minimalista",
      description: "Lámpara decorativa de madera natural, ideal para mesas de luz o escritorios.",
      price: 18999,
      image: "/seccion_2/dormitorio/deco-lampara-o.png",
    },
    {
      id: "102",
      name: "Mesa de noche",
      description: "Mesa de noche con cajón y estante inferior. Perfecta para complementar tu dormitorio.",
      price: 24999,
      image: "/seccion_2/dormitorio/mesa-de-noche.png",
    },
    {
      id: "103",
      name: "Armario ropero",
      description: "Armario de 3 puertas con espacio para colgar y estantes. Madera de calidad con acabado premium.",
      price: 129999,
      image: "/seccion_2/dormitorio/dormitorio-armario-o.png",
    },
    {
      id: "104",
      name: "Tocador con espejo",
      description: "Tocador con espejo y cajones para almacenamiento. Diseño elegante para tu dormitorio.",
      price: 59999,
      image: "/seccion_2/dormitorio/dormitorio-escritorio-o.png",
    },
  ],
  "2": [
    {
      id: "201",
      name: "Mesada de madera maciza",
      description: "Mesada de madera maciza, resistente y elegante para tu living o comedor.",
      price: 119999,
      image: "/seccion_2/living/mesada-o.png",
    },
    {
      id: "202",
      name: "Estante de madera",
      description: "Estante con estructura de madera maciza. Confort y estilo para tu living.",
      price: 149999,
      image: "/seccion_2/living/living-mesada-o.png",
    },
    {
      id: "203",
      name: "Biblioteca modular",
      description: "Biblioteca modular adaptable a tus necesidades. Ideal para organizar libros y objetos decorativos.",
      price: 89999,
      image: "/seccion_2/living/living-bibliotecaModular.png",
    },
    {
      id: "204",
      name: "Mesa de centro",
      description: "Mesa de centro con diseño moderno y acabado en madera natural. Perfecta para tu sala de estar.",
      price: 39999,
      image: "/seccion_2/living/living-mesaratona.png",
    },
  ],
  "3": [
    {
      id: "301",
      name: "Vanitory de madera",
      description: "Mueble vanitory con lavabo integrado. Madera tratada para resistir la humedad del baño.",
      price: 79999,
      image: "/seccion_2/baño/bano-lavabo-o.png",
    },
    {
      id: "302",
      name: "Estantería de baño",
      description: "Estantería de madera para organizar productos de baño. Práctica y decorativa.",
      price: 19999,
      image: "/seccion_2/baño/baño-estanteria.png",
    },
    {
      id: "303",
      name: "Estantería para toallas",
      description: "Estantería de madera para organizar toallas y productos de baño. Práctica y decorativa.",
      price: 29999,
      image: "/seccion_2/baño/bano-mesada-o.png",
    },
    {
      id: "304",
      name: "Banco para baño",
      description: "Banco de madera tratada para usar en la ducha o como asiento en el baño. Resistente a la humedad.",
      price: 15999,
      image: "/seccion_2/baño/bano-estante-o.png",
    },
  ],
  "4": [
    {
      id: "401",
      name: "Mesa de jardín",
      description: "Mesa de jardín de madera tratada para exteriores. Resistente a la intemperie y rayos UV.",
      price: 69999,
      image: "/seccion_2/exterior/exterior-mesada-o.png",
    },
    {
      id: "402",
      name: "Sillas de exterior",
      description: "Sillas de madera tratada para exterior. Diseño ergonómico y alta durabilidad.",
      price: 24999,
      image: "/seccion_2/exterior/exterior-silla-o.png",
    },
    {
      id: "403",
      name: "Deck modular",
      description: "Módulos de deck para armar tu piso exterior. Fácil instalación y mantenimiento.",
      price: 8999,
      image: "/seccion_2/exterior/exterior-deck-o.png",
    },
    {
      id: "404",
      name: "Pérgola de madera",
      description: "Pérgola de madera tratada para crear espacios de sombra en tu jardín o terraza.",
      price: 159999,
      image: "/seccion_2/exterior/exterior-banco-o.png",
    },
  ],
  "5": [
    
    {
      id: "502",
      name: "Deco pieza 2",
      description: "Pieza decorativa de madera artesanal para realzar cualquier ambiente.",
      price: 7999,
      image: "/seccion_2/deco/deco2.png",
    },
    {
      id: "503",
      name: "Deco pieza 3",
      description: "Elemento decorativo de madera, diseño exclusivo y moderno.",
      price: 8999,
      image: "/seccion_2/deco/deco3.png",
    },
    {
      id: "504",
      name: "Deco pieza 4",
      description: "Accesorio de madera para decoración de interiores, hecho a mano.",
      price: 10999,
      image: "/seccion_2/deco/deco4.png",
    },
    {
      id: "505",
      name: "Deco pieza 5",
      description: "Decoración en madera natural, ideal para estanterías y mesas.",
      price: 11999,
      image: "/seccion_2/deco/deco5.png",
    },
  ],
  "6": [
    {
      id: "601",
      name: "Tablones de pino",
      description: "Tablones de pino de primera calidad. Ideales para proyectos de carpintería y construcción.",
      price: 5999,
      image: "/seccion_2/profesional/frac-tablas-o.png",
    },
    {
      id: "602",
      name: "Listones de cedro",
      description: "Listones de cedro seleccionados. Perfectos para trabajos que requieren madera aromática y durable.",
      price: 8999,
      image: "/seccion_2/profesional/frac-listones-o.png",
    },
    {
      id: "603",
      name: "Placas de MDF",
      description: "Placas de MDF de alta densidad. Superficie lisa ideal para trabajos de precisión.",
      price: 12999,
      image: "/seccion_2/profesional/frac-estetica-o.png",
    },
    {
      id: "604",
      name: "Kit de herrajes",
      description: "Kit completo de herrajes para muebles. Incluye tornillos, bisagras y manijas.",
      price: 9999,
      image: "/seccion_2/profesional/frac-vigas-o.png",
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
            <div className="aspect-square w-full overflow-hidden flex items-center justify-center">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={420}
                height={420}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ maxWidth: '70%', maxHeight: '70%' }}
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
