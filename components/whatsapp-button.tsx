"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600"
        onClick={() => window.open("https://wa.me/5492392123456", "_blank")}
      >
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="sr-only">Contactar por WhatsApp</span>
      </Button>
    </div>
  )
}
