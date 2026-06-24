"use client";

import AnimatedCounter from "./ui/AnimatedCounter";
import ScrollReveal from "./ui/ScrollReveal";
import NeonLights from "./effects/NeonLights";
import FloatingParticles from "./effects/FloatingParticles";

const stats = [
  { value: 500, suffix: "+", label: "Clientes na região" },
  { value: 75, suffix: " km", label: "Autonomia máxima" },
  { value: 45, suffix: " km/h", label: "Velocidade top" },
  { value: 100, suffix: "%", label: "Elétrica, zero emissão" },
];

const StatsSection = () => {
  return (
    <section id="stats" className="relative py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <NeonLights />
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-gutter md:px-margin-desktop">
        <ScrollReveal className="text-center mb-8 sm:mb-12 md:mb-14">
          <p className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] uppercase text-amber-400 mb-2 sm:mb-3">
            Performance em números
          </p>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-[1.65rem] sm:text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight px-2">
            Mobilidade elétrica que entrega
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div className="glass-panel rounded-lg sm:rounded-xl p-3.5 sm:p-5 md:p-7 lg:p-8 text-center group hover:border-amber-400/20 transition-colors duration-500 h-full flex flex-col justify-center min-w-0">
                <p className="font-headline-md text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-neon-sky-soft leading-none break-words">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm md:text-base text-on-surface-variant leading-snug px-0.5">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
