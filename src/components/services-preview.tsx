"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Smartphone,
  Cloud,
  TrendingUp,
  Settings,
  ArrowRight,
} from "lucide-react";

export function ServicesPreview() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud Platform.",
      features: ["Auto Scaling", "High Availability", "Cost Effective"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies including SEO, social media, and content marketing.",
      features: ["SEO Strategy", "Social Media", "Analytics"],
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description:
        "Strategic technology consulting to help businesses optimize their digital infrastructure and processes.",
      features: ["Strategy Planning", "Tech Audit", "Implementation"],
    },
  ];

  return (
    <section className="py-20 bg-background dark:bg-background transition-colors duration-1000">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground dark:text-foreground transition-colors duration-500">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto transition-colors duration-500">
            We provide comprehensive technology solutions to help your business
            grow and succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 animate-scale-in hover:scale-105 bg-card dark:bg-card border-border dark:border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary dark:text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground dark:text-card-foreground transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto font-medium text-primary hover:text-primary"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in delay-500">
          <Button
            size="lg"
            className="btn-hover bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
