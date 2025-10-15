"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Bell, Zap, Settings, BarChart3, Mail } from "lucide-react"

interface Feature {
  id: string
  title: string
  description: string
  icon: string
  iconColor: string
}

interface FeaturesData {
  label?: string
  title: string
  subtitle: string
  items: Feature[]
}

const iconMap = {
  "trending-up": TrendingUp,
  bell: Bell,
  zap: Zap,
  settings: Settings,
  "bar-chart": BarChart3,
  mail: Mail,
}

const colorMap = {
  blue: "bg-blue-500/20 text-blue-400",
  cyan: "bg-cyan-500/20 text-cyan-400",
  purple: "bg-purple-500/20 text-purple-400",
  green: "bg-green-500/20 text-green-400",
  orange: "bg-orange-500/20 text-orange-400",
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const Icon = iconMap[feature.icon as keyof typeof iconMap] || TrendingUp
  const colorClass = colorMap[feature.iconColor as keyof typeof colorMap] || colorMap.blue

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-white leading-tight pt-1">{feature.title}</h3>
      </div>

      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export default function FeaturesSection({ features }: { features: FeaturesData }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-surface-start to-features-end">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {features.label && (
            <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">{features.label}</p>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{features.title}</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">{features.subtitle}</p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.items.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
