import { DarkGradientBg } from "@/components/ui/elegant-dark-pattern"

export default function BackgroundDemo() {
  return (
    <DarkGradientBg>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-6 max-w-2xl mx-auto py-20">
          <span className="text-sm font-semibold tracking-widest text-[#C49A63] uppercase">
            Estudio CG — Gestoría y Consultoría
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#FAF8F4] tracking-tight">
            Patrón de Fondo Oscuro Elegante
          </h1>
          <p className="text-base md:text-lg text-neutral-400 font-light leading-relaxed">
            Profundidad multicapa con microtextura de puntos dorados, degradado radial carbón y sutiles destellos angulares.
          </p>
        </div>
      </div>
    </DarkGradientBg>
  )
}
