"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Code,
  Joystick,
  TrendingUp,
  Sprout,
  Film,
  Heart,
  Star,
} from "lucide-react";
import Image from "next/image";

export function OurClients() {
  const industries = [
    {
      icon: Code,
      name: "Efuye Gela",
      description:
        "A creative ecosystem-builder in Ethiopia, connecting and supporting creators—helping with idea development, funding, markets, and building systems.",
      logo: "/client-images/client1-logo.png",
      projects: "25+ Projects",
      color: "text-[#1e3a8a] dark:text-blue-600",
    },
    {
      icon: Joystick,
      name: "Chewata Awaki",
      description:
        "Developed a cutting-edge gaming services platform to connect companies with professional gaming services for events and corporate entertainment.",
      logo: "/client-images/client2-logo.png",
      projects: "18+ Projects",
      color: "text-[#1e3a8a] dark:text-blue-600",
    },
    {
      icon: TrendingUp,
      name: "The Disruptors Den",
      description:
        "An entrepreneurial community in Ethiopia offering mentorship, networking, startup programs, and investor connections.",
      logo: "/client-images/client3-logo.png",
      projects: "35+ Projects",
      color: "text-[#1e3a8a] dark:text-blue-600",
    },
    {
      icon: Sprout,
      name: "BIF",
      description:
        "Created a comprehensive e-commerce platform for a premium spice farming business, featuring WordPress with Elementor Pro, product catalogs, and online ordering. ",
      logo: "/client-images/client4-logo.png",
      projects: "22+ Projects",
      color: "text-[#1e3a8a] dark:text-blue-600",
    },
    {
      icon: Film,
      name: "Hiyaw Animation",
      description:
        "Working with this team has been an absolute game-changer for our business. Their innovative solutions have streamlined our processes and boosted our productivity tenfold!",
      logo: "/client-images/client5-logo.png",
      projects: "15+ Projects",
      color: "text-[#1e3a8a] dark:text-blue-600",
    },
    {
      icon: Shield,
      name: "Government & Public",
      description:
        "Digital governance solutions, citizen services, and administrative systems",
      logo: "/client-images/client6-logo.png",
      projects: "12+ Projects",
      color: "text-[#1e3a8a] dark:text-blue-600",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-1000">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm font-medium rounded-full text-[#1e3a8a] dark:text-blue-500 bg-blue-50 dark:bg-blue-800/5"
          >
            <Star /> Trusted Across Industries
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black dark:text-white transition-colors duration-500">
            Industries We{" "}
            <span className="text-[#1e3a8a] dark:text-blue-500">Serve</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-500">
            ZemenayTech has successfully delivered technology solutions across
            diverse industries, helping businesses transform and grow in the
            digital age.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group border-gray-200 dark:border-gray-700 hover:border-[#1e3a8a] dark:hover:border-blue-600 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl bg-white dark:bg-gray-800 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                {/* Logo and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gray-50 dark:bg-gray-700/70 rounded-full flex items-center justify-center group-hover:bg-[#1e3a8a]/5 dark:group-hover:bg-blue-400/10 transition-colors duration-300">
                    <industry.icon
                      className={`w-8 h-8 ${industry.color} transition-colors duration-300`}
                    />
                  </div>
                  <div className="w-16 h-16 relative">
                    <Image
                      src={industry.logo || "/placeholder.svg"}
                      alt={`${industry.name} client logo`}
                      fill
                      className="object-contain opacity-60 dark:opacity-40 group-hover:opacity-100 dark:group-hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-[#1e3a8a] dark:group-hover:text-blue-500 transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {industry.projects}
                    </Badge>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {industry.description}
                  </p>
                </div>

                {/* Bottom Border Animation */}
                <div className="mt-6 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-[#1e3a8a] dark:bg-blue-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center animate-fade-in delay-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2 animate-scale-in delay-800">
              <div className="text-3xl font-bold text-[#1e3a8a] dark:text-blue-500 transition-colors duration-300">
                6+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Industries Served
              </div>
            </div>
            <div className="space-y-2 animate-scale-in delay-900">
              <div className="text-3xl font-bold text-[#1e3a8a] dark:text-blue-500 transition-colors duration-300">
                127+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Industry Projects
              </div>
            </div>
            <div className="space-y-2 animate-scale-in delay-1000">
              <div className="text-3xl font-bold text-[#1e3a8a] dark:text-blue-500 transition-colors duration-300">
                98%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Success Rate
              </div>
            </div>
            <div className="space-y-2 animate-scale-in delay-1100">
              <div className="text-3xl font-bold text-[#1e3a8a] dark:text-blue-500 transition-colors duration-300">
                5+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
