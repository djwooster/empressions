"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Studio", href: "#studio" },
  { label: "Artist", href: "#artist" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12"
      style={{ background: "linear-gradient(to bottom, oklch(0.07 0 0 / 0.9) 0%, transparent 100%)" }}
    >
      <Link
        href="#"
        className="font-display text-sm tracking-[0.25em] uppercase text-gold font-semibold"
        style={{ color: "var(--gold)" }}
      >
        Empressions
      </Link>

      <nav className="flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden md:block text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
        <a
          href="sms:+16159270235?body=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation."
          className="text-xs tracking-[0.2em] uppercase border border-[var(--gold)] px-4 py-2 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all duration-300"
        >
          Book Now
        </a>
      </nav>
    </motion.header>
  );
}
