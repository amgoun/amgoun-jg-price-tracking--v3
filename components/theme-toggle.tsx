"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        size="icon"
        className="relative bg-transparent rounded-full h-10 w-10"
      >
        <Moon className="h-[1.2rem] w-[1.2rem] text-[#242424]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      size="icon"
      className="relative bg-transparent rounded-full h-10 w-10"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-whiter" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-[#242424]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

