"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  footer: {
    brand: {
      name: string;
      logo: string;
    };
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      buttonText: string;
      disclaimer: string;
    };
    links: Array<{
      title: string;
      items: Array<{
        label: string;
        href: string;
      }>;
    }>;
    social: Array<{
      name: string;
      icon: string;
      href: string;
    }>;
    copyright: string;
  };
}

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
};

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className="bg-[var(--color-footer-bg)] text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo-dark.svg"
                alt={footer.brand.name}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">{footer.brand.name}</span>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-3">
                {footer.newsletter.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {footer.newsletter.description}
              </p>
              <div className="flex gap-2 mb-3 max-w-md">
                <Input
                  type="email"
                  placeholder={footer.newsletter.placeholder}
                  className="bg-white text-black border-0 flex-1"
                />
                <Button className="bg-[var(--color-bluewish)] hover:bg-[color-mix(in_oklab,_var(--color-bluewish)_/_80%,_black)] text-white px-6">
                  {footer.newsletter.buttonText}
                </Button>
              </div>
              <p className="text-gray-500 text-xs">
                {footer.newsletter.disclaimer.split("Privacy Policy")[0]}
                <Link href="#" className="underline hover:text-[var(--color-bluewish)]">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>

          {/* Links Columns */}
          {footer.links.map((column, index) => (
            <div key={index} className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                    className="text-gray-400 hover:text-[var(--color-bluewish)] transition-colors text-sm"
                    >
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
              const Icon = socialIcons[social.icon as keyof typeof socialIcons];
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-[var(--color-bluewish)] hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}