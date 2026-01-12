import type React from "react"
import type { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Devwolf Ingeniería & Tecnología - Soluciones Integrales en Bolivia",
  description:
    "Empresa boliviana especializada en construcción, instalaciones eléctricas, redes & TI, software e impresión 3D",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${roboto.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
