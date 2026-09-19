import React from 'react';

/**
 * Living Origami Background — Estudio CG Luxury Edition
 * 
 * Simula una bandada procedural de grullas de origami geométricas con
 * resplandor dorado sutil (#C49A63 / #DFBC8A) flotando en un espacio 3D.
 * Totalmente integrado al sistema de diseño Dark Luxury del estudio.
 */

interface LivingOrigamiProps {
  children?: React.ReactNode;
  className?: string;
  craneCount?: number;
}

export const Component: React.FC<LivingOrigamiProps> = ({
  children,
  className = '',
  craneCount = 15
}) => {
  // Generador de números aleatorios en rango
  const random = (min: number, max: number) => Math.random() * (max - min) + min;

  return (
    <main className={`hero-section relative w-full min-h-screen overflow-hidden bg-[#0D0D0D] ${className}`}>
      {/* Contenedor ambiental 3D para la bandada */}
      <div className="origami-ambient-bg absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(craneCount)].map((_, i) => {
          const duration = random(22, 38);
          const delay = random(-40, 0);
          const scale = random(0.25, 0.75);

          const drifterStyle = {
            '--y-start': `${random(-35, 35)}vh`,
            '--y-end': `${random(-35, 35)}vh`,
            '--r-start': `${random(-25, 25)}deg`,
            '--r-end': `${random(-25, 25)}deg`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          } as React.CSSProperties & Record<string, string | number>;

          const craneStyle = {
            transform: `scale(${scale})`,
            animationDelay: `${random(-4, 0)}s`,
          } as React.CSSProperties;

          return (
            <div key={i} className="drifter-container" style={drifterStyle}>
              <div className="origami-crane" style={craneStyle}>
                <div className="crane-part body" />
                <div className="crane-part wing-left" />
                <div className="crane-part wing-right" />
                <div className="crane-part tail" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Contenedor de contenido sobre el fondo */}
      <div className="relative z-10 text-center p-8 max-w-2xl mx-auto flex flex-col items-center justify-center min-h-screen">
        {children}
      </div>
    </main>
  );
};

export default Component;
