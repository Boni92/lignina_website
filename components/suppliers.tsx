import Image from "next/image"

const suppliers = [
  {
    id: 1,
    name: "Thermolam",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    name: "Newton",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    name: "Puertas Neuquén",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 4,
    name: "Biel",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 5,
    name: "Proveedor 5",
    logo: "/placeholder.svg?height=100&width=200",
  },
]

export default function Suppliers() {
  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {suppliers.map((supplier) => (
          <div key={supplier.id} className="flex items-center justify-center">
            <Image
              src={supplier.logo || "/placeholder.svg"}
              alt={supplier.name}
              width={200}
              height={100}
              className="h-12 w-auto grayscale transition-all hover:grayscale-0 md:h-16"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
