"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  GraduationCap,
  Code,
  Smartphone,
  Database,
  Gamepad2,
  ChevronDown,
  ChevronUp,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function PortfolioShowcase() {
  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [key: number]: boolean;
  }>({});
  const [expandedTechnologies, setExpandedTechnologies] = useState<{
    [key: number]: boolean;
  }>({});
  const [expandedFeatures, setExpandedFeatures] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleDescription = (index: number) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleTechnologies = (index: number) => {
    setExpandedTechnologies((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleFeatures = (index: number) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const portfolioProjects = [
    {
      title: "Chewata Awaqi",
      category: "Gaming Platform",
      description:
        "A cutting-edge gaming service platform that connects companies with professional gaming services for events and corporate entertainment. Built with Next.js for optimal performance and user experience.",
      longDescription:
        "This comprehensive gaming platform revolutionizes how companies access professional gaming services. From corporate tournaments to entertainment events, Chewata Awaqi provides a seamless connection between businesses and gaming professionals, featuring real-time booking, event management, and performance analytics.",
      image: "/cahero.jpg",
      mockupImage: "/cahero.jpg",
      technologies: [
        { name: "Next.js & React", icon: Code },
        { name: "API Development", icon: Database },
        { name: "Database Architecture", icon: Database },
        { name: "Gaming Integration", icon: Gamepad2 },
      ],
      features: [
        "Real-time booking system",
        "Event management dashboard",
        "Professional gamer profiles",
        "Payment integration",
        "Performance analytics",
        "Mobile-responsive design",
      ],
      liveUrl: "#",
      caseStudyUrl: "#",
      status: "Live",
    },
    {
      title: "Free Developer Training",
      category: "Education & Training",
      description:
        "Empowering the next generation of developers through comprehensive, hands-on training programs. We offer free courses in frontend, backend, and mobile development to students passionate about technology.",
      longDescription:
        "Our flagship educational initiative providing world-class developer training completely free for Ethiopian students. The platform features interactive coding challenges, project-based learning, mentorship programs, and career placement assistance, helping bridge the tech skills gap in Ethiopia.",
      image: "/gaming.jpg",
      mockupImage: "/gaming.jpg",
      technologies: [
        { name: "Frontend Development", icon: Code },
        { name: "Backend Development", icon: Database },
        { name: "Mobile Development", icon: Smartphone },
        { name: "100% Free for Students", icon: GraduationCap },
      ],
      features: [
        "Interactive coding challenges",
        "Project-based curriculum",
        "1-on-1 mentorship",
        "Career placement assistance",
        "Certificate programs",
        "Community support",
      ],
      liveUrl: "#",
      caseStudyUrl: "#",
      status: "Active",
    },
    {
      title: "Berhanu Integrated Farm",
      category: "E-commerce Development",
      description:
        "A comprehensive e-commerce platform for a premium agricultural business featuring custom product catalogs, online ordering system, and farm-to-table delivery services with integrated inventory management.",
      longDescription:
        "This sophisticated e-commerce solution transforms traditional farming business into a modern digital marketplace. Features include real-time inventory tracking, seasonal product management, delivery route optimization, and customer relationship management, connecting Ethiopian farmers directly with consumers.",
      image: "/bif.jpg",
      mockupImage: "/bif.jpg",
      technologies: [
        { name: "WordPress & Elementor Pro", icon: Code },
        { name: "Custom Design & Branding", icon: Code },
        { name: "E-commerce Integration", icon: Database },
        { name: "Inventory Management", icon: Database },
      ],
      features: [
        "Custom product catalogs",
        "Real-time inventory tracking",
        "Delivery management",
        "Customer portal",
        "Payment gateway integration",
        "Analytics dashboard",
      ],
      liveUrl: "#",
      caseStudyUrl: "#",
      status: "Live",
    },
  ];

  return (
    <section className="pt-20 pb-10 bg-gray-50 dark:bg-slate-800 transition-colors duration-1000">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <Badge
            variant="outline"
            className="mb-6 px-6 py-3 text-sm font-medium rounded-full text-[#1e3a8a] dark:text-blue-500 bg-blue-50 dark:bg-blue-800/5"
          >
            <Rocket /> Our Work
          </Badge>
          <h2 className="text-4xl font-archiv sm:text-5xl lg:text-6xl font-bold mb-8 text-black dark:text-white transition-colors duration-500">
            Featured{" "}
            <span className="text-[#1e3a8a] dark:text-blue-500">Projects</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-500">
            Discover our most impactful projects that showcase our expertise in
            delivering innovative, scalable solutions across different
            industries in Ethiopia and beyond.
          </p>
        </div>

        {/* Portfolio Projects */}
        <div className="space-y-32 max-w-7xl mx-auto">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-fade-in ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Project Image/Mockup */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative group">
                  {/* Background Decoration */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#1e3a8a]/20 to-[#1e3a8a]/5 dark:from-blue-400/20 dark:to-blue-400/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>

                  {/* Main Image Container */}
                  <div className="relative bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-gray-200 dark:border-gray-700">
                    {/* Browser Chrome */}
                    <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1 text-xs text-gray-500 dark:text-gray-400">
                        {project.title.toLowerCase().replace(/\s+/g, "")}.com
                      </div>
                    </div>

                    {/* Project Screenshot */}
                    <div className="relative h-80 lg:h-96 overflow-hidden rounded-xl">
                      <Image
                        src={project.mockupImage || "/placeholder.svg"}
                        alt={`${project.title} Screenshot`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-[#1e3a8a]/0 dark:bg-blue-400/0 group-hover:bg-[#1e3a8a]/10 dark:group-hover:bg-blue-400/10 transition-colors duration-500 flex items-center justify-center">
                        <Button
                          size="lg"
                          className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 bg-white dark:bg-gray-900 text-[#1e3a8a] dark:text-blue-400 hover:bg-[#1e3a8a] dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 shadow-2xl"
                        >
                          <ExternalLink className="mr-2 h-5 w-5" />
                          View Live Site
                        </Button>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute -top-2 -right-2">
                      <Badge className="bg-green-500 text-white shadow-lg animate-pulse">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div
                className={`space-y-8 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                {/* Category Badge */}
                <div className="animate-slide-in-left delay-200">
                  <Badge
                    variant="outline"
                    className="mb-4 px-4 py-2 text-sm font-medium rounded-full text-[#1e3a8a] dark:text-blue-500 bg-blue-50 dark:bg-blue-800/5"
                  >
                    {project.category}
                  </Badge>
                </div>

                {/* Project Title */}
                <div className="animate-slide-in-left delay-300">
                  <h3 className="text-3xl font-archiv lg:text-4xl font-bold text-black dark:text-white mb-4 transition-colors duration-500">
                    {project.title}
                  </h3>

                  <div className="sm:hidden">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-500">
                      {project.description}
                    </p>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedDescriptions[index]
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 transition-colors duration-500">
                        {project.longDescription}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleDescription(index)}
                      className="flex items-center space-x-2 text-[#1e3a8a] dark:text-blue-400 hover:text-[#1e3a8a]/80 dark:hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                    >
                      <span>
                        {expandedDescriptions[index] ? "Hide" : "See more"}
                      </span>
                      {expandedDescriptions[index] ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div className="hidden sm:block">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-500">
                      {project.description}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">
                      {project.longDescription}
                    </p>
                  </div>
                </div>

                <div className="animate-slide-in-left delay-400">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-archiv font-semibold text-black dark:text-white transition-colors duration-300">
                      Technologies
                    </h4>
                    <button
                      onClick={() => toggleTechnologies(index)}
                      className="sm:hidden flex items-center space-x-1 text-[#1e3a8a] dark:text-blue-500 hover:text-[#1e3a8a]/80 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <span className="text-sm font-medium">
                        {expandedTechnologies[index] ? "Hide" : "Show"}
                      </span>
                      {expandedTechnologies[index] ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div
                    className={`sm:hidden overflow-hidden transition-all duration-500 ${
                      expandedTechnologies[index]
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center space-x-3 p-3 bg-white dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 hover:border-[#1e3a8a] dark:hover:border-blue-600 transition-all duration-300 group/tech"
                        >
                          <div className="w-8 h-8 bg-[#1e3a8a]/10 dark:bg-blue-400/10 rounded-lg flex items-center justify-center group-hover/tech:bg-[#1e3a8a]/20 dark:group-hover/tech:bg-blue-400/20 transition-colors duration-300">
                            <tech.icon className="w-4 h-4 text-[#1e3a8a] dark:text-blue-500" />
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="hidden sm:block">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-[#1e3a8a] dark:hover:border-blue-600 transition-all duration-300 group/tech"
                        >
                          <div className="w-8 h-8 bg-[#1e3a8a]/10 dark:bg-blue-400/10 rounded-lg flex items-center justify-center group-hover/tech:bg-[#1e3a8a]/20 dark:group-hover/tech:bg-blue-400/20 transition-colors duration-300">
                            <tech.icon className="w-4 h-4 text-[#1e3a8a] dark:text-blue-500" />
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="animate-slide-in-left delay-500">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-archiv font-semibold text-black dark:text-white transition-colors duration-300">
                      Key Features
                    </h4>
                    <button
                      onClick={() => toggleFeatures(index)}
                      className="sm:hidden flex items-center space-x-1 text-[#1e3a8a] dark:text-blue-500 hover:text-[#1e3a8a]/80 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <span className="text-sm font-medium">
                        {expandedFeatures[index] ? "Hide" : "Show"}
                      </span>
                      {expandedFeatures[index] ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div
                    className={`sm:hidden overflow-hidden transition-all duration-500 ${
                      expandedFeatures[index]
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 gap-3 mb-8">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 transition-colors duration-300 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-[#1e3a8a] dark:bg-blue-600 rounded-full flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="hidden sm:block">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-[#1e3a8a] dark:bg-blue-600 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left delay-600">
                  <Button
                    size="lg"
                    className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 dark:bg-blue-700 dark:hover:bg-blue-800 text-white group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Read Case Study
                    <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#1e3a8a] dark:border-blue-400 text-[#1e3a8a] dark:text-blue-400 hover:bg-[#1e3a8a] dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 bg-transparent transition-all duration-300 hover:scale-105"
                  >
                    View Live Site →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-24 animate-fade-in">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#1e3a8a]/10 dark:bg-blue-500/10 rounded-full filter blur-3xl animate-float"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#1e3a8a]/5 dark:bg-blue-500/15 rounded-full filter blur-3xl animate-float-delay"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1e3a8a]/5 dark:bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#1e3a8a]/5 dark:bg-blue-500/10 rounded-full blur-xl"></div>

              <div className="px-8 py-12 sm:p-12 lg:p-16 text-center">
                {/* Heading with gradient accent */}
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Ready to Start Your{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">Project?</span>
                    <span className="absolute bottom-0 left-0 w-full h-3 bg-[#1e3a8a]/20 dark:bg-blue-500/30 z-0"></span>
                  </span>
                </h3>

                {/* Subheading */}
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Let's create something amazing together. From concept to
                  launch, we'll be your trusted technology partner every step of
                  the way.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="relative overflow-hidden group bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span className="relative z-10 flex items-center">
                      Start Your Project
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-300 dark:border-blue-600 hover:border-[#1e3a8a] text-gray-700 dark:text-gray-300 hover:text-[#1e3a8a] dark:hover:text-gray-400 px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    View Our Portfolio
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
