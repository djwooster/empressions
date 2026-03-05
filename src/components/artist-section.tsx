"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Replace with actual photo of Mckenna Wilson
const ARTIST_PHOTO =
  "https://images.pexels.com/photos/2255663/pexels-photo-2255663.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop";

const SPECIALTIES = [
  "Fine Line",
  "Botanical & Floral",
  "Realism",
  "Black & Grey",
  "Minimalist",
  "Custom Lettering",
];

export function ArtistSection() {
  return (
    <section
      id="artist"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: "oklch(0.10 0 0)" }}
    >
      {/* Top border rule */}
      <div
        className="absolute top-0 left-6 right-6 md:left-14 md:right-14 h-px"
        style={{ backgroundColor: "var(--border)" }}
      />

      <div className="max-w-screen-lg mx-auto px-6 md:px-14">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src={ARTIST_PHOTO}
              alt="Mckenna Wilson — Tattoo Artist"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Corner accent */}
            <div
              className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2"
              style={{ borderColor: "var(--gold)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2"
              style={{ borderColor: "var(--gold)" }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-7"
          >
            <div>
              <p
                className="text-xs tracking-[0.35em] uppercase mb-4"
                style={{ color: "var(--gold)" }}
              >
                The Artist
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                Mckenna
                <br />
                <em
                  className="font-display font-normal italic"
                  style={{ color: "var(--gold)" }}
                >
                  Wilson
                </em>
              </h2>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">
              Mckenna Wilson is a Memphis-based tattoo artist with a refined eye
              for detail and a deep respect for the skin as a canvas. Her work
              lives at the intersection of delicacy and permanence — fine lines
              that endure, shading that breathes.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              Every piece begins with a conversation. Mckenna takes time to
              understand your vision before putting needle to skin, ensuring
              the result is something you&apos;ll carry with pride.
            </p>

            <div>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-4 font-medium"
                style={{ color: "var(--gold)" }}
              >
                Specialties
              </p>
              <div className="flex flex-wrap gap-2">
                {SPECIALTIES.map((s) => (
                  <span
                    key={s}
                    className="text-xs tracking-[0.12em] uppercase px-3 py-1.5 border border-border text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="sms:+16159270235?body=Hi%20Mckenna%2C%20I%27d%20like%20to%20book%20a%20tattoo%20consultation."
              className="inline-flex items-center gap-2 text-sm tracking-wide group mt-2"
              style={{ color: "var(--gold)" }}
            >
              <span>Book with Mckenna</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
