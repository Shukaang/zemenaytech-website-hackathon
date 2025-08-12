"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { faRocket, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight, Rocket, Star, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

// Floating stars component
function FloatingStars() {
  const [stars, setStars] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number }>
  >([]);
  const [shootingStars, setShootingStars] = useState<
    Array<{ id: number; delay: number }>
  >([]);

  useEffect(() => {
    // Generate floating stars
    const newStars = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
    }));
    setStars(newStars);

    // Generate shooting stars
    const newShootingStars = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10 + 5,
    }));
    setShootingStars(newShootingStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        >
          <div
            className="bg-blue-300 dark:bg-blue-400 rounded-full animate-float"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        </div>
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={shootingStar.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-shooting-star"
          style={{
            top: `${Math.random() * 50}%`,
            right: "100%",
            animationDelay: `${shootingStar.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.fonts.ready.then(() => setIsLoading(false));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 transition-all duration-1000">
      {/* Floating Stars Background */}
      <FloatingStars />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20 dark:from-blue-950/30 dark:via-transparent dark:to-purple-950/30"></div>

      <div className="container mx-auto px-4 py-1 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-left animate-fade-in">
            {/* Award Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 dark:border-blue-400/20 text-blue-300 dark:text-blue-400 text-sm font-medium mb-8 animate-scale-in backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2" />
              Award-Winning Digital Solutions
            </div>

            {/* Main Heading - EXACT Typography */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-slide-in-left">
              <span className="text-blue-400 dark:text-blue-500">
                Revolutionize
              </span>
              <br />
              <span className="text-white">Your Digital</span>
              <br />
              <span className="text-white">Experience</span>
            </h1>

            {/* Subheading - EXACT Content */}
            <p className="text-xl lg:text-2xl text-gray-300 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl animate-slide-in-left delay-200">
              At ZemenayTech, we craft{" "}
              <span className="text-blue-400 dark:text-blue-500 font-semibold">
                extraordinary digital experiences
              </span>{" "}
              that drive real business growth. Clean code, elegant design, and
              innovation that makes your competitors jealous.
            </p>

            {/* CTA Buttons - EXACT Layout */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-slide-in-left delay-400">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="cursor-pointer bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer border-2 border-gray-200 dark:border-blue-300/30 text-gray-200 hover:text-gray-300 dark:text-gray-300 hover:bg-blue-400/10 dark:hover:bg-blue-300/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm bg-transparent group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Stats Grid (EXACT Layout from second image) */}
          <div className="relative animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {/* Stat Card 1 */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 text-center hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-scale-in delay-500">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/20 dark:bg-blue-400/20 rounded-full flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-blue-400 dark:text-blue-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-gray-300 dark:text-gray-400 text-sm">
                  Projects Completed
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 text-center hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-scale-in delay-600 mt-8">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/20 dark:bg-blue-400/20 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-blue-400 dark:text-blue-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-300 dark:text-gray-400 text-sm">
                  Happy Clients
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 text-center hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-scale-in delay-700 -mt-4">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/20 dark:bg-blue-400/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-400 dark:text-blue-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">99%</div>
                <div className="text-gray-300 dark:text-gray-400 text-sm">
                  Client Satisfaction
                </div>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 text-center hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-scale-in delay-800 mt-4">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/20 dark:bg-blue-400/20 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-400 dark:text-blue-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 dark:text-gray-400 text-sm">
                  Support Available
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            {isLoading ? (
              <div className="absolute -top-4 -right-6 flex justify-center items-center h-1 w-1 bg-blue-600 animate-ping mx-auto mb-10" />
            ) : (
              <div className="absolute -top-6 -right-6 bg-blue-500 dark:bg-blue-600 text-white dark:text-blue-50 px-4 py-2 rounded-full text-sm font-medium animate-bounce shadow-2xl">
                <FontAwesomeIcon icon={faRocket} /> Ethiopian Excellence
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
