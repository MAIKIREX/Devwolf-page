"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { cn } from "@/lib/utils"

const services = [
  { name: "Construcción", href: "/servicios/construccion" },
  { name: "Instalaciones Eléctricas", href: "/servicios/instalaciones-electricas" },
  { name: "Redes & Telecomunicaciones", href: "/servicios/redes-telecomunicaciones" },
  { name: "Distribución de Equipos", href: "/servicios/distribucion-equipos" },
  { name: "Software & DevOps", href: "/servicios/software-devops" },
  { name: "Impresión 3D", href: "/servicios/impresion-3d" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const isServiceActive = services.some((service) => pathname.startsWith(service.href))

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo4.png" alt="Devwolf I&T" width={70} height={70} className="h-16 w-auto" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-secondary dark:text-primary hidden sm:block">
                Devwolf
              </span>
              <span className="hidden sm:block">
                ingeniería & tecnología
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                "text-foreground hover:text-primary transition-colors font-medium relative",
                isActive("/") &&
                  "text-primary after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-primary",
              )}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className={cn(
                "text-foreground hover:text-primary transition-colors font-medium relative",
                isActive("/nosotros") &&
                  "text-primary after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-primary",
              )}
            >
              Nosotros
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  "flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium outline-none relative",
                  isServiceActive &&
                    "text-primary after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-primary",
                )}
              >
                Servicios
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link
                      href={service.href}
                      className={cn(
                        "cursor-pointer",
                        isActive(service.href) && "bg-primary/10 text-primary font-medium",
                      )}
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/contacto"
              className={cn(
                "text-foreground hover:text-primary transition-colors font-medium relative",
                isActive("/contacto") &&
                  "text-primary after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-primary",
              )}
            >
              Contacto
            </Link>

            <ThemeToggle />

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contacto">Cotiza ahora</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle menu">
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="border-b border-border pb-4">
                  <SheetTitle className="flex items-center gap-3">
                    <Image src="/images/logo.png" alt="Devwolf I&T" width={40} height={40} className="h-10 w-auto" />
                    <span className="font-heading font-bold text-lg text-secondary dark:text-primary">Devwolf I&T</span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-1 mt-6">
                  <Link
                    href="/"
                    className={cn(
                      "px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all font-medium text-lg",
                      isActive("/") && "bg-primary/10 text-primary border-l-4 border-primary",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Inicio
                  </Link>
                  <Link
                    href="/nosotros"
                    className={cn(
                      "px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all font-medium text-lg",
                      isActive("/nosotros") && "bg-primary/10 text-primary border-l-4 border-primary",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Nosotros
                  </Link>

                  <div className="mt-4 mb-2">
                    <div className="px-4 py-2 flex items-center justify-between">
                      <span className="text-muted-foreground text-xs font-bold uppercase tracking-wider">
                        Servicios
                      </span>
                      {isServiceActive && <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />}
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={cn(
                            "px-4 py-2.5 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all ml-2 border-l-2 border-transparent hover:border-primary",
                            isActive(service.href) && "bg-primary/10 text-primary border-primary font-medium",
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contacto"
                    className={cn(
                      "px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all font-medium text-lg mt-2",
                      isActive("/contacto") && "bg-primary/10 text-primary border-l-4 border-primary",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contacto
                  </Link>

                  <Button
                    asChild
                    size="lg"
                    className="w-full mt-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/20"
                  >
                    <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                      Cotiza ahora
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
