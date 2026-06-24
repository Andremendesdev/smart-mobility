"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Battery, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollUnderline from "./ui/ScrollUnderline";

const WHATSAPP_URL = "https://wa.me/1234567890";

const ModelCard = ({
  badge,
  imageSrc,
  imageAlt,
  name,
  description,
  range,
  topSpeed,
  ctaText,
  ctaStyle,
  cardHighlight,
  light = false,
}) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTilt({ x: rotateX, y: rotateY });
    el.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
    el.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="card-3d h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        className={cn(
          "card-3d-inner rounded-xl p-7 md:p-8 flex flex-col gap-6 relative overflow-hidden group h-full",
          light
            ? "bg-white border border-neutral-200 shadow-lg shadow-neutral-200/60"
            : "glass-panel",
          cardHighlight
        )}
      >
        {light ? null : <div className="card-3d-shine" />}

        <div className="absolute top-6 right-6 z-10">
          <span
            className={cn(
              "font-label-md text-label-md px-3 py-1 rounded-full",
              badge.style
            )}
          >
            {badge.text}
          </span>
        </div>

        <div
          className={cn(
            "h-64 relative rounded-xl flex items-center justify-center p-4",
            light
              ? "bg-neutral-100 ring-1 ring-neutral-200"
              : "bg-surface-container-lowest ring-1 ring-white/5"
          )}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={256}
            className={cn(
              "max-h-full w-auto object-contain group-hover:scale-105 transition-all duration-500",
              light
                ? "opacity-95 group-hover:opacity-100"
                : "mix-blend-screen opacity-80 group-hover:opacity-100"
            )}
          />
        </div>

        <div className="flex-grow">
          <ScrollUnderline
            textClassName={cn(
              "font-headline-md text-headline-md",
              light && "text-neutral-900"
            )}
          >
            {name}
          </ScrollUnderline>
          <p
            className={cn(
              "font-body-md text-body-md mt-2",
              light ? "text-neutral-600" : "text-on-surface-variant"
            )}
          >
            {description}
          </p>
        </div>

        <div
          className={cn(
            "grid grid-cols-2 gap-5 pt-6 border-t mt-auto",
            light ? "border-neutral-200" : "border-white/10"
          )}
        >
          <div className="flex flex-col gap-1">
            <span
              className={cn(
                "flex items-center gap-1 font-label-md text-label-md",
                light ? "text-neutral-500" : "text-on-surface-variant"
              )}
            >
              <Battery size={14} />
              AUTONOMIA
            </span>
            <span
              className={cn(
                "font-body-md text-body-md font-semibold",
                light ? "text-neutral-900" : "text-on-surface"
              )}
            >
              {range}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span
              className={cn(
                "flex items-center gap-1 font-label-md text-label-md",
                light ? "text-neutral-500" : "text-on-surface-variant"
              )}
            >
              <Gauge size={14} />
              VELOCIDADE
            </span>
            <span
              className={cn(
                "font-body-md text-body-md font-semibold",
                light ? "text-neutral-900" : "text-on-surface"
              )}
            >
              {topSpeed}
            </span>
          </div>
        </div>

        <a
          href={WHATSAPP_URL}
          className={cn(
            "w-full text-center font-label-md text-label-md py-3 rounded-full shadow-sm hover:shadow-md transition-all mt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-600",
            light ? "focus-visible:ring-offset-white" : "focus-visible:ring-offset-surface",
            ctaStyle
          )}
          aria-label={`Consultar sobre ${name}`}
        >
          {ctaText || "Saiba Mais"}
        </a>
      </div>
    </div>
  );
};

export default ModelCard;
