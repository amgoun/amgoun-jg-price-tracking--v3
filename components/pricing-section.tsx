"use client";

import { motion } from "framer-motion";
import {
  Lock,
  Eye,
  Clock,
  Infinity,
  Mail,
  Settings,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingFeature {
  icon: string;
  text: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  badge?: string;
  features: PricingFeature[];
  ctaText: string;
  highlighted: boolean;
}

interface PricingData {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

const iconMap = {
  lock: Lock,
  eye: Eye,
  clock: Clock,
  infinity: Infinity,
  mail: Mail,
  settings: Settings,
  layers: Layers,
};

export default function PricingSection({ pricing }: { pricing: PricingData }) {
  return (
    <section className="py-20 px-6 lg:px-12 bg-[#242424]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {pricing.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {pricing.subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricing.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-blacker rounded-2xl p-8 transition-all ${
                plan.highlighted
                  ? "ring-2 ring-[#f47b5e] shadow-[0_0_30px_rgba(244, 123, 94,0.3)]"
                  : "hover:bg-whiter/2"
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3 right-6 bg-[#f47b5e] text-white px-4 py-1 rounded-full text-xs font-medium">
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => {
                  const IconComponent =
                    iconMap[feature.icon as keyof typeof iconMap];
                  return (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                          plan.highlighted ? "bg-[#f47b5e]/5" : "bg-whiter/5"
                        }`}
                      >
                        {IconComponent && (
                          <IconComponent
                            className={`w-5 h-5 ${
                              plan.highlighted
                                ? "text-[#f47b5e]"
                                : "text-gray-400"
                            }`}
                          />
                        )}
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed pt-2">
                        {feature.text}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full rounded-full font-medium transition-all ${
                  plan.highlighted
                    ? "bg-[#f47b5e] hover:bg-[#f47b5e]/80 text-white"
                    : "bg-whiter/10 hover:bg-whiter/50 hover:text-blacker text-white"
                }`}
              >
                {plan.ctaText}
                <span className="ml-2">→</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
