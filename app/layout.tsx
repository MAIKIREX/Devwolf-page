import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter_Tight } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter-tight",
})


export const metadata: Metadata = {
  metadataBase: new URL('https://www.devwolf-ingenieria.com'), // Replace with actual URL if different
  title: {
    default: "Devwolf Ingeniería & Tecnología | Soluciones en La Paz, Bolivia",
    template: "%s | Devwolf Ingeniería",
  },
  description:
    "Empresa boliviana en La Paz especializada en ingeniería, construcción, instalaciones eléctricas, redes y TI, desarrollo de software, automatización e impresión 3D.",
  keywords: ["ingeniería", "tecnología", "construcción", "instalaciones eléctricas", "redes", "TI", "software", "impresión 3D", "La Paz", "Bolivia", "automatización"],
  authors: [{ name: "Devwolf Ingeniería & Tecnología" }],
  creator: "Devwolf Ingeniería & Tecnología",
  publisher: "Devwolf Ingeniería & Tecnología",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_BO",
    url: "https://www.devwolf-ingenieria.com",
    title: "Devwolf Ingeniería & Tecnología",
    description: "Soluciones integrales de ingeniería y tecnología en La Paz, Bolivia. Especialistas en construcción, instalaciones eléctricas, software y más.",
    siteName: "Devwolf Ingeniería & Tecnología",
    images: [
      {
        url: "/og-image.jpg", // Create this image in public/
        width: 1200,
        height: 630,
        alt: "Devwolf Ingeniería & Tecnología en La Paz, Bolivia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devwolf Ingeniería & Tecnología",
    description: "Soluciones integrales de ingeniería y tecnología en La Paz, Bolivia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Devwolf Ingeniería & Tecnología",
  "image": "https://www.devwolf-ingenieria.com/logo.png",
  "@id": "https://www.devwolf-ingenieria.com",
  "url": "https://www.devwolf-ingenieria.com",
  "telephone": "+59100000000", // Update with actual phone number
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "La Paz", // Update with exact address if available
    "addressLocality": "La Paz",
    "addressRegion": "La Paz",
    "postalCode": "0000",
    "addressCountry": "BO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -16.489689,
    "longitude": -68.119293
  },
  "description": "Empresa boliviana especializada en construcción, instalaciones eléctricas, redes & TI, desarrollo de software e impresión 3D.",
  "sameAs": [
    "https://www.linkedin.com/company/devwolf-ingenieria", 
    "https://www.facebook.com/devwolf-ingenieria"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${interTight.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
