"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface StatsData {
  title: string
  subtitle: string
  description: string
  additionalInfo: string
  metrics: Array<{
    value: string
    label: string
  }>
}

export default function StatsSection({ stats }: { stats: StatsData }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800 py-24 lg:py-32">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-yellow-400 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-orange-400 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3" />

      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">{stats.title}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-balance">{stats.subtitle}</h3>
            <p className="text-base lg:text-lg text-blue-100 mb-4 leading-relaxed">{stats.description}</p>
            <p className="text-sm lg:text-base text-blue-200 leading-relaxed">{stats.additionalInfo}</p>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <div className="space-y-6 lg:space-y-8">
            {stats.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-gray-100 relative overflow-hidden">
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2, type: "spring" }}
                      className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2 lg:mb-3"
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-base lg:text-lg text-gray-600 font-medium">{metric.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
