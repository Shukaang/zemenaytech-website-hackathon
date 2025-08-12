"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow } from "lucide-react";
import { motion } from "framer-motion";

export function ServicesHero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative py-10 md:py-24 lg:py-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden transition-colors duration-1000">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1e3a8a]/10 dark:bg-blue-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#1e3a8a]/5 dark:bg-blue-500/15 rounded-full filter blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 border-2 border-[#1e3a8a]/20 dark:border-blue-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-5 py-2.5 text-sm font-medium rounded-full bg-blue-50 dark:bg-blue-500/10 text-[#1e3a8a] dark:text-blue-500 border-[#1e3a8a]/20 dark:border-blue-400/20 shadow-sm"
            >
              <Workflow /> Digital Transformation Specialists
            </Badge>
          </motion.div>

          {/* Main Heading - More Impactful */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white"
          >
            <span className="relative">
              <span className="relative z-10">Our Expertise</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-[#1e3a8a]/20 dark:bg-blue-500/30 z-0"></span>
            </span>
            <span className="text-[#1e3a8a] dark:text-blue-500 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text">
              , Your Solutions.
            </span>
          </motion.h1>

          {/* Subheading - More Descriptive */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            We craft custom web applications, AI-powered tools, and scalable
            digital platforms that drive measurable results for your business.
          </motion.p>

          {/* CTA Buttons - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={scrollToServices}
              size="lg"
              className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 dark:bg-blue-700 dark:hover:bg-blue-800 text-white group px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Explore Our Services
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 dark:border-gray-700 hover:border-[#1e3a8a] dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-[#1e3a8a] dark:hover:text-gray-400 px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Get a Free Consultation
              </Button>
            </Link>
          </motion.div>

          {/* Tech Stack Preview - Optional */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-4 opacity-70"
          >
            {[
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "AI/ML",
              "Cloud",
              "DevOps",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-50 dark:bg-blue-800/5 rounded-full text-sm text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
