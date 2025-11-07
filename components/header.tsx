"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import MobileNav from "@/components/mobile-nav";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Logo from "@/public/logo.svg";
import LogoLight from "@/public/logo-light.svg";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[888] isolate transition-all duration-300 ${
        isScrolled ? "backdrop-blur-sm" : ""
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 py-5">
        <div className="relative flex items-center justify-between">
          {/* Logo - left */}
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image 
              src={mounted && theme === "light" ? LogoLight : Logo} 
              alt="logo" 
              height={31} 
              width={35} 
            />
            <p className="text-lg font-bold text-[#242424] dark:text-whiter">GJ Tracker</p>
          </div>

          {/* Navigation Links - centered */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 items-center">
            <button
              className="hover:hover-menu text-[#242424] dark:text-whiter transition-colors duration-200 font-medium"
              onClick={() => smoothScrollTo("features")}
            >
              Features
            </button>
            <button
              className="hover:hover-menu text-[#242424] dark:text-whiter transition-colors duration-200 font-medium"
              onClick={() => smoothScrollTo("pricing")}
            >
              Pricing
            </button>
            <button
              className="hover:hover-menu text-[#242424] dark:text-whiter transition-colors duration-200 font-medium"
              onClick={() => smoothScrollTo("testimonials")}
            >
              Testimonial
            </button>
          </nav>

          {/* Right side: Login or MobileNav */}
          <div className="flex items-center gap-4">
            {/* Mobile burger menu - visible on mobile only */}
            <div className="md:hidden z-[999]">
              <MobileNav />
            </div>

            {/* Desktop: Theme toggle and Login button - hidden on mobile */}
            <div className="hidden md:flex gap-2 items-center">
              <ThemeToggle />
              <Button
                className="relative border-black/20 hover:bg-black/5 bg-transparent dark:border-white/30 dark:hover:bg-white/10 rounded-full font-medium text-[#242424] dark:text-whiter"
                type="button"
                variant="outline"
                onClick={() => router.push("/sign-in")}
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
