"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Cpu } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Qualidade",
    subtitle: "Que conecta",
  },
  {
    icon: Award,
    title: "Desempenho",
    subtitle: "Que impressiona",
  },
  {
    icon: Cpu,
    title: "Tecnologia",
    subtitle: "Que evolui",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeroFeatureBadges = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-4 md:mt-5 w-full grid grid-cols-3 divide-x divide-white/10"
    >
      {features.map(({ icon: Icon, title, subtitle }) => (
        <motion.div
          key={title}
          variants={itemVariants}
          className="flex flex-col items-center text-center px-2 sm:px-4 md:px-6"
        >
          <div className="relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14 mb-2 md:mb-3">
            <div className="absolute inset-0 rounded-full bg-amber-400/15 blur-lg scale-125" />
            <div className="absolute inset-1 rounded-full border border-amber-400/20" />
            <Icon
              className="relative w-5 h-5 md:w-7 md:h-7 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.85)]"
              strokeWidth={1.5}
            />
          </div>
          <p className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.15em] text-white uppercase leading-snug">
            {title}
          </p>
          <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.12em] text-amber-400/80 uppercase leading-snug mt-0.5">
            {subtitle}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroFeatureBadges;
