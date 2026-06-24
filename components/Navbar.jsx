"use client";

import { useState, useEffect } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const WHATSAPP_URL = "https://wa.me/1234567890";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Números", href: "#stats" },
    { name: "Modelos", href: "#models" },
    { name: "Benefícios", href: "#benefits" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.3),0_0_20px_rgba(217,119,6,0.15)] py-4"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="flex justify-between items-center px-gutter md:px-margin-desktop w-full max-w-container-max mx-auto">
          <a
            href="#inicio"
            className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded"
            aria-label="Smart Mobility — início"
          >
            <Logo className="h-8 md:h-10 w-auto shrink-0" />
          </a>

          <div className="hidden md:flex gap-gutter items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-label-md text-label-md text-on-surface-variant hover:text-amber-600 transition-colors duration-300 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded px-3 py-2"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-amber-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            className="neon-blue-btn hidden md:flex items-center gap-base font-label-md text-label-md bg-gradient-to-b from-amber-400 to-amber-600 text-white px-6 py-3 rounded-full hover:brightness-110 hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            aria-label="Solicitar orçamento no WhatsApp"
          >
            <MessageCircle size={18} />
            <span>Solicitar Orçamento</span>
          </a>

          <button
            className="md:hidden text-amber-600 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu de navegação"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-surface/95 backdrop-blur-2xl flex flex-col p-gutter"
          >
            <div className="flex justify-between items-center mb-margin-desktop">
              <Logo className="h-7 w-auto shrink-0" />
              <button
                className="text-amber-600 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Fechar menu de navegação"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-margin-mobile items-start">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface hover:text-amber-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded w-full"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                href={WHATSAPP_URL}
                className="neon-blue-btn mt-margin-desktop w-full flex items-center justify-center gap-base font-label-md text-label-md bg-gradient-to-b from-amber-400 to-amber-600 text-white px-8 py-4 rounded-full hover:brightness-110 transition-all"
              >
                <MessageCircle size={20} />
                Fale conosco
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
