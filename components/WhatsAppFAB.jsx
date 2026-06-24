"use client";

import { useEffect, useState } from "react";
import { MessageCircleMore } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/1234567890";

const WhatsAppFAB = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          href={WHATSAPP_URL}
          className="neon-blue-btn fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-gradient-to-b from-amber-400 to-amber-600 text-white p-4 rounded-full hover:scale-110 hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400/50"
          aria-label="Fale com a Smart Mobility no WhatsApp e saia do trânsito"
        >
          <MessageCircleMore size={32} />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFAB;
