import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/images/logo4.png" alt="Devwolf I&T" width={40} height={40} className="h-14 w-auto" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl">Devwolf</span>
                <span>Ingenieria & Tecnologia</span>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Soluciones integrales en construcción, instalaciones eléctricas, redes & TI, software e impresión 3D.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 dark:text-foreground">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 dark:text-foreground">Contacto</h3>
            <ul className="space-y-2 text-gray-300">
              <li>La Paz, Bolivia</li>
              <li>NIT: 680646031</li>
              <li>
                <a href="mailto:info@innova-it.bo" className="hover:text-white transition-colors">
                  innova.ingenieriaytecnologia@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Devwolf INGENIERÍA & TECNOLOGÍA — Todos los derechos reservados.</p>
          <p className="mt-2">NIT: 680646031 · La Paz - Bolivia</p>
        </div>
      </div>
    </footer>
  )
}
