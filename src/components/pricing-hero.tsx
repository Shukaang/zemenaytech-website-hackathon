"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CircleDollarSignIcon,
  DollarSign,
  DollarSignIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faDollar,
  faDollarSign,
  faFilterCircleDollar,
} from "@fortawesome/free-solid-svg-icons";

export function PricingHero() {
  return (
    <section className="relative py-16 md:py-24 lg:py-10 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-1000">
      {/* Background Elements - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/80 to-[#1e3a8a]/5 dark:from-gray-950/80 dark:to-[#1e3a8a]/10"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#1e3a8a]/5 dark:bg-blue-400/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1e3a8a]/10 dark:bg-blue-400/15 rounded-full filter blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-[#1e3a8a]/20 dark:border-blue-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-12">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Badge - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge
                  variant="outline"
                  className="mb-6 px-5 py-2.5 text-sm font-medium rounded-full bg-[#1e3a8a]/10 dark:bg-blue-500/10 text-[#1e3a8a] dark:text-blue-500 border-[#1e3a8a]/20 dark:border-blue-400/20"
                >
                  <FontAwesomeIcon
                    icon={faCircleDollarToSlot}
                    className="w-8 h-8 text-xl"
                  />{" "}
                  Pricing Plans
                </Badge>
              </motion.div>

              {/* Main Heading - Dramatic Typography */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white"
              >
                <span className="relative inline-block">
                  <span className="relative z-10">Simple,</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-[#1e3a8a]/20 dark:bg-blue-500/30 z-0"></span>
                </span>{" "}
                <span className="text-[#1e3a8a] dark:text-blue-500 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text">
                  Transparent
                </span>{" "}
                Pricing
              </motion.h1>

              {/* Subheading - More Impactful */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Choose the perfect plan for your digital transformation needs.
                All plans include our commitment to excellence.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 8s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
}
