import React from "react";
import { cn } from "@/lib/utils";

interface HeroBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Hero Background Snippet — Estudio CG Dark Luxury Design System
 * 
 * Fondo radial estático, sobrio y elegante sin animaciones.
 * Utiliza la paleta obsidian/carbono (#0D0D0D, #000000) combinada con
 * el resplandor cálido ámbar/dorado de Estudio CG (#C49A63 / #1F1912).
 */
export const Hero: React.FC<HeroBackgroundProps> = ({ children, className }) => {
  return (
    <div className={cn("w-full relative min-h-screen bg-[#0D0D0D] text-[#FAF8F4]", className)}>
      {/* Background Pattern Estático Dark Luxury */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#0D0D0D_40%,#C49A63_100%)] opacity-35" />
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
