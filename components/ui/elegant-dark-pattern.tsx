import type React from "react"
import { cn } from "@/lib/utils"

interface DarkGradientBgProps {
  children?: React.ReactNode
  className?: string
}

/**
 * DarkGradientBg — Estudio CG Luxury Edition
 * Adaptado al sistema de diseño editorial: paleta carbón, bronce y destellos dorados (#C49A63 / #DFBC8A)
 */
export function DarkGradientBg({ children, className }: DarkGradientBgProps) {
  return (
    <div className={cn("relative min-h-screen w-full bg-[#0D0D0D] overflow-hidden", className)}>
      <div className="absolute inset-0 pointer-events-none">
        {/* Base Radial Gradient — Calidez Carbón */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: 'radial-gradient(100% 100% at 0% 0%, rgb(28, 25, 22) 0%, rgb(13, 13, 13) 100%)',
            mask: 'radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.25) 88%, rgba(0, 0, 0, 0) 100%)'
          }}
        >
          {/* Skewed fading gold streaks — Luces anguladas doradas Estudio CG */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              background: 'linear-gradient(rgb(223, 188, 138) 0%, rgba(196, 154, 99, 0) 100%)',
              mask: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)',
              transform: 'skewX(45deg)'
            }}
          />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              background: 'linear-gradient(rgb(223, 188, 138) 0%, rgba(196, 154, 99, 0) 100%)',
              mask: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)',
              transform: 'skewX(45deg)'
            }}
          />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              background: 'linear-gradient(rgb(196, 154, 99) 0%, rgba(196, 154, 99, 0) 100%)',
              mask: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)',
              transform: 'skewX(45deg)'
            }}
          />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              background: 'linear-gradient(rgb(223, 188, 138) 0%, rgba(196, 154, 99, 0) 100%)',
              mask: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0.47) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)',
              transform: 'skewX(45deg)'
            }}
          />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              background: 'linear-gradient(rgb(196, 154, 99) 0%, rgba(196, 154, 99, 0) 100%)',
              mask: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0.48) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 74%, rgb(0, 0, 0, 0.82) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)',
              transform: 'skewX(45deg)'
            }}
          />
        </div>
      </div>

      {/* Subtle micro-dot pattern overlay en dorado cálido */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(223,188,138,0.3) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle radial highlight en oro suave */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(196,154,99,0.12), transparent)'
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
