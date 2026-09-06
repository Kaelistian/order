"use client";

import { motion } from "framer-motion";
import { aboutCards } from "@/data/site";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="A little about me"
      title="Here's what I love making."
      description="Have a look around. I'm glad you're here."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-140px" }}
        className="grid gap-4 md:grid-cols-3"
      >
        {aboutCards.map((card) => (
          <motion.div key={card.eyebrow} variants={fadeUp}>
            <GlassCard className="h-full p-6 sm:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/38">
                {card.eyebrow}
              </p>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.01em] text-white">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/56">{card.body}</p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
