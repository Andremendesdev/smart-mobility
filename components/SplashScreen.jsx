"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";
import FloatingParticles from "./effects/FloatingParticles";

const SplashScreen = ({ fading = false }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden ${
        fading
          ? "bg-background/40 backdrop-blur-[1px] pointer-events-none"
          : "bg-[#0a0a0a]"
      }`}
      aria-live="polite"
      aria-busy={!fading}
      aria-label="Carregando"
    >
      {!fading && (
        <>
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#080808] via-background to-[#0e0e0e]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(217,119,6,0.07)_0%,transparent_55%)]"
            aria-hidden="true"
          />
          <div
            className="absolute top-1/4 -left-1/4 w-[55%] h-[45%] rounded-full bg-amber-600/10 blur-[100px]"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-1/4 -right-1/4 w-[45%] h-[40%] rounded-full bg-amber-400/5 blur-[90px]"
            aria-hidden="true"
          />
          <FloatingParticles count={16} opacityScale={0.28} />
          <div className="loading-cinematic-sweep absolute inset-0" aria-hidden="true" />
        </>
      )}

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative overflow-hidden rounded-lg px-2 py-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{
              opacity: fading ? 0 : 1,
              scale: fading ? 0.98 : 1,
              y: fading ? -6 : 0,
            }}
            transition={{
              opacity: { duration: fading ? 0.4 : 1.1, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: fading ? 0.4 : 1.1, ease: [0.16, 1, 0.3, 1] },
              y: { duration: fading ? 0.4 : 1.1, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            <Logo className="h-11 md:h-12 w-auto shrink-0 relative z-10" />
          </motion.div>
          {!fading && (
            <div className="logo-light-sweep absolute inset-0 z-20" aria-hidden="true" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
