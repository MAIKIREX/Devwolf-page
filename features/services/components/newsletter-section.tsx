"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type ContactBlock = {
  title: string
  lines: string[]
}

type NewsletterSectionProps = {
  heading?: string
  description?: string
  contactBlocks?: ContactBlock[]
}

const defaultContactBlocks: ContactBlock[] = [
  {
    title: "CONTACTO DIRECTO",
    lines: ["Cel/WhatsApp: +591 78855457", "devwolf.ingenieriaytecnologia@gmail.com"],
  },
  {
    title: "UBICACION",
    lines: ["La Paz, Bolivia", "Cobertura nacional"],
  },
  {
    title: "HORARIOS",
    lines: ["Lunes a Viernes: 8:00 - 17:00", "Consulta por fuera de horario"],
  },
]

export default function NewsletterSection({
  heading = "CONTACTANOS",
  description =
    "Informacion exclusiva sobre nuestros nuevos proyectos de construccion. Nos ponemos a tu disposicion para coordinar una reunion o visita tecnica.",
  contactBlocks = defaultContactBlocks,
}: NewsletterSectionProps) {
  return (
    <section id="newsletter" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl mb-6 text-balance font-light">{heading}</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">{description}</p>

          <Link href="/contacto" className="mx-auto">
            <button
              type="button"
              className="group flex cursor-pointer items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-foreground shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md hover:bg-foreground hover:text-background"
            >
              <div className="size-2 rounded-full bg-foreground transition-all duration-200 ease-in-out group-hover:flex group-hover:size-8 group-hover:items-center group-hover:justify-center group-hover:bg-background">
                <span className="hidden transition-all duration-200 ease-in-out group-hover:flex group-hover:text-xl">
                  <ArrowRight className="transition-transform duration-200 group-active:-rotate-45 text-white" />
                </span>
              </div>

              <p className="transition-all duration-200 ease-in-out group-hover:font-semibold">
                Contactar ahora
              </p>
            </button>
          </Link>

          <div className="mt-12 pt-12 border-t border-gray-800 grid md:grid-cols-3 gap-8">
            {contactBlocks.map((block) => (
              <div key={block.title}>
                <h3 className="mb-4 font-light">{block.title}</h3>
                {block.lines.map((line, index) => (
                  <p key={`${block.title}-${index}`} className="text-sm text-gray-400 mb-2">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
