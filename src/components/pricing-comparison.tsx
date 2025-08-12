"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export function PricingComparison() {
  const features = [
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
      enterprise: false,
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
    {
      name: "Community support",
      community: true,
      wordpress: false,
      enterprise: false,
    },
    {
      name: "Email support",
      community: false,
      wordpress: true,
      enterprise: false,
    },
    {
      name: "Priority support",
      community: false,
      wordpress: false,
      enterprise: true,
    },
    {
      name: "24/7 phone & email support",
      community: false,
      wordpress: false,
      enterprise: true,
    },
    {
      name: "1 month maintenance",
      community: false,
      wordpress: false,
      enterprise: false,
    },
    {
      name: "3 months maintenance",
      community: false,
      wordpress: true,
      enterprise: false,
    },
    {
      name: "6 months maintenance",
      community: false,
      wordpress: false,
      enterprise: true,
    },
    {
      name: "Training session",
      community: false,
      wordpress: true,
      enterprise: false,
    },
    {
      name: "Comprehensive training",
      community: false,
      wordpress: false,
      enterprise: true,
    },
    {
      name: "Performance reports",
      community: false,
      wordpress: false,
      enterprise: true,
    },
    {
      name: "Dedicated project manager",
      community: false,
      wordpress: false,
      enterprise: true,
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
              See what's included in each plan to make the best choice for your
              business.
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
                    {features.map((feature, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                      >
                        <td className="p-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                          {feature.name}
                        </td>
                        <td className="p-4 text-center">
                          {feature.community ? (
                            <Check className="w-5 h-5 text-green-600 dark:text-green-400 mx-auto transition-colors duration-300" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto transition-colors duration-300" />
                          )}
                        </td>
                        <td className="p-4 text-center bg-[#1e3a8a]/5 dark:bg-blue-400/5 transition-colors duration-300">
                          {feature.wordpress ? (
                            <Check className="w-5 h-5 text-[#1e3a8a] dark:text-blue-400 mx-auto transition-colors duration-300" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto transition-colors duration-300" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {feature.enterprise ? (
                            <Check className="w-5 h-5 text-green-600 dark:text-green-400 mx-auto transition-colors duration-300" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto transition-colors duration-300" />
                          )}
                        </td>
                      </tr>
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
