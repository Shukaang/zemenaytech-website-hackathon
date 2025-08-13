"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isSystemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedTheme = localStorage.theme;

    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    localStorage.setItem("theme", newDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDark);
    setIsDark(newDark);
  };

  const handleServiceClick = (serviceId: string) => {
    if (pathname === "/services") {
      // Same page - scroll to service
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      // Different page - navigate with hash
      window.location.href = `/services#${serviceId}`;
    }
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors duration-300 dark:bg-slate-800/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-0.5 group">
              <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <Image
                  src="/our-logos/Zemenay Main.png"
                  alt="Zemenay Logo"
                  width={24}
                  height={24}
                  className="rounded-sm dark:hidden block w-10 h-10 sm:w-8 sm:h-8 transition-colors duration-300"
                />
                <Image
                  src="/our-logos/Zemenay Logo White.png"
                  alt="Zemenay Logo"
                  width={24}
                  height={24}
                  className="rounded-sm hidden dark:block w-10 h-10 sm:w-8 sm:h-8 transition-colors duration-300"
                />
              </div>
              <span className="font-bold text-xl text-foreground group-hover:scale-105 transition-all duration-300">
                <h3>Zemenay</h3>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`hover:text-[#1e3a8a] dark:hover:text-blue-600 transition-colors duration-300 font-medium ${
                pathname === "/"
                  ? "text-[#1e3a8a] dark:text-blue-600 font-bold"
                  : "text-foreground font-medium"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`hover:text-[#1e3a8a] dark:hover:text-blue-600 transition-colors duration-300 font-medium ${
                pathname === "/about"
                  ? "text-[#1e3a8a] dark:text-blue-600 font-bold"
                  : "text-foreground font-medium"
              }`}
            >
              About
            </Link>
            <div className="relative">
              <div className="flex items-center">
                <Link
                  href="/services"
                  className={`hover:text-[#1e3a8a] dark:hover:text-blue-600 transition-colors duration-300 font-medium ${
                    pathname === "/services"
                      ? "text-[#1e3a8a] dark:text-blue-600 font-bold"
                      : "text-foreground font-medium"
                  }`}
                >
                  Services
                </Link>
                <button
                  onClick={toggleServices}
                  className="ml-1 p-1 hover:text-blue-800 transition-colors duration-300"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-background border border-border shadow-lg animate-in slide-in-from-top-2 duration-200">
                  <div className="py-2">
                    <button
                      onClick={() => handleServiceClick("web-development")}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-800/10 hover:text-blue-800 transition-colors duration-200"
                    >
                      Web Development
                    </button>
                    <button
                      onClick={() =>
                        handleServiceClick("wordpress-development")
                      }
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-800/10 hover:text-blue-800 transition-colors duration-200"
                    >
                      WordPress Development
                    </button>
                    <button
                      onClick={() => handleServiceClick("seo-management")}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-800/10 hover:text-blue-800 transition-colors duration-200"
                    >
                      SEO Management
                    </button>
                    <button
                      onClick={() => handleServiceClick("website-maintenance")}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-800/10 hover:text-blue-800 transition-colors duration-200"
                    >
                      Website Maintenance
                    </button>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/pricing"
              className={`hover:text-[#1e3a8a] dark:hover:text-blue-600 transition-colors duration-300 font-medium ${
                pathname === "/pricing"
                  ? "text-[#1e3a8a] dark:text-blue-600 font-bold"
                  : "text-foreground font-medium"
              }`}
            >
              Pricing
            </Link>
          </nav>

          {/* CTA Button & Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-blue-800/10 transition-all duration-300 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-foreground hover:text-blue-800 transition-colors duration-300" />
              ) : (
                <Moon className="h-5 w-5 text-foreground hover:text-blue-800 transition-colors duration-300" />
              )}
            </button>

            <Link href="/contact">
              <Button className="bg-blue-800 hover:bg-blue-900 text-white transition-all duration-300 hover:scale-105">
                Contact us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button & Dark Mode Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-blue-800/10 transition-all duration-300 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-foreground hover:text-blue-800 transition-colors duration-300" />
              ) : (
                <Moon className="h-5 w-5 text-foreground hover:text-blue-800 transition-colors duration-300" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="relative p-2 rounded-lg hover:bg-blue-800/10 transition-all duration-300 hover:scale-110 group"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                  }`}
                >
                  <Menu className="h-6 w-6 text-foreground group-hover:text-[#1e3a8a]" />
                </div>
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                  }`}
                >
                  <X className="h-6 w-6 text-foreground group-hover:text-[#1e3a8a]" />
                </div>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-gradient-to-b from-background/95 to-background backdrop-blur-sm">
              <Link
                href="/"
                className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-blue-800/10 hover:text-blue-800 transition-all duration-300 hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-6 bg-blue-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span>Home</span>
                </div>
              </Link>

              <div className="px-4 py-2">
                <button
                  onClick={toggleServices}
                  className="inline-flex items-center justify-between w-full text-base font-medium transition-all duration-300 py-1"
                >
                  <div className="inline-flex items-center space-x-3 hover:text-blue-800">
                    <div className="w-1 h-6 bg-blue-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Link href="/services">Services</Link>
                  </div>
                  <p
                    onClick={toggleServices}
                    className="inline-flex ml-1 p-1 hover:text-blue-800 transition-colors duration-300"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </p>
                </button>
                {isServicesOpen && (
                  <div className="mt-3 pl-6 space-y-2 animate-in slide-in-from-top-1 duration-200">
                    <button
                      onClick={() => handleServiceClick("web-development")}
                      className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-blue-800 transition-all duration-200 hover:translate-x-1"
                    >
                      Web Development
                    </button>
                    <button
                      onClick={() =>
                        handleServiceClick("wordpress-development")
                      }
                      className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-blue-800 transition-all duration-200 hover:translate-x-1"
                    >
                      WordPress Development
                    </button>
                    <button
                      onClick={() => handleServiceClick("seo-management")}
                      className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-blue-800 transition-all duration-200 hover:translate-x-1"
                    >
                      SEO Management
                    </button>
                    <button
                      onClick={() => handleServiceClick("website-maintenance")}
                      className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-blue-800 transition-all duration-200 hover:translate-x-1"
                    >
                      Website Maintenance
                    </button>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-blue-800/10 hover:text-blue-800 transition-all duration-300 hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-6 bg-blue-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span>About</span>
                </div>
              </Link>

              <Link
                href="/pricing"
                className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-blue-800/10 hover:text-blue-800 transition-all duration-300 hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-6 bg-blue-800 rounded-full opacity-opacity duration-300"></div>
                  <span>Pricing</span>
                </div>
              </Link>

              <div className="px-4 pt-4 space-y-3 border-t border-border/30 mt-4">
                <Link href="/contact">
                  <Button
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white transition-all duration-300 hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
