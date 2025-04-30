import Image from "next/image"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function WeeklySale() {
  return (
    <div className="mt-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg md:flex">
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Banco de madera"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6 md:w-1/2 md:p-8">
          <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
            Oferta especial
          </div>
          <h3 className="mt-4 font-serif text-2xl font-bold text-emerald-900">Banco de madera</h3>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-emerald-700">$1.999</span>
            <span className="text-sm text-zinc-500 line-through">$2.499</span>
            <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">-20%</span>
          </div>
          <p className="mt-4 text-zinc-700">
            Los presentamos el banco de madera. Posee bordes redondeados y acabados suaves. Construido de un solo
            producto y base antimanchas de acero para todo piso y permite un apoyo cómodo y resistente. Está construido
            por madera de Lepacho, lo cual resulta en un producto muy resistente y de gran durabilidad frente a agentes
            climáticos externos.
          </p>
          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-sm text-zinc-700">Madera de Lepacho</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-sm text-zinc-700">Altura: 45 cm</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-sm text-zinc-700">Largo: 1.5 m</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-sm text-zinc-700">Acabado con barniz protector</span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="bg-emerald-700 hover:bg-emerald-800">Agregar al carrito</Button>
            <Button
              variant="outline"
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800"
            >
              Ver detalles
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
