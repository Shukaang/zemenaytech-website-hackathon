"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if dark mode is already enabled
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-14 h-8 bg-gray-200 rounded-full p-1">
        <div className="w-6 h-6 bg-white rounded-full"></div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-all duration-500 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group"
      aria-label="Toggle dark mode"
    >
      {/* Background gradient animation */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/70 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

      {/* Toggle circle */}
      <div
        className={`relative w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-lg transform transition-all duration-500 ease-in-out flex items-center justify-center ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {/* Sun icon */}
        <Sun
          className={`w-4 h-4 text-yellow-500 absolute transition-all duration-300 ${
            !isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-180 scale-0"
          }`}
        />

        {/* Moon icon */}
        <Moon
          className={`w-4 h-4 text-blue-400 absolute transition-all duration-300 ${
            isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-180 scale-0"
          }`}
        />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute w-1 h-1 bg-yellow-400 rounded-full transition-all duration-700 ${
            !isDark ? "opacity-100 animate-pulse" : "opacity-0"
          }`}
          style={{ top: "10%", left: "20%", animationDelay: "0s" }}
        ></div>
        <div
          className={`absolute w-1 h-1 bg-yellow-400 rounded-full transition-all duration-700 ${
            !isDark ? "opacity-100 animate-pulse" : "opacity-0"
          }`}
          style={{ top: "70%", left: "15%", animationDelay: "0.5s" }}
        ></div>
        <div
          className={`absolute w-1 h-1 bg-blue-300 rounded-full transition-all duration-700 ${
            isDark ? "opacity-100 animate-pulse" : "opacity-0"
          }`}
          style={{ top: "20%", right: "20%", animationDelay: "0.2s" }}
        ></div>
        <div
          className={`absolute w-1 h-1 bg-blue-300 rounded-full transition-all duration-700 ${
            isDark ? "opacity-100 animate-pulse" : "opacity-0"
          }`}
          style={{ top: "60%", right: "15%", animationDelay: "0.7s" }}
        ></div>
      </div>
    </button>
  );
}
