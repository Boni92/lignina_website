import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"

// Datos simulados de consejos
const tips = [
  {
    id: "1",
    title: "Cómo cuidar tus muebles de madera",
    excerpt: "Aprende los mejores consejos para mantener tus muebles de madera como nuevos por más tiempo.",
    image: "/placeholder.svg?height=800&width=1200",
    content: `
      <p>Los muebles de madera son una inversión que, con el cuidado adecuado, pueden durar generaciones. Aquí te presentamos una guía completa para mantener tus muebles de madera en óptimas condiciones.</p>
      
      <h3>Limpieza regular</h3>
      <p>La limpieza regular es fundamental para mantener la belleza de tus muebles de madera. Utiliza un paño suave y ligeramente húmedo para eliminar el polvo. Evita productos químicos agresivos que puedan dañar el acabado. Para una limpieza más profunda, puedes utilizar una solución suave de agua tibia con unas gotas de jabón neutro, asegurándote de secar inmediatamente después.</p>
      
      <h3>Protección contra la luz solar</h3>
      <p>La exposición prolongada a la luz solar directa puede decolorar y dañar la madera. Ubica tus muebles lejos de ventanas con mucha luz solar o utiliza cortinas para filtrar los rayos UV. Si no puedes evitar la exposición, considera aplicar un protector UV específico para madera.</p>
      
      <h3>Control de humedad</h3>
      <p>La madera es sensible a los cambios de humedad. Un ambiente demasiado seco puede provocar grietas, mientras que el exceso de humedad puede causar hinchazón y deformaciones. Mantén un nivel de humedad constante en tu hogar, idealmente entre el 40% y el 60%. Utiliza humidificadores o deshumidificadores según sea necesario.</p>
      
      <h3>Uso de posavasos y protectores</h3>
      <p>Siempre utiliza posavasos para bebidas calientes o frías, y protectores para objetos que puedan rayar la superficie. Las marcas de agua y los arañazos pueden ser difíciles de eliminar una vez que se han producido.</p>
      
      <h3>Encerado periódico</h3>
      <p>Aplicar cera de calidad específica para madera cada 3-6 meses ayuda a mantener el brillo y proporciona una capa protectora adicional. Asegúrate de elegir una cera adecuada para el tipo de acabado de tu mueble.</p>
      
      <h3>Reparación inmediata de daños</h3>
      <p>Si notas algún daño, como rayones o pequeñas grietas, repáralo lo antes posible para evitar que empeore. Existen lápices y ceras de retoque que pueden ayudar a disimular pequeños desperfectos.</p>
      
      <h3>Evitar cambios bruscos de temperatura</h3>
      <p>No coloques muebles de madera cerca de radiadores, aires acondicionados o chimeneas, ya que los cambios bruscos de temperatura pueden dañar la madera y provocar deformaciones.</p>
      
      <p>Siguiendo estos consejos, tus muebles de madera mantendrán su belleza y funcionalidad durante muchos años, convirtiéndose en piezas valiosas que podrás disfrutar y quizás incluso pasar a futuras generaciones.</p>
    `,
  },
  {
    id: "2",
    title: "Tipos de barnices y sus usos",
    excerpt: "Conoce los diferentes tipos de barnices y cuál es el más adecuado para cada proyecto.",
    image: "/placeholder.svg?height=800&width=1200",
    content: `
      <p>Elegir el barniz adecuado puede marcar la diferencia en el resultado final de tus proyectos de madera. Cada tipo de barniz ofrece características específicas que lo hacen más adecuado para determinados usos.</p>
      
      <h3>Barniz de poliuretano</h3>
      <p>Es uno de los más populares por su durabilidad y resistencia. Disponible en acabados mate, satinado y brillante, el barniz de poliuretano crea una capa protectora resistente a rayones, calor y productos químicos. Es ideal para superficies que reciben mucho uso como mesas, pisos y encimeras. Existen versiones al agua (menos tóxicas, secado rápido) y al aceite (más duraderas, mejor penetración).</p>
      
      <h3>Barniz acrílico</h3>
      <p>De base acuosa, es una opción ecológica con bajo olor y fácil limpieza. Seca rápidamente y no amarillea con el tiempo. Aunque no es tan resistente como el poliuretano, es excelente para proyectos interiores que no están sometidos a mucho desgaste, como estanterías o marcos.</p>
      
      <h3>Goma laca</h3>
      <p>Es un barniz tradicional derivado de un insecto. Se disuelve en alcohol y se aplica en capas finas que secan rápidamente. Proporciona un acabado cálido y brillante, ideal para restauración de muebles antiguos. Sin embargo, no es resistente al calor ni al alcohol.</p>
      
      <h3>Barniz marino</h3>
      <p>Formulado para resistir condiciones extremas, contiene filtros UV y es altamente resistente al agua. Es perfecto para maderas en exteriores o en ambientes húmedos como baños. Suele tener un acabado brillante que realza la belleza natural de la madera.</p>
      
      <h3>Aceites naturales</h3>
      <p>Aunque técnicamente no son barnices, los aceites como el de linaza, tung o cera de abeja proporcionan un acabado natural que penetra en la madera en lugar de crear una película superficial. Son fáciles de aplicar y reparar, pero requieren mantenimiento más frecuente.</p>
      
      <h3>Consejos para la aplicación</h3>
      <p>Independientemente del tipo de barniz que elijas, hay algunas reglas generales para obtener buenos resultados:</p>
      <ul>
        <li>Prepara bien la superficie: lija, limpia y asegúrate de que esté libre de polvo.</li>
        <li>Aplica en un ambiente con temperatura moderada y baja humedad.</li>
        <li>Usa pinceles de calidad o aplicadores adecuados para cada tipo de barniz.</li>
        <li>Aplica varias capas finas en lugar de una gruesa, lijando suavemente entre capas.</li>
        <li>Respeta los tiempos de secado indicados por el fabricante.</li>
      </ul>
      
      <p>La elección del barniz adecuado dependerá del tipo de proyecto, la ubicación del mueble y el nivel de protección que necesites. No dudes en consultar con nuestros expertos para recibir asesoramiento personalizado para tu proyecto específico.</p>
    `,
  },
  {
    id: "3",
    title: "Cómo prevenir daños por humedad",
    excerpt: "Protege tus productos de madera de la humedad con estos consejos prácticos.",
    image: "/placeholder.svg?height=800&width=1200",
    content: `
      <p>La humedad es uno de los principales enemigos de la madera. Puede causar deformaciones, hinchazón, grietas y hasta favorecer la aparición de moho y hongos. Afortunadamente, existen diversas estrategias para proteger tus muebles y estructuras de madera contra estos daños.</p>
      
      <h3>Sellado adecuado</h3>
      <p>Todas las superficies de madera, especialmente aquellas expuestas a la humedad, deben estar correctamente selladas. Utiliza selladores de calidad, barnices impermeabilizantes o pinturas específicas para madera. Asegúrate de sellar no solo las superficies visibles sino también los bordes y la parte inferior de los muebles.</p>
      
      <h3>Mantenimiento del sellado</h3>
      <p>Con el tiempo, incluso los mejores selladores pueden deteriorarse. Inspecciona regularmente tus muebles y estructuras de madera para detectar signos de desgaste en el sellado y realiza retoques cuando sea necesario. Para exteriores, considera reaplicar el sellador cada 1-2 años.</p>
      
      <h3>Control de la humedad ambiental</h3>
      <p>Mantén niveles de humedad constantes en tu hogar, idealmente entre 40-60%. Utiliza deshumidificadores en espacios húmedos como sótanos o en climas tropicales. En ambientes muy secos, un humidificador puede prevenir que la madera se seque demasiado y se agriete.</p>
      
      <h3>Ventilación adecuada</h3>
      <p>Asegura una buena circulación de aire alrededor de tus muebles de madera. Evita colocarlos directamente contra paredes exteriores frías donde puede producirse condensación. En armarios y espacios cerrados, considera usar deshumidificadores pequeños o productos absorbentes de humedad.</p>
      
      <h3>Limpieza inmediata de derrames</h3>
      <p>Si se derrama algún líquido sobre una superficie de madera, sécalo inmediatamente con un paño absorbente. No dejes que el líquido penetre en la madera, ya que podría causar manchas o deformaciones.</p>
      
      <h3>Elevación de muebles en áreas propensas a inundaciones</h3>
      <p>En zonas con riesgo de inundaciones o mucha humedad, considera elevar ligeramente los muebles del suelo usando almohadillas protectoras o patas más altas.</p>
      
      <h3>Tratamientos preventivos</h3>
      <p>Para maderas en exteriores o en zonas muy húmedas, existen tratamientos fungicidas e insecticidas que pueden aplicarse para prevenir el desarrollo de hongos e insectos que prosperan en ambientes húmedos.</p>
      
      <h3>Atención a signos de problemas</h3>
      <p>Aprende a reconocer los primeros signos de daño por humedad: cambios en la textura de la madera, decoloración, olor a humedad o moho, o deformaciones sutiles. Actuar rápidamente puede prevenir daños mayores.</p>
      
      <p>Proteger tus productos de madera contra la humedad no solo prolonga su vida útil sino que también mantiene su belleza y funcionalidad. Con un mantenimiento adecuado y estas medidas preventivas, tus muebles y estructuras de madera pueden resistir el paso del tiempo incluso en condiciones desafiantes.</p>
    `,
  },
]

