"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CTAData {
  title: string
  description: string
  buttonText: string
  disclaimer: string
}

interface CTASectionProps {
  cta: CTAData
}

export default function CTASection({ cta }: CTASectionProps) {
  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-surface-start to-surface-end">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center lg:justify-start"
            >
              <Image
                src="/cta.svg"
                alt="CTA illustration"
                width={500}
                height={400}
                className="w-full max-w-md h-auto"
              />
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-left"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 text-balance"
              >
                {cta.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg lg:text-xl text-gray-300 mb-8 text-balance"
              >
                {cta.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col items-start gap-4"
              >
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-12 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  {cta.buttonText}
                </Button>

                <p className="text-sm text-gray-400">{cta.disclaimer}</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
