"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface FooterProps {
  footer: {
    brand: {
      name: string
      logo: string
    }
    newsletter: {
      title: string
      description: string
      placeholder: string
      buttonText: string
      disclaimer: string
    }
    links: Array<{
      title: string
      items: Array<{
        label: string
        href: string
      }>
    }>
    social: Array<{
      name: string
      icon: string
      href: string
    }>
    copyright: string
  }
}

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
}

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className="bg-black text-white border-t border-cyan-500/30">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>
              <span className="text-xl font-bold">{footer.brand.name}</span>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-3">{footer.newsletter.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{footer.newsletter.description}</p>
              <div className="flex gap-2 mb-3 max-w-md">
                <Input
                  type="email"
                  placeholder={footer.newsletter.placeholder}
                  className="bg-white text-black border-0 flex-1"
                />
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6">
                  {footer.newsletter.buttonText}
                </Button>
              </div>
              <p className="text-gray-500 text-xs">
                {footer.newsletter.disclaimer.split("Privacy Policy")[0]}
                <Link href="#" className="underline hover:text-cyan-500">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>

          {/* Links Columns */}
          {footer.links.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href} className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">{footer.copyright}</p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {footer.social.map((social, index) => {
              const Icon = socialIcons[social.icon as keyof typeof socialIcons]
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-cyan-500 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
