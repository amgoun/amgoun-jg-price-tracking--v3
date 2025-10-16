"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import MobileNav from "@/components/mobile-nav";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Logo from "@/public/logo.svg";

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
      className={`fixed top-0 left-0 right-0 z-[99999] isolate transition-all duration-300 ${
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
            <Image src={Logo} alt="logo" height={31} width={35} />
            <p className="text-lg font-bold text-white">GJ Tracker</p>
          </div>

          {/* Navigation Links - centered */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 items-center">
            <button
              className="hover:hover-menu text-whiter transition-colors duration-200"
              onClick={() => smoothScrollTo("features")}
            >
              Features
            </button>
            <button
              className="hover:hover-menu text-whiter transition-colors duration-200"
              onClick={() => smoothScrollTo("pricing")}
            >
              Pricing
            </button>
            <button
              className="hover:hover-menu text-whiter transition-colors duration-200"
              onClick={() => smoothScrollTo("testimonials")}
            >
              Testimonial
            </button>
          </nav>

          {/* Right side: Login or MobileNav */}
          <div className="flex items-center gap-4">
            {/* Mobile burger menu - visible on mobile only */}
            <div className="md:hidden">
              <MobileNav />
            </div>

            {/* Login button - hidden on mobile */}

            <div className="hidden md:flex gap-2 items-center">
              <Button
                className="relative border-white/30 text-white hover:bg-white/10 bg-transparent rounded-full"
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
