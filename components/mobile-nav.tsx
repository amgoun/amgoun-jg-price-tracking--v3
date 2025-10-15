"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { DialogTitle } from "./ui/dialog";
import Logo from "@/public/logo.svg"

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const menu = [
  {
    name: "Features",
    id: "features",
  },
  {
    name: "Pricing",
    id: "pricing",
  },
  {
    name: "Testimonial",
    id: "testimonials",
  },
 
];

const MobileNav = () => {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <Menu className=" flex size-5 text-whiter  md:hidden " />
      <DialogTitle></DialogTitle>
      </SheetTrigger>
      <SheetContent>
        <div className="mb-40 mt-32 flex items-center justify-center">
          <Link href="/">
            <Image
              src={Logo}
              height={60.53}
              width={47.35}
              alt="logo"
            />
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8 ">
          {menu.map((item, index) => (
            <button 
              key={index} 
              className="capitalize pb-2 hover:hover-menu text-whiter transition-colors duration-200"
              onClick={() => {
                if (item.id) {
                  smoothScrollTo(item.id);
                }
              }}
            >
              {item.name}
            </button>
          ))}
          <Button
                className="rounded-full px-6 bg-whiter text-blacker text-md hover:bg-white/70 transition-all"
                type="button"
                onClick={() => router.push("/sign-in")}
              >
                Get started
            </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
