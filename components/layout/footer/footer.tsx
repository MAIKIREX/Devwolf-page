import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="group inline-flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-2xl bg-white/[0.06] opacity-0 blur transition-opacity group-hover:opacity-100" />
                  <Image
                    src="/images/logoV10.svg"
                    alt="Devwolf I&T"
                    width={64}
                    height={64}
                    className="relative h-16 w-auto"
                  />
                </div>

                <div className="flex flex-col leading-tight">
                  <span className="font-heading text-xl font-bold tracking-tight">Devwolf</span>
                  <span className="text-sm text-white/70">Ingeniería & Tecnología</span>
                </div>
              </Link>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
                Soluciones integrales en construcción, instalaciones eléctricas, redes & TI, software e impresión 3D.
              </p>

              {/* Small accent line */}
              <div className="mt-6 h-px w-20 bg-gradient-to-r from-white/30 via-white/10 to-transparent" />
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-medium tracking-wide text-white/90">Enlaces</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nosotros"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-medium tracking-wide text-white/90">Contacto</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/70 break-words">
                <li>La Paz, Bolivia</li>
                <li>NIT: 680646031</li>
                <li>
                  <a
                    href="mailto:info@innova-it.bo"
                    className="hover:text-white transition-colors"
                  >
                    devwolf.ingenieriaytecnologia@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-2 text-center text-xs text-white/55 md:flex-row md:items-center md:justify-between md:text-left">
            <p>© 2025 Devwolf INGENIERÍA & TECNOLOGÍA — Todos los derechos reservados.</p>
            <p className="text-white/50">NIT: 680646031 · La Paz - Bolivia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
