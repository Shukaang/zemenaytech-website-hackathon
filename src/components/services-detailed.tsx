"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Code, Settings, Wrench } from "lucide-react";

export function ServicesDetailed() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      id: "web-development", //  ID for scroll targeting
      icon: Code,
      title: "Full Stack Website Development",
      subtitle:
        "Custom built websites from front to back - optimized for performance and user experience",
      overview:
        "We create full-stack web applications that drive business growth. Our development approach ensures clean code, optimal performance, and seamless user experiences from frontend to backend.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "Express",
      ],
      keyFeatures: [
        "Custom web application development",
        "Responsive design implementation",
        "Full-stack architecture",
        "Database design and optimization",
        "API development and integration",
      ],
    },
    {
      id: "wordpress-development", // ID for scroll targeting
      icon: Code,
      title: "WordPress Development with Elementor Pro",
      subtitle:
        "Professional WordPress websites designed with the flexibility of Elementor Pro",
      overview:
        "Build powerful WordPress websites with custom themes and advanced functionality. We leverage Elementor Pro for flexible design and seamless content management.",
      technologies: [
        "WordPress",
        "Elementor Pro",
        "PHP",
        "MySQL",
        "Custom Themes",
        "WooCommerce",
      ],
      keyFeatures: [
        "Custom WordPress theme development",
        "Elementor Pro customization",
        "Plugin development and integration",
        "E-commerce functionality",
        "SEO optimization",
      ],
    },
    {
      id: "seo-management", //  ID for scroll targeting
      icon: Settings,
      title: "SEO Management",
      subtitle:
        "Improve your website's organic search rankings that drive traffic and boost rankings",
      overview:
        "Comprehensive SEO strategies to improve your online visibility and drive organic traffic. We focus on technical SEO, content optimization, and sustainable ranking improvements.",
      technologies: [
        "Google Analytics",
        "Search Console",
        "SEMrush",
        "Technical SEO",
        "Content Strategy",
      ],
      keyFeatures: [
        "Technical SEO audits",
        "Keyword research and strategy",
        "On-page optimization",
        "Content marketing strategy",
        "Performance tracking and reporting",
      ],
    },
    {
      id: "website-maintenance", //  ID for scroll targeting
      icon: Wrench,
      title: "Website Maintenance",
      subtitle:
        "Keep your site secure, updated, and running smoothly with our comprehensive maintenance plans",
      overview:
        "Reliable ongoing maintenance to keep your website secure, fast, and up-to-date. We provide proactive monitoring, regular updates, and quick issue resolution.",
      technologies: [
        "Security Monitoring",
        "Backup Systems",
        "Performance Tools",
        "Update Management",
      ],
      keyFeatures: [
        "Regular security updates",
        "Performance optimization",
        "Backup and recovery",
        "Bug fixes and troubleshooting",
        "Uptime monitoring",
      ],
    },
  ];

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const serviceIndex = services.findIndex((service) => service.id === hash);
      if (serviceIndex !== -1) {
        setExpandedService(serviceIndex);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 100);
      }
    }
  }, []);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section
      id="services-section"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black dark:text-white transition-colors duration-500">
              Our{" "}
              <span className="text-[#1e3a8a] dark:text-blue-500">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-500">
              Comprehensive digital solutions designed to elevate your business
              and drive success through clean, scalable technology.
            </p>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <Card
                key={index}
                id={service.id} //  ID for scroll targeting
                className="border-gray-200 dark:border-gray-700 hover:border-[#1e3a8a] dark:hover:border-blue-400 transition-all duration-500 bg-white dark:bg-gray-800 animate-scale-in hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  {/* Service Header */}
                  <button
                    onClick={() => toggleService(index)}
                    className="w-full px-6 py-3 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#1e3a8a]/10 dark:bg-blue-400/10 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <service.icon className="w-6 h-6 text-[#1e3a8a] dark:text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black dark:text-white transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    {expandedService === index ? (
                      <ChevronUp className="w-5 h-5 text-[#1e3a8a] dark:text-blue-400 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#1e3a8a] dark:text-blue-400 transition-transform duration-300" />
                    )}
                  </button>

                  {/* Expanded Content */}
                  {expandedService === index && (
                    <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700 animate-fade-in">
                      <div className="pt-6 space-y-6">
                        {/* Overview */}
                        <div>
                          <h4 className="font-semibold text-black dark:text-white mb-2 transition-colors duration-300">
                            Overview
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                            {service.overview}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-black dark:text-white mb-3 transition-colors duration-300">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="bg-[#1e3a8a]/10 dark:bg-blue-400/10 text-[#1e3a8a] dark:text-blue-400 hover:bg-[#1e3a8a]/20 dark:hover:bg-blue-400/20 transition-colors duration-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h4 className="font-semibold text-black dark:text-white mb-3 transition-colors duration-300">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {service.keyFeatures.map(
                              (feature, featureIndex) => (
                                <li
                                  key={featureIndex}
                                  className="flex items-center text-gray-600 dark:text-gray-300 transition-colors duration-300"
                                >
                                  <div className="w-1.5 h-1.5 bg-[#1e3a8a] dark:bg-blue-400 rounded-full mr-3"></div>
                                  {feature}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
