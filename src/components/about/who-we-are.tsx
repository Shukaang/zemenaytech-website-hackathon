"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Shield,
  Zap,
  Globe,
  Users,
  Award,
  Flag,
  Lightbulb,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

export function WhoWeAre() {
  const values = [
    {
      icon: Heart,
      title: "Ethiopian Pride",
      description:
        "We&aposre proudly Ethiopian, understanding local business culture while delivering international quality standards.",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description:
        "Our clients trust us with their most critical business systems. We take this responsibility seriously.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to provide cutting-edge solutions that future-proof your business.",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description:
        "Local presence with global expertise. We follow international best practices in all our projects.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description:
        "We don&apost just build software; we build lasting partnerships that grow with your business success.",
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description:
        "Quality is not negotiable. Every line of code, every design element reflects our commitment to excellence.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-1000">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm font-medium rounded-full text-[#1e3a8a] dark:text-blue-500 bg-transparent"
          >
            <FontAwesomeIcon icon={faGem} /> Our Identity
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black dark:text-white transition-colors duration-500">
            Who{" "}
            <span className="text-[#1e3a8a] dark:text-blue-500">We Are</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-500">
            We are more than a technology company. We are Ethiopian innovators,
            problem solvers, and digital transformation partners committed to
            elevating local businesses to global standards.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <Card className="border-gray-200 dark:border-gray-700 hover:border-[#1e3a8a] dark:hover:border-blue-600 transition-all duration-500 bg-white dark:bg-gray-800 animate-scale-in">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#1e3a8a]/10 dark:bg-blue-400/10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Flag className="w-8 h-8 text-[#1e3a8a] dark:text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 transition-colors duration-300">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                To empower Ethiopian businesses with world-class technology
                solutions that drive growth, efficiency, and digital
                transformation while maintaining our local roots and
                understanding.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700 hover:border-[#1e3a8a] dark:hover:border-blue-600 transition-all duration-500 bg-white dark:bg-gray-800 animate-scale-in delay-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#1e3a8a]/10 dark:bg-blue-400/10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Lightbulb className="w-8 h-8 text-[#1e3a8a] dark:text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 transition-colors duration-300">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                To be Ethiopia&aposs leading technology partner, recognized for
                innovation, quality, and impact. We envision a digitally
                empowered Ethiopia where every business thrives through
                technology.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-gray-200 dark:border-gray-700 hover:border-[#1e3a8a] dark:hover:border-blue-600 transition-all duration-500 bg-white dark:bg-gray-800 group animate-scale-in hover:scale-101"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-[#1e3a8a]/10 dark:group-hover:bg-blue-400/10 transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-[#1e3a8a] dark:text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-black dark:text-white mb-3 group-hover:text-[#1e3a8a] dark:group-hover:text-blue-500 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
