"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
          <div className="text-[var(--color-bluewish)] font-semibold text-sm tracking-wider uppercase mb-4">
            {testimonials.label}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            {testimonials.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {testimonials.subtitle}
          </p>
        </motion.div>

        {/* Rotating testimonials */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          className="max-w-4xl mx-auto"
        >
          {[
            {
              rating: 5,
              quote:
                "Aimate has revolutionized our operations. The AI-driven support exceeds expectations and enhances efficiency.",
              author: {
                name: "John Doe",
                title: "Managing Director",
                image: "/avatar.png",
                shop: { name: "Spherule", href: "#" },
              },
            },
            {
              rating: 5,
              quote:
                "We saw immediate uplift in conversion after automating price updates. Setup was quick and painless.",
              author: {
                name: "Amelia Hart",
                title: "Head of Growth",
                image: "/amelia_avatar.png",
                shop: { name: "Nordico", href: "#" },
              },
            },
            {
              rating: 4,
              quote:
                "Clear insights and timely alerts helped us beat competitors without hurting margin.",
              author: {
                name: "Samir Khan",
                title: "Ecommerce Lead",
                image: "/samir_avatar.png",
                shop: { name: "Trendlane", href: "#" },
              },
            },
            {
              rating: 5,
              quote:
                "Fantastic support and smart automation. Highly recommended for growing shops.",
              author: {
                name: "Lena Chen",
                title: "Founder",
                image: "/lena_avatar.png",
                shop: { name: "Bright&Co", href: "#" },
              },
            },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-whiter/5 rounded-2xl p-8 lg:p-10"
              >
                <div className="flex gap-2 mb-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-[var(--color-bluewish)] text-[var(--color-bluewish)]"
                    />
                  ))}
                </div>
                <p className="text-white text-lg lg:text-xl leading-relaxed mb-8">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={item.author.image}
                    alt={item.author.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="text-white font-semibold text-lg">
                      {item.author.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {item.author.title} •{" "}
                      <a
                        href={item.author.shop.href}
                        className="text-[var(--color-bluewish)] underline-offset-4 hover:underline"
                      >
                        {item.author.shop.name}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Stats under slider */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mt-10 lg:mt-16">
          {testimonials.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-2xl p-8 lg:p-10"
            >
              <div className="flex items-start gap-2 mb-2">
                <div className="text-5xl lg:text-6xl font-bold text-[var(--color-accent)]">
                  {stat.value}
                </div>
                <TrendingUp className="w-5 h-5 text-white mt-2" />
              </div>
              <div className="text-white text-base lg:text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
