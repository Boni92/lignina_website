import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Pablo José G.",
    rating: 5,
    comment: "Todo perfecto, calidad del producto, muy buena atención.",
  },
  {
    id: 2,
    name: "Gabriela P.",
    rating: 5,
    comment: "Excelente calidad y buena atención al cliente.",
  },
  {
    id: 3,
    name: "Antonio M.",
    rating: 4,
    comment: "Me gustó mucho el producto, llegó perfecto y rápido.",
  },
  {
    id: 4,
    name: "Romina M.",
    rating: 5,
    comment: "Muy buena calidad, todo de primera.",
  },
]

export default function Testimonials() {
  return (
    <div className="mt-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-zinc-200"}`}
                />
              ))}
            </div>
            <p className="mt-4 text-zinc-700">{testimonial.comment}</p>
            <p className="mt-4 text-sm font-medium text-zinc-900">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
