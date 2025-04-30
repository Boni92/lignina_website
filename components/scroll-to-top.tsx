"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Cuando cambia la ruta, hacer scroll hacia arriba
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [pathname])

  return null
}
