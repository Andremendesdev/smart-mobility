"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const LoadingContext = createContext({
  heroReady: false,
});

export const useLoading = () => useContext(LoadingContext);

const MIN_SPLASH_MS = 900;
const FADE_MS = 750;

const SplashOverlay = ({ visible, fading }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: fading ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center ${
            fading
              ? "bg-background/40 backdrop-blur-[1px] pointer-events-none"
              : "bg-background"
          }`}
          aria-live="polite"
          aria-busy={!fading}
          aria-label="Carregando"
        >
          <motion.div
            animate={{ opacity: fading ? 0 : 1, y: fading ? -8 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <Logo className="h-11 md:h-12 w-auto shrink-0" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const LoadingProvider = ({ children }) => {
  const [phase, setPhase] = useState("loading");
  const heroReady = phase !== "loading";

  useEffect(() => {
    const start = Date.now();
    let fadeTimer;
    let doneTimer;

    const beginTransition = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_SPLASH_MS - elapsed);

      fadeTimer = setTimeout(() => setPhase("fading"), remaining);
      doneTimer = setTimeout(() => setPhase("done"), remaining + FADE_MS);
    };

    if (document.readyState === "complete") {
      beginTransition();
    } else {
      window.addEventListener("load", beginTransition);
    }

    return () => {
      window.removeEventListener("load", beginTransition);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ heroReady }}>
      <SplashOverlay visible={phase !== "done"} fading={phase === "fading"} />
      {children}
    </LoadingContext.Provider>
  );
};
