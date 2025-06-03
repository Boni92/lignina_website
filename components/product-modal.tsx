"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ProductModalProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    image: string
  }
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    // Simulamos una operación asíncrona
    setTimeout(() => {
      setIsAdding(false)
      onClose()
      // Aquí se podría mostrar una notificación de éxito
    }, 1000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        className="absolute inset-0 bg-transparent"
        onClick={onClose}
        role="button"
        tabIndex={0}
        aria-label="Cerrar modal"
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-white shadow-xl flex items-center justify-center" style={{ maxWidth: '70vw', maxHeight: '70vh', minHeight: 'auto', alignItems: 'center' }}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white p-1 text-zinc-500 shadow-md hover:text-zinc-700"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Cerrar</span>
        </button>
        <div className="grid md:grid-cols-2 w-full items-center justify-center min-h-[300px]">
          <div className="aspect-square w-full overflow-hidden flex items-center justify-center">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={420}
              height={420}
              className="object-contain self-end md:self-center"
              style={{ maxWidth: '70%', maxHeight: '70%' }}
            />
          </div>
          <div className="flex flex-col p-6">
            <h2 className="font-serif text-2xl font-bold text-emerald-900">{product.name}</h2>
            <p className="mt-4 text-zinc-700">{product.description}</p>
            <div className="mt-6 text-2xl font-bold text-emerald-700">${product.price.toLocaleString()}</div>
            <div className="mt-auto flex flex-wrap gap-4 pt-6">
              <Button onClick={handleAddToCart} className="bg-emerald-700 hover:bg-emerald-800" disabled={isAdding}>
                {isAdding ? "Agregando..." : "Agregar al carrito"}
              </Button>
              <Button variant="outline" onClick={onClose}>
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
