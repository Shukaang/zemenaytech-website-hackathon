"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight, Building, Calendar, Code2, Users } from "lucide-react";
import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative py-16 md:py-24 lg:py-8 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-1000">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/80 to-[#1e3a8a]/5 dark:from-gray-950/80 dark:to-[#1e3a8a]/10"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#1e3a8a]/5 dark:bg-blue-400/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1e3a8a]/10 dark:bg-blue-400/15 rounded-full filter blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-[#1e3a8a]/20 dark:border-blue-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge
                  variant="outline"
                  className="mb-6 px-5 py-2.5 text-sm font-medium rounded-full bg-[#1e3a8a]/10 dark:bg-blue-500/10 text-[#1e3a8a] dark:text-blue-500 border-[#1e3a8a]/20 dark:border-blue-400/20"
                >
                  <FontAwesomeIcon icon={faStar} className="mr-2" />
                  Pioneering Digital Excellence
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
                  <span className="relative z-10">Redefining</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-[#1e3a8a]/20 dark:bg-blue-500/30 z-0"></span>
                </span>{" "}
                <span className="text-[#1e3a8a] dark:text-blue-500 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text">
                  Ethiopian Technology
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                From our humble beginnings in Addis Ababa to becoming Ethiopia's
                most trusted digital transformation partner, we've been crafting
                innovative solutions that drive real business impact since 2019.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 dark:bg-blue-700 dark:hover:bg-blue-800 text-white group px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  Explore Our Journey
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 dark:border-gray-700 hover:border-[#1e3a8a] dark:hover:border-blue-600 text-gray-700 dark:text-gray-300 hover:text-[#1e3a8a] dark:hover:text-blue-600 px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  Meet The Team
                </Button>
              </motion.div>
            </div>

            {/* Stats Grid - Modern Card Layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="lg:w-1/2 grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: <Calendar className="w-8 h-8" />,
                  value: "2019",
                  label: "Founded",
                  delay: 0,
                },
                {
                  icon: <Code2 className="w-8 h-8" />,
                  value: "200+",
                  label: "Projects completed",
                  delay: 0.1,
                },
                {
                  icon: <Building className="w-8 h-8" />,
                  value: "6+",
                  label: "Industries",
                  delay: 0.2,
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  value: "15+",
                  label: "Team Members",
                  delay: 0.3,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + stat.delay }}
                  className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl dark:hover:shadow-white/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 mb-4 bg-[#1e3a8a]/10 dark:bg-blue-500/10 rounded-xl flex items-center justify-center text-[#1e3a8a] dark:text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#1e3a8a] dark:text-blue-500 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
