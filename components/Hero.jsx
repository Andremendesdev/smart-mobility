"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import HeroFeatureBadges from "./HeroFeatureBadges";
import { useLoading } from "./LoadingProvider";
import { ASSETS } from "@/lib/assets";

const WHATSAPP_URL = "https://wa.me/1234567890";

const Hero = () => {
  const { heroReady } = useLoading();

  return (
    <section
      id="inicio"
      className="relative min-h-[76.5svh] md:min-h-[829px] flex items-center pt-28 pb-16 md:pt-margin-desktop md:pb-margin-desktop px-gutter md:px-margin-desktop overflow-hidden -mt-20"
    >
      <div className="absolute inset-0 z-0 bg-surface-container-lowest">
        <motion.div
          className="absolute inset-0 will-change-transform"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={
            heroReady
              ? {
                  scale: [1.0, 1.05, 1.0],
                  x: [0, -8, 0],
                  y: [0, -4, 0],
                  opacity: 1,
                }
              : { scale: 1.1, opacity: 0 }
          }
          transition={{
            opacity: { duration: 1.2, ease: "easeOut" },
            scale: {
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            },
            x: {
              duration: 12,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            },
            y: {
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          <Image
            src={ASSETS.heroBg}
            alt=""
            fill
            priority
            quality={100}
            sizes="100vw"
            unoptimized
            className="object-cover object-[center_64%]"
            aria-hidden
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-margin-desktop items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={heroReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-[10px] font-medium tracking-[0.12em] uppercase text-amber-400 bg-gradient-to-r from-amber-600/20 to-amber-400/10 px-2 py-0.5 rounded-full border border-amber-600/50"
          >
            Economia, tecnologia e mobilidade
          </motion.span>

          <h1 className="mt-8 md:mt-12 font-headline-xl text-on-surface leading-tight">
            <div className="text-headline-md text-amber-500">
              Scooters Elétricas.
              <br />
            </div>
            <span className="text-5xl md:text-6xl font-semibold text-white">
              Smart Mobility
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 md:mt-10 font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed"
          >
            O Futuro da Mobilidade Elétrica começa hoje em Piraju
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto items-center sm:items-start"
          >
            <a
              href={WHATSAPP_URL}
              className="neon-blue-btn inline-flex items-center justify-center gap-base font-label-md text-label-md bg-gradient-to-b from-amber-400 to-amber-600 text-white px-8 py-4 rounded-full w-full sm:w-auto hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Solicitar Orçamento
              <ArrowRight size={18} />
            </a>
            <a
              href="#models"
              className="btn-border-trail-light group w-full sm:w-auto flex justify-center hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
            >
              <span className="relative z-10 inline-flex items-center justify-center gap-base font-label-md text-label-md bg-transparent text-white rounded-full px-8 py-4 w-full sm:w-auto group-hover:text-amber-200 transition-colors duration-300">
                Ver Modelos
                <ChevronRight size={18} />
              </span>
            </a>
          </motion.div>

          <HeroFeatureBadges />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
