import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Phone, Mail, Clock, ShoppingCart, Search, Menu, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ProductCategories from "@/components/product-categories"
import WeeklySale from "@/components/weekly-sale"
import Tips from "@/components/tips"
import Testimonials from "@/components/testimonials"
import Suppliers from "@/components/suppliers"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menú</span>
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Maderera LIGNINA" width={40} height={40} className="h-10 w-auto" />
              <span className="hidden font-serif text-xl font-semibold text-emerald-900 md:inline-block">LIGNINA</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:gap-6">
            <Link href="/" className="text-sm font-medium text-emerald-900 transition-colors hover:text-emerald-700">
              Inicio
            </Link>
            <Link
              href="#nosotros"
              className="text-sm font-medium text-zinc-800 transition-colors hover:text-emerald-700"
            >
              Nosotros
            </Link>
            <Link
              href="#categorias"
              className="text-sm font-medium text-zinc-800 transition-colors hover:text-emerald-700"
            >
              Productos
            </Link>
            <Link
              href="#consejos"
              className="text-sm font-medium text-zinc-800 transition-colors hover:text-emerald-700"
            >
              Consejos
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium text-zinc-800 transition-colors hover:text-emerald-700"
            >
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex md:items-center md:gap-2">
              <Input type="search" placeholder="Buscar productos..." className="h-9 w-[200px] md:w-[250px]" />
              <Button size="icon" variant="ghost">
                <Search className="h-4 w-4" />
                <span className="sr-only">Buscar</span>
              </Button>
            </div>
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Carrito</span>
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-xs text-white">
                0
              </span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Madera de calidad"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center md:px-6">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Tradición en madera, innovación en diseño
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Más de 30 años ofreciendo la mejor calidad en maderas para decoración, construcción y mobiliario
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-emerald-700 hover:bg-emerald-800">
                Ver productos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-900">
                Contactar
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="nosotros" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-emerald-900 md:text-4xl">Nosotros</h2>
                <div className="mt-4 space-y-4">
                  <p className="text-zinc-700">
                    Somos una empresa integrada de la fabricación de gran diversidad de maderas y elementos de madera a
                    partir de la venta primaria y optimización de dicha materia prima, de todas partes del país.
                  </p>
                  <p className="text-zinc-700">
                    Nuestro objetivo es poder satisfacer las necesidades del cliente, esforzándonos por mantener la
                    estética, la practicidad y el costo accesible de cada uno de nuestros productos.
                  </p>
                  <p className="text-zinc-700">
                    Nacimos en la localidad de Trenque Lauquen, hoy la sede de nuestra planta química facilita en la
                    actualidad poder disfrutar de sus bondades.
                  </p>
                </div>
                <Button className="mt-6 bg-emerald-700 hover:bg-emerald-800">
                  Conocer más
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-lg md:h-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Nuestra planta"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section id="categorias" className="bg-zinc-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-emerald-900 md:text-4xl">
              Categorías
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-700">
              Descubre nuestra amplia variedad de productos de madera para cada espacio de tu hogar
            </p>
            <ProductCategories />
          </div>
        </section>

        {/* Weekly Sale */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-emerald-900 md:text-4xl">
              Venta de la semana
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-700">
              Aprovecha nuestras ofertas especiales con descuentos exclusivos
            </p>
            <WeeklySale />
          </div>
        </section>

        {/* Tips Section */}
        <section id="consejos" className="bg-zinc-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-emerald-900 md:text-4xl">
              Consejos
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-700">
              Aprende a cuidar y mantener tus productos de madera con nuestros consejos de expertos
            </p>
            <Tips />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-emerald-900 md:text-4xl">
              Comentarios
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-700">
              Lo que nuestros clientes dicen sobre nosotros
            </p>
            <Testimonials />
          </div>
        </section>

        {/* Suppliers */}
        <section className="bg-zinc-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-emerald-900 md:text-4xl">
              Proveedores
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-700">
              Trabajamos con las mejores marcas para garantizar la calidad de nuestros productos
            </p>
            <Suppliers />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-serif text-lg font-semibold text-emerald-900">Contacto</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-5 w-5 text-emerald-700" />
                  <span className="text-sm text-zinc-700">(02392) 423-456</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-5 w-5 text-emerald-700" />
                  <span className="text-sm text-zinc-700">info@maderalignina.com.ar</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-emerald-900">Ubicación</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-5 w-5 text-emerald-700" />
                  <span className="text-sm text-zinc-700">
                    Av. San Martín 1234, Trenque Lauquen, Buenos Aires, Argentina
                  </span>
                </li>
              </ul>
              <div className="mt-4 h-[150px] overflow-hidden rounded-lg bg-zinc-100">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Mapa de ubicación"
                  width={600}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-emerald-900">Atención</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-5 w-5 text-emerald-700" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900">Lunes a Viernes</p>
                    <p className="text-sm text-zinc-700">8:30 - 12:30 | 16:00 - 20:00</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-5 w-5 text-emerald-700" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900">Sábados</p>
                    <p className="text-sm text-zinc-700">9:00 - 13:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-emerald-900">Newsletter</h3>
              <p className="mt-4 text-sm text-zinc-700">
                Suscríbete para recibir nuestras novedades y ofertas especiales
              </p>
              <form className="mt-4">
                <div className="flex gap-2">
                  <Input type="email" placeholder="Tu email" className="flex-1" />
                  <Button type="submit" className="bg-emerald-700 hover:bg-emerald-800">
                    Enviar
                  </Button>
                </div>
              </form>
              <div className="mt-6">
                <h4 className="font-serif text-sm font-semibold text-emerald-900">Síguenos</h4>
                <div className="mt-2 flex gap-4">
                  <Link href="#" className="text-zinc-500 hover:text-emerald-700">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link href="#" className="text-zinc-500 hover:text-emerald-700">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link href="#" className="text-zinc-500 hover:text-emerald-700">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Maderera LIGNINA. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
