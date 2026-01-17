import { TextStaggerLetters } from "@/components/TextStaggerLetters"
import Image from "next/image"

export function NosotrosHeroSection() {
  return (
    <section className="border-b border-border bg-black pt-10 md:pt-20">
      <div className="container mx-auto px-4">
        <div className="grid min-h-[42svh] items-end gap-10 pt-14 md:min-h-[48svh] md:grid-cols-12 md:items-center md:pb-16">
          {/* TEXTO */}
          <div className="md:col-span-7 lg:col-span-7">
            <TextStaggerLetters text="Quiénes somos" />
            <p className="mt-4 max-w-3xl text-lg md:text-2xl text-white/80 leading-relaxed">
              Soluciones integrales en construcción, instalaciones eléctricas, redes, software e impresión 3D
            </p>
            <div className="mt-8 h-px w-32 bg-border/80" />
          </div>

          {/* IMAGEN */}
          <div className="flex justify-center md:col-span-5 md:justify-end lg:col-span-5">
            <Image
              src="/images/logov11.svg"
              alt="Devwolf I&T"
              width={320}
              height={320}
              priority
              className="
                h-28 w-auto md:h-36 lg:h-56
                object-contain
                opacity-90 md:opacity-60
                drop-shadow-[0_0_24px_rgba(255,255,255,0.08)]
                scale-110 md:scale-125
              "
            />
          </div>
        </div>
      </div>
    </section>
  )
}
