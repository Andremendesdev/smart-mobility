"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "./SplashScreen";

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
          className="fixed inset-0 z-[100]"
        >
          <SplashScreen fading={fading} />
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
