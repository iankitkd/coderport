"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Icon from "../Icon"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    if (!mounted) return;
    console.log(theme , "ct")
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full cursor-pointer hover:bg-secondary"
    >
      <Icon name={theme == "dark" ? "sun": "moon"} className="w-5 h-5" />
    </button>
  )
}
