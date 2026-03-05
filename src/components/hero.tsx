"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Replace these with your actual portfolio images when ready
const GRID_IMAGES = [
  {
    // Woman with tattoo on her back
    src: "https://images.pexels.com/photos/10581618/pexels-photo-10581618.jpeg?auto=compress&cs=tinysrgb&w=480&h=720&fit=crop",
    width: 480,
    height: 720,
    alt: "Tattoo on back",
    className: "row-span-2",
  },
  {
    // Person applying tattoo — artist at work
    src: "https://images.pexels.com/photos/955938/pexels-photo-955938.jpeg?auto=compress&cs=tinysrgb&w=480&h=320&fit=crop",
    width: 480,
    height: 320,
    alt: "Tattooing in progress",
    className: "",
  },
  {
    // Man with hand tattoos
    src: "https://images.pexels.com/photos/6900608/pexels-photo-6900608.jpeg?auto=compress&cs=tinysrgb&w=480&h=360&fit=crop",
    width: 480,
    height: 360,
    alt: "Hand tattoos detail",
    className: "",
  },
  {
    // Portrait of man with tattoo
    src: "https://images.pexels.com/photos/19124835/pexels-photo-19124835.jpeg?auto=compress&cs=tinysrgb&w=480&h=360&fit=crop",
    width: 480,
    height: 360,
    alt: "Portrait with tattoo",
    className: "",
  },
  {
    // Freedom tattoo on back — portrait
    src: "https://images.pexels.com/photos/6487420/pexels-photo-6487420.jpeg?auto=compress&cs=tinysrgb&w=480&h=720&fit=crop",
    width: 480,
    height: 720,
    alt: "Back tattoo",
    className: "row-span-2",
  },
  {
    // Woman with rose arm tattoo
    src: "https://images.pexels.com/photos/4357606/pexels-photo-4357606.jpeg?auto=compress&cs=tinysrgb&w=480&h=360&fit=crop",
    width: 480,
    height: 360,
    alt: "Rose arm tattoo",
    className: "",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.04 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-background">
      {/* Left — Text Panel */}
      <div className="relative z-10 flex flex-col justify-end md:justify-center px-6 pt-28 pb-10 md:pt-0 md:pb-0 md:px-14 md:w-[42%] lg:w-[38%] md:min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.div
            variants={textVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <p
              className="text-xs tracking-[0.35em] uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Memphis, TN
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-foreground">
              Empres&shy;sions
              <br />
              <em className="not-italic" style={{ color: "var(--gold)" }}>
                Studio
              </em>
            </h1>
          </motion.div>

          <motion.p
            variants={textVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            className="text-sm text-muted-foreground leading-relaxed tracking-wide max-w-xs"
          >
            Fine Line · Realism · Black &amp; Grey
          </motion.p>

          <motion.p
            variants={textVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            className="text-sm text-muted-foreground/70 leading-relaxed max-w-xs"
          >
            Custom tattoo artistry where precision meets intention. Every piece is considered, deliberate, and made to last.
          </motion.p>

          <motion.div
            variants={textVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <a
              href="sms:+16159270235?body=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation."
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium text-black transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "var(--gold)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Text to Book
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium border border-border text-foreground/70 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
            >
              View Inquiry Form
            </a>
          </motion.div>
        </motion.div>

        {/* Subtle vertical rule */}
        <div
          className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px"
          style={{ background: "linear-gradient(to bottom, transparent, var(--gold) 40%, var(--gold) 60%, transparent)" }}
        />
      </div>

      {/* Right — Mason Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="md:w-[58%] lg:w-[62%] flex-1"
      >
        <div
          className="grid gap-[3px] h-full"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridAutoRows: "auto",
          }}
        >
          {GRID_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              variants={imageVariants}
              className={`relative overflow-hidden ${img.className}`}
              style={{ minHeight: i === 0 || i === 4 ? 480 : 240 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
              {/* Subtle dark overlay */}
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
