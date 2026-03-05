"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Update with actual Instagram URL
const INSTAGRAM_URL = "https://www.instagram.com/empressionsstudio";
const PHONE_NUMBER = "(615) 927-0235";
const SMS_HREF = "sms:+16159270235?body=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation.";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    idea: "",
    placement: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to a form service (Resend, Formspree, etc.)
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 px-6 md:px-14 bg-background overflow-hidden"
    >
      {/* Top border rule */}
      <div
        className="absolute top-0 left-6 right-6 md:left-14 md:right-14 h-px"
        style={{ backgroundColor: "var(--border)" }}
      />

      <div className="max-w-screen-lg mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Left — Heading & Direct Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div>
              <p
                className="text-xs tracking-[0.35em] uppercase mb-6"
                style={{ color: "var(--gold)" }}
              >
                Get In Touch
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                Ready to start your{" "}
                <em
                  className="font-display font-normal italic"
                  style={{ color: "var(--gold)" }}
                >
                  piece?
                </em>
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              Reach out through any of the channels below or fill out the
              inquiry form. We&apos;ll be in touch within 48 hours to discuss your
              project and schedule a consultation.
            </p>

            <div className="space-y-5">
              {/* Text link */}
              <a
                href={SMS_HREF}
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-[var(--gold)] transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground group-hover:text-[var(--gold)] transition-colors duration-300"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-0.5">
                    Text Us
                  </p>
                  <p className="text-sm text-foreground group-hover:text-[var(--gold)] transition-colors duration-300">
                    {PHONE_NUMBER}
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-[var(--gold)] transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground group-hover:text-[var(--gold)] transition-colors duration-300"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-0.5">
                    Instagram
                  </p>
                  <p className="text-sm text-foreground group-hover:text-[var(--gold)] transition-colors duration-300">
                    @empressionsstudio
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-0.5">
                    Location
                  </p>
                  <p className="text-sm text-foreground">Memphis, TN</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full gap-4 py-12">
                <div
                  className="w-12 h-px mb-2"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Message received.
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We&apos;ll be in touch within 48 hours to discuss your vision.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="bg-card border border-border text-foreground text-sm px-4 py-3 outline-none focus:border-[var(--gold)] transition-colors duration-300 placeholder:text-muted-foreground/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="bg-card border border-border text-foreground text-sm px-4 py-3 outline-none focus:border-[var(--gold)] transition-colors duration-300 placeholder:text-muted-foreground/40"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    Tattoo Idea
                  </label>
                  <input
                    name="idea"
                    type="text"
                    value={formState.idea}
                    onChange={handleChange}
                    className="bg-card border border-border text-foreground text-sm px-4 py-3 outline-none focus:border-[var(--gold)] transition-colors duration-300 placeholder:text-muted-foreground/40"
                    placeholder="Describe your concept"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    Placement
                  </label>
                  <input
                    name="placement"
                    type="text"
                    value={formState.placement}
                    onChange={handleChange}
                    className="bg-card border border-border text-foreground text-sm px-4 py-3 outline-none focus:border-[var(--gold)] transition-colors duration-300 placeholder:text-muted-foreground/40"
                    placeholder="Where on the body"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="bg-card border border-border text-foreground text-sm px-4 py-3 outline-none focus:border-[var(--gold)] transition-colors duration-300 resize-none placeholder:text-muted-foreground/40"
                    placeholder="Size, style references, questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs tracking-[0.2em] uppercase font-medium text-black transition-all duration-300 hover:opacity-90 mt-1"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
