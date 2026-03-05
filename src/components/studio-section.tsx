"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    number: "01",
    title: "Precision",
    body: "Every line is placed with intention. No detail is too small to consider.",
  },
  {
    number: "02",
    title: "Longevity",
    body: "Techniques chosen for how the work ages — not just how it looks on day one.",
  },
  {
    number: "03",
    title: "Collaboration",
    body: "Your vision is the starting point. The conversation shapes everything.",
  },
];

export function StudioSection() {
  return (
    <section
      id="studio"
      className="relative py-24 md:py-36 px-6 md:px-14 bg-background overflow-hidden"
    >
      {/* Decorative large numeral */}
      <div
        className="absolute -top-8 -right-4 font-display text-[18rem] font-bold leading-none select-none pointer-events-none opacity-[0.03]"
        aria-hidden="true"
      >
        E
      </div>

      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 md:mb-28"
        >
          <p
            className="text-xs tracking-[0.35em] uppercase mb-6"
            style={{ color: "var(--gold)" }}
          >
            The Studio
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground max-w-2xl">
            Where precision meets{" "}
            <em
              className="font-display font-normal italic"
              style={{ color: "var(--gold)" }}
            >
              artistry
            </em>
          </h2>
          <div
            className="w-12 h-px mt-8"
            style={{ backgroundColor: "var(--gold)" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Empressions Studio is a private, appointment-only tattoo studio
              dedicated to the craft of fine tattoo art. We specialize in fine
              line, realism, and black &amp; grey work — styles that demand
              a steady hand, deep focus, and an eye for shadow and light.
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              The studio environment is calm, clean, and intentional — a space
              where the work can happen without distraction. Each appointment is
              treated as a one-on-one creative session.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="space-y-10"
          >
            {PILLARS.map((pillar) => (
              <div key={pillar.number} className="flex gap-6">
                <span
                  className="font-display text-sm font-semibold shrink-0 mt-0.5"
                  style={{ color: "var(--gold)" }}
                >
                  {pillar.number}
                </span>
                <div>
                  <h3 className="text-sm tracking-[0.15em] uppercase font-medium text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
