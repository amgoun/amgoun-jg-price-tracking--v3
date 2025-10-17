"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type Stat = { value: string; label: string };

export default function TestimonialsStats({
  stats,
}: {
  stats: Stat[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 lg:py-16 bg-[var(--color-section-bg)]">
      <div ref={ref} className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/5 rounded-2xl p-8 lg:p-10"
            >
              <div className="text-5xl lg:text-6xl font-bold text-[var(--color-accent)] mb-2">
                {stat.value}
              </div>
              <div className="text-white text-base lg:text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


