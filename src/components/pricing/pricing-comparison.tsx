"use client";

import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export function PricingComparison() {
  const featureSections = [
    {
      title: "Website Features",
      features: [
        {
          name: "Basic website template",
          community: true,
          wordpress: false,
          enterprise: false,
        },
        {
          name: "Professional WordPress site",
          community: false,
          wordpress: true,
          enterprise: false,
        },
        {
          name: "Custom design & branding",
          community: false,
          wordpress: true,
          enterprise: true,
        },
        {
          name: "Responsive & mobile-friendly",
          community: false,
          wordpress: true,
          enterprise: true,
        },
        {
          name: "SEO optimization",
          community: false,
          wordpress: true,
          enterprise: true,
        },
        {
          name: "Content management system",
          community: false,
          wordpress: true,
          enterprise: true,
        },
        {
          name: "Full-scale digital ecosystem",
          community: false,
          wordpress: false,
          enterprise: true,
        },
        {
          name: "Custom web applications",
          community: false,
          wordpress: false,
          enterprise: true,
        },
        {
          name: "Advanced integrations",
          community: false,
          wordpress: false,
          enterprise: true,
        },
      ],
    },
    {
      title: "Support & Services",
      features: [
        {
          name: "Community support",
          community: true,
          wordpress: false,
          enterprise: false,
        },
        {
          name: "Dedicated support team",
          community: false,
          wordpress: false,
          enterprise: true,
        },
        {
          name: "Ongoing maintenance",
          community: false,
          wordpress: false,
          enterprise: true,
        },
        {
          name: "Documentation access",
          community: true,
          wordpress: true,
          enterprise: true,
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-1000">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black dark:text-white transition-colors duration-500">
              Compare{" "}
              <span className="text-[#1e3a8a] dark:text-blue-500">Plans</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-500">
              See what&aposs included in each plan to make the best choice for
              your business.
            </p>
          </div>

          <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm animate-scale-in transition-colors duration-500">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  {/* Header */}
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left p-4 font-semibold text-black dark:text-white transition-colors duration-300">
                        Feature
                      </th>
                      <th className="text-center p-4 font-semibold text-black dark:text-white transition-colors duration-300">
                        Community
                      </th>
                      <th className="text-center p-4 font-semibold text-black dark:text-white bg-[#1e3a8a]/5 dark:bg-blue-400/5 transition-colors duration-300">
                        WordPress Solution
                      </th>
                      <th className="text-center p-4 font-semibold text-black dark:text-white transition-colors duration-300">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureSections.map((section, sectionIndex) => (
                      <React.Fragment key={sectionIndex}>
                        {/* Section Header Row */}
                        <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-600">
                          <td
                            colSpan={4}
                            className="p-4 font-semibold text-black dark:text-white transition-colors duration-300"
                          >
                            {section.title}
                          </td>
                        </tr>
                        {/* Feature Rows */}
                        {section.features.map((feature, featureIndex) => (
                          <tr
                            key={`${sectionIndex}-${featureIndex}`}
                            className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/70 transition-colors duration-300"
                          >
                            <td className="px-4 py-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                              {feature.name}
                            </td>
                            <td className="px-4 py-2 text-center">
                              {feature.community ? (
                                <Check className="w-5 h-5 text-[#1e3a8a] dark:text-blue-600 mx-auto transition-colors duration-300" />
                              ) : (
                                <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto transition-colors duration-300" />
                              )}
                            </td>
                            <td className="px-4 py-2 text-center bg-[#1e3a8a]/5 dark:bg-blue-400/5 transition-colors duration-300">
                              {feature.wordpress ? (
                                <Check className="w-5 h-5 text-[#1e3a8a] dark:text-blue-500 mx-auto transition-colors duration-300" />
                              ) : (
                                <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto transition-colors duration-300" />
                              )}
                            </td>
                            <td className="px-4 py-2 text-center">
                              {feature.enterprise ? (
                                <Check className="w-5 h-5 text-[#1e3a8a] dark:text-blue-600 mx-auto transition-colors duration-300" />
                              ) : (
                                <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto transition-colors duration-300" />
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
