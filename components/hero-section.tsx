"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Rocket, Star } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Logo from "@/public/logo.svg";
import Hero from "@/public/hero-v3.png";
import HeroLight from "@/public/hero-light-2.png";

interface HeroData {
  title: string;
  description: string;
  ctaText: string;
  watchDemoText: string;
  rating: {
    score: string;
    text: string;
  };
}

export default function HeroSection({ data }: { data: HeroData }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-center">
        {/* Left Content */}
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance text-whiter"
          >
            Automated Price Monitoring That Saves You Time and Boosts{" "}
            <span className="bg-gradient-to-b from-bluewish to-bluewish/70 text-transparent bg-clip-text">
              Profits
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-whiter/80 mb-8 leading-relaxed"
          >
            {data.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-6"
          >
            <Button
              size="lg"
              className="bg-bluewish hover:bg-bluewish/70 text-white  rounded-full"
            >
              <Rocket className="w-4 h-4 mr-2" />
              {data.ctaText}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-whiter/30 text-whiter hover:bg-whiter/10 bg-transparent rounded-full"
            >
              <Download className="w-4 h-4 mr-2" />
              {data.watchDemoText}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="inline-flex items-center gap-2 text-sm"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-[var(--color-accent)] text-[var(--color-accent)] "
                />
              ))}
            </div>
            <span className="text-whiter/90">
              Rated {data.rating.score}{" "}
              <span className="font-normal">{data.rating.text}</span>
            </span>
          </motion.div>
        </div>

        {/* Right Content - Product Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative lg:scale-110  "
        >
          <div className="relative flex items-center justify-center">
            {/* Gradient effect behind image */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full "
            >
              <Image
                src={mounted && theme === "light" ? HeroLight : Hero}
                alt="Competitors pricing monitoring"
                width={900}
                height={700}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
