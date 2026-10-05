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
    <header className="fixed inset-x-0 top-0 z-60 border-b border-white/10 bg-[#05080d]/75 px-5 backdrop-blur-xl sm:px-8 lg:px-12">
      <nav aria-label="Navegación principal" className="mx-auto max-w-[1440px]">
        <div className="flex min-h-[76px] items-center justify-between gap-4">
          <Link href="/" aria-label="Devwolf, ir al inicio" className="flex shrink-0 items-center gap-3 text-white">
            <span className="grid size-11 place-items-center rounded-md bg-white"><Image src="/images/devwolf-dv-emblem.png" alt="" width={38} height={38} priority className="size-9 object-contain" /></span>
            <span className="text-lg font-bold tracking-tight sm:text-xl">Devwolf<span className="block text-[9px] font-medium uppercase tracking-[.18em] text-white/60">Ingeniería & tecnología</span></span>
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => <Link key={link.label} href={link.href} className="text-[11px] font-semibold uppercase tracking-[.16em] text-white/75 transition-colors hover:text-[#FCA311]">{link.label}</Link>)}
          </div>
          <Link href="/contacto" className="hidden items-center gap-2 border border-white/50 px-5 py-3 text-[11px] font-bold uppercase tracking-[.12em] text-white transition-colors hover:border-[#FCA311] hover:bg-[#FCA311] hover:text-[#14213D] sm:inline-flex">Cotizar proyecto <ArrowUpRight size={15} aria-hidden="true" /></Link>
          <button type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="home-mobile-menu" onClick={() => setOpen(!open)} className="flex size-11 items-center justify-center border border-white/40 text-white lg:hidden">{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {open && <div id="home-mobile-menu" className="border-t border-white/20 bg-[#101a31] p-3 shadow-xl lg:hidden">
          {links.map((link) => <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="block px-3 py-3 text-sm font-semibold text-white hover:bg-white/10">{link.label}</Link>)}
          <Link href="/contacto" onClick={() => setOpen(false)} className="mt-2 block bg-[#FCA311] px-3 py-3 text-center text-sm font-bold text-[#14213D] sm:hidden">Solicitar cotización</Link>
        </div>}
      </nav>
    </header>
  )
}
