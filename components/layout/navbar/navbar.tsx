"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const services = [
  { name: "Construcción", href: "/servicios/construccion" },
  { name: "Instalaciones Eléctricas", href: "/servicios/instalaciones-electricas" },
  { name: "Redes & Telecomunicaciones", href: "/servicios/redes-telecomunicaciones" },
  { name: "Distribución de Equipos", href: "/servicios/distribucion-equipos" },
  { name: "Software & DevOps", href: "/servicios/software-devops" },
  { name: "Impresión 3D", href: "/servicios/impresion-3d" },
]

type NavLink = {
  label: string
  href: string
  kind?: "link" | "services"
}

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = useMemo<NavLink[]>(
    () => [
      { label: "Inicio", href: "/", kind: "link" },
      { label: "Nosotros", href: "/nosotros", kind: "link" },
      { label: "Servicios", href: "/servicios", kind: "services" }, // virtual (dropdown)
      { label: "Contacto", href: "/contacto", kind: "link" },
    ],
    [],
  )

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const isServiceActive = services.some((s) => pathname.startsWith(s.href))

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full px-4 py-2">
      <div className="mx-auto w-full max-w-6xl">
        <motion.nav
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            relative overflow-hidden rounded-[28px]
            bg-neutral-950 text-white
            ring-1 ring-white/10
            shadow-[0_28px_80px_rgba(0,0,0,0.45)]
          "
        >
          {/* spotlight / animated glow */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-40"
            animate={{ x: ["-50%", "-42%", "-50%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(236,72,153,0.55), rgba(59,130,246,0.40), rgba(16,185,129,0.30))",
            }}
          />

          <div className="relative flex items-center justify-between gap-3 px-4 py-4 md:px-6">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10 overflow-hidden">
                <Image
                  src="/images/logo4.png"
                  alt="Devwolf I&T"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide">Devwolf</div>
                <div className="text-xs text-white/60">ingeniería & tecnología</div>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 md:flex">
              {links.map((item) => {
                if (item.kind === "services") {
                  return (
                    <DropdownMenu key={item.label}>
                      <DropdownMenuTrigger
                        className={cn(
                          "group relative inline-flex items-center gap-1 rounded-2xl px-4 py-2 text-sm font-medium text-white/80 hover:text-white outline-none",
                          isServiceActive && "text-white",
                        )}
                      >
                        <span className="absolute inset-0 rounded-2xl bg-white/0 transition-colors group-hover:bg-white/10" />
                        <span className="relative flex items-center gap-1">
                          Servicios
                          <ChevronDown className="h-4 w-4 opacity-90" />
                        </span>

                        {/* subtle active indicator */}
                        {isServiceActive && (
                          <span className="pointer-events-none absolute inset-x-4 -bottom-[6px] h-px bg-white/25" />
                        )}
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="start"
                        className="w-72 bg-neutral-950 text-white border-white/10"
                      >
                        {services.map((service) => (
                          <DropdownMenuItem key={service.href} asChild>
                            <Link
                              href={service.href}
                              className={cn(
                                "cursor-pointer rounded-md",
                                isActive(service.href) && "bg-white/10 text-white font-medium",
                              )}
                            >
                              {service.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )
                }

                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group relative rounded-2xl px-4 py-2 text-sm font-medium text-white/80 hover:text-white",
                      active && "text-white",
                    )}
                  >
                    <span className="absolute inset-0 rounded-2xl bg-white/0 transition-colors group-hover:bg-white/10" />
                    <span className="relative">{item.label}</span>

                    {/* subtle active indicator */}
                    {active && (
                      <span className="pointer-events-none absolute inset-x-4 -bottom-[6px] h-px bg-white/25" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              {/* Theme toggle (kept from original) */}
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                <ThemeToggle />
              </div>

              {/* CTA (desktop) */}
              <Button
                asChild
                className="hidden md:inline-flex h-11 rounded-2xl bg-white px-4 text-sm font-semibold text-neutral-900 hover:bg-white/95"
              >
                <Link href="/contacto">
                  Cotiza ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              {/* Mobile menu */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="
                  md:hidden grid h-11 w-11 place-items-center
                  rounded-2xl bg-white/10 ring-1 ring-white/10
                  hover:bg-white/15
                "
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative border-t border-white/10 md:hidden"
              >
                <div className="grid gap-2 px-4 py-4">
                  {/* Links */}
                  <Link
                    href="/"
                    className={cn(
                      "rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/10 hover:bg-white/10",
                      isActive("/") && "bg-white/10",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    Inicio
                  </Link>

                  <Link
                    href="/nosotros"
                    className={cn(
                      "rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/10 hover:bg-white/10",
                      isActive("/nosotros") && "bg-white/10",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    Nosotros
                  </Link>

                  {/* Services (mobile list) */}
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10">
                    <div className="flex items-center justify-between px-4 py-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                        Servicios
                      </span>
                      {isServiceActive && <span className="h-2 w-2 rounded-full bg-white/70" />}
                    </div>
                    <div className="grid gap-1 px-2 pb-2">
                      {services.map((service, i) => (
                        <motion.div
                          key={service.href}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 10, opacity: 0 }}
                          transition={{ duration: 0.18, delay: i * 0.02 }}
                        >
                          <Link
                            href={service.href}
                            className={cn(
                              "block rounded-2xl px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10",
                              isActive(service.href) && "bg-white/10 text-white",
                            )}
                            onClick={() => setOpen(false)}
                          >
                            {service.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contacto"
                    className={cn(
                      "rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/10 hover:bg-white/10",
                      isActive("/contacto") && "bg-white/10",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    Contacto
                  </Link>

                  {/* CTA */}
                  <Link
                    href="/contacto"
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-white/95"
                    onClick={() => setOpen(false)}
                  >
                    Cotiza ahora
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom subtle border */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
        </motion.nav>
      </div>
    </header>
  )
}
