"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden transition-colors duration-1000">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1e3a8a]/10 dark:bg-blue-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#1e3a8a]/5 dark:bg-blue-500/15 rounded-full filter blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 border-2 border-[#1e3a8a]/20 dark:border-blue-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-5 py-2.5 text-sm font-medium rounded-full bg-blue-50 dark:bg-blue-500/10 text-[#1e3a8a] dark:text-blue-500 border-[#1e3a8a]/20 dark:border-blue-400/20 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white"
          >
            Let's Build the{" "}
            <span className="relative">
              <span className="relative z-10 text-[#1e3a8a] dark:text-blue-500 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text">
                Future Together
              </span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-[#1e3a8a]/20 dark:bg-blue-500/30 z-0"></span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Ready to transform your business with clean, scalable digital
            solutions? Connect with our expert team and let's discuss how we can
            bring your vision to life.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
