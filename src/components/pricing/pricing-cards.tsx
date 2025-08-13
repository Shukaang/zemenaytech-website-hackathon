"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

export function PricingCards() {
  const plans = [
    {
      name: "Community",
      description: "Perfect for personal projects and learning",
      price: "Free",
      period: "",
      icon: Star,
      popular: false,
      features: [
        "Basic website template",
        "Community support",
        "Documentation access",
        "Basic tutorials",
        "Limited features",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
    },
    {
      name: "WordPress Solution",
      description: "Tailored WordPress sites for businesses",
      price: "Custom Pricing",
      period: "Based on project requirements",
      icon: Zap,
      popular: true,
      features: [
        "Professional WordPress site",
        "Custom design & branding",
        "Responsive & mobile-friendly",
        "SEO optimization",
        "Content management system",
      ],
      buttonText: "Start Professional",
      buttonVariant: "default" as const,
    },
    {
      name: "Enterprise",
      description: "Complete digital solutions for organizations",
      price: "Let&aposs Talk",
      period: "Custom quote based on requirements",
      icon: Crown,
      popular: false,
      features: [
        "Full-scale digital ecosystem",
        "Custom web applications",
        "Advanced integrations",
        "Dedicated support team",
        "Scalable infrastructure",
        "Ongoing maintenance",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-1000">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl animate-scale-in ${
                plan.popular
                  ? "border-[#1e3a8a] dark:border-blue-600 shadow-lg scale-105"
                  : "border-gray-200 dark:border-gray-600 hover:border-[#1e3a8a] dark:hover:border-blue-600"
              } bg-white dark:bg-slate-800`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#1e3a8a] dark:bg-blue-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardContent className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      plan.popular
                        ? "bg-[#1e3a8a] dark:bg-blue-600"
                        : "bg-gray-100 dark:bg-gray-300"
                    } transition-colors duration-300`}
                  >
                    <plan.icon
                      className={`w-8 h-8 ${
                        plan.popular
                          ? "text-white"
                          : "text-[#1e3a8a] dark:text-blue-600"
                      } transition-colors duration-300`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 transition-colors duration-300">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div
                      className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                        plan.popular
                          ? "text-[#1e3a8a] dark:text-blue-500"
                          : "text-black dark:text-white"
                      }`}
                    >
                      <h3>{plan.price}</h3>
                    </div>
                    {plan.period && (
                      <div className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                        {plan.period}
                      </div>
                    )}
                  </div>

                  <Button
                    className={`w-full transition-all duration-300 ${
                      plan.buttonVariant === "default"
                        ? "bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 dark:bg-blue-600 dark:hover:bg-blue-700 text-white"
                        : "border-[#1e3a8a] dark:border-blue-400 text-[#1e3a8a] dark:text-blue-400 hover:bg-[#1e3a8a] dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 bg-transparent"
                    }`}
                    variant={plan.buttonVariant}
                  >
                    {plan.buttonText}
                  </Button>
                </div>

                {/* Features */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-black dark:text-white mb-4 transition-colors duration-300">
                      What&aposs Included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-[#1e3a8a] dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0 transition-colors duration-300" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
