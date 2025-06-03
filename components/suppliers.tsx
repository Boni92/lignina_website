import Image from "next/image"

const suppliers = [
	{
		id: 1,
		name: "Thermolam",
		logo: "/proveedores/1.png",
	},
	{
		id: 2,
		name: "Newton",
		logo: "/proveedores/2.png",
	},
	{
		id: 3,
		name: "Puertas Neuquén",
		logo: "/proveedores/3.png",
	},
	{
		id: 4,
		name: "Biel",
		logo: "/proveedores/4.png",
	},
	{
		id: 5,
		name: "Proveedor 5",
		logo: "/proveedores/5.png",
	},
	{
		id: 6,
		name: "Proveedor 6",
		logo: "/proveedores/6.png",
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
