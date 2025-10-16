"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, TrendingUp } from "lucide-react";
import Image from "next/image";

interface TestimonialsData {
  label: string;
  title: string;
  subtitle: string;
  testimonial: {
    rating: number;
    quote: string;
    author: {
      name: string;
      title: string;
      image: string;
    };
  };
  stats: Array<{
    value: string;
    label: string;
    trend: string;
  }>;
}

export default function TestimonialsSection({
  testimonials,
}: {
  testimonials: TestimonialsData;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-blacker py-20 lg:py-28">
      <div ref={ref} className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="text-[#f47b5e] font-semibold text-sm tracking-wider uppercase mb-4">
            {testimonials.label}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            {testimonials.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {testimonials.subtitle}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Testimonial Card - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-whiter/5 rounded-2xl p-8 lg:p-10 flex flex-col justify-between"
          >
            {/* Stars */}
            <div className="flex gap-2 mb-6">
              {[...Array(testimonials.testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-[#f47b5e] text-[#f47b5e]"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white text-lg lg:text-xl leading-relaxed mb-8 flex-grow">
              "{testimonials.testimonial.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <Image
                src="/avatar.png"
                alt={testimonials.testimonial.author.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <div className="text-white font-semibold text-lg">
                  {testimonials.testimonial.author.name}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials.testimonial.author.title}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards - Right */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {testimonials.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="bg-white/5 rounded-2xl p-8 lg:p-10 flex-1"
              >
                <div className="flex items-start gap-3 mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.15,
                      type: "spring",
                    }}
                    className="text-5xl lg:text-6xl font-bold text-[#c6a2cc] "
                  >
                    {stat.value}
                  </motion.div>
                  {stat.trend === "up" && (
                    <TrendingUp className="w-6 h-6 text-white mt-2" />
                  )}
                </div>
                <p className="text-white text-base lg:text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
