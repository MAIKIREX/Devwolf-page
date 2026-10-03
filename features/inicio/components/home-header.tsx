"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"

const links = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#metodologia" },
]

export function HomeHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav aria-label="Navegación principal" className="mx-auto max-w-[1320px] rounded-2xl bg-white/95 px-4 shadow-[0_16px_50px_rgba(0,0,0,.12)] backdrop-blur-md sm:px-6">
        <div className="flex min-h-[76px] items-center justify-between gap-4">
          <Link href="/" aria-label="Devwolf, ir al inicio" className="flex shrink-0 items-center">
            <Image src="/images/devwolf-navy-orange-logo.png" alt="Devwolf Ingeniería & Tecnología" width={258} height={102} priority className="h-auto w-[160px] sm:w-[190px] lg:w-[218px]" />
          </Link>
          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => <Link key={link.label} href={link.href} className="text-sm font-semibold text-[#14213D] transition-colors hover:text-[#D77C00]">{link.label}</Link>)}
          </div>
          <Link href="/contacto" className="hidden items-center gap-2 rounded-lg bg-[#FCA311] px-5 py-3 text-sm font-bold text-[#14213D] transition-colors hover:bg-[#e58e00] sm:inline-flex">Solicitar cotización <ArrowUpRight size={17} aria-hidden="true" /></Link>
          <button type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="home-mobile-menu" onClick={() => setOpen(!open)} className="flex size-11 items-center justify-center rounded-lg bg-[#14213D] text-white lg:hidden">{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {open && <div id="home-mobile-menu" className="border-t border-[#E5E5E5] py-3 lg:hidden">
          {links.map((link) => <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-semibold text-[#14213D] hover:bg-[#E5E5E5]">{link.label}</Link>)}
          <Link href="/contacto" onClick={() => setOpen(false)} className="mt-2 block rounded-lg bg-[#FCA311] px-3 py-3 text-center text-sm font-bold text-[#14213D] sm:hidden">Solicitar cotización</Link>
        </div>}
      </nav>
    </header>
  )
}
