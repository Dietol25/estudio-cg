import { Hero } from "@/components/ui/tailwind-css-background-snippet";

export default function HeroDemo() {
  return (
    <Hero>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <span className="text-xs uppercase tracking-widest text-[#C49A63] font-semibold mb-3">
          Estudio CG · Gestoría Integral
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-[#FAF8F4] mb-4">
          Resueltos sin vueltas.
        </h1>
        <p className="text-[#A19D95] max-w-lg text-sm md:text-base">
          Asesoramiento técnico y resolución directa en gestiones previsionales, laborales y fiscales desde 2009.
        </p>
      </div>
    </Hero>
  );
}