export default function TipPage({ params }: { params: { id: string } }) {
  const tip = tips.find((t) => t.id === params.id)

  if (!tip) {
    notFound()
  }

  // Encontrar el índice del consejo actual y calcular los consejos anterior y siguiente
  const currentIndex = tips.findIndex((t) => t.id === params.id)
  const prevTip = currentIndex > 0 ? tips[currentIndex - 1] : null
  const nextTip = currentIndex < tips.length - 1 ? tips[currentIndex + 1] : null

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      {/* Header */}
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
              className="text-sm font-medium text-zinc-800 transition-colors hover:text-emerald-700"
            >
              Productos
            </a>
            <a
              href="/#consejos"
              className="text-sm font-medium text-emerald-900 transition-colors hover:text-emerald-700"
            >
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
        {/* Breadcrumb */}
        <div className="bg-zinc-50 py-4">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Link href="/" className="hover:text-emerald-700">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/#consejos" className="hover:text-emerald-700">
                Consejos
              </Link>
              <span>/</span>
              <span className="text-emerald-700">{tip.title}</span>
            </div>
          </div>
        </div>

        {/* Tip Content */}
        <article className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/#consejos"
                className="mb-6 inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Volver a consejos
              </Link>

              <h1 className="font-serif text-3xl font-bold tracking-tight text-emerald-900 md:text-4xl">{tip.title}</h1>

              <div className="mt-6 overflow-hidden rounded-lg">
                <Image
                  src={tip.image || "/placeholder.svg"}
                  alt={tip.title}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div
                className="prose prose-emerald mt-8 max-w-none prose-headings:font-serif prose-headings:text-emerald-900"
                dangerouslySetInnerHTML={{ __html: tip.content }}
              />

              {/* Navigation between tips */}
              <div className="mt-12 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:justify-between">
                {prevTip ? (
                  <Link
                    href={`/consejos/${prevTip.id}`}
                    className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {prevTip.title}
                  </Link>
                ) : (
                  <div></div>
                )}
                {nextTip && (
                  <Link
                    href={`/consejos/${nextTip.id}`}
                    className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    {nextTip.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>

              {/* Related tips */}
              <div className="mt-12 border-t pt-8">
                <h2 className="font-serif text-2xl font-bold text-emerald-900">
                  Otros consejos que te pueden interesar
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {tips
                    .filter((t) => t.id !== tip.id)
                    .slice(0, 2)
                    .map((relatedTip) => (
                      <Link
                        key={relatedTip.id}
                        href={`/consejos/${relatedTip.id}`}
                        className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
                      >
                        <div className="aspect-video w-full overflow-hidden">
                          <Image
                            src={relatedTip.image || "/placeholder.svg"}
                            alt={relatedTip.title}
                            width={600}
                            height={400}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-serif text-lg font-semibold text-emerald-900">{relatedTip.title}</h3>
                          <p className="mt-2 text-zinc-600">{relatedTip.excerpt}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container px-4 py-6 md:px-6">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Maderera LIGNINA. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
