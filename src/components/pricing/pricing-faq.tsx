"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export function PricingFAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's included in the Community plan?",
      answer:
        "The Community plan includes basic website templates, community support, documentation access, basic tutorials, and email support. It's perfect for personal projects and learning.",
    },
    {
      question: "What is the WordPress Solution plan?",
      answer:
        "Our WordPress Solution plan provides professional WordPress websites with custom design, responsive layouts, SEO optimization, content management systems, and 3 months of maintenance support.",
    },
    {
      question: "Who is the Enterprise plan for?",
      answer:
        "The Enterprise plan is designed for large organizations needing full-scale digital ecosystems, custom web applications, advanced integrations, dedicated project managers, and comprehensive support.",
    },
    {
      question: "How does pricing work for the WordPress and Enterprise plans?",
      answer:
        "WordPress and Enterprise plans have custom pricing based on your specific requirements, project scope, and timeline. Contact us for a personalized quote tailored to your needs.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes, you can upgrade your plan at any time. We'll work with you to ensure a smooth transition and apply any existing work to your new plan structure.",
    },
    {
      question: "Do I need to pay anything to try it out?",
      answer:
        "Our Community plan is completely free to get started. For paid plans, we offer free consultations to discuss your project and provide detailed proposals before any commitment.",
    },
    {
      question: "What's included in the maintenance package?",
      answer:
        "Maintenance includes regular security updates, performance optimization, backup and recovery, bug fixes, uptime monitoring, and technical support based on your plan level.",
    },
    {
      question: "Do you offer custom development services?",
      answer:
        "Yes, we specialize in custom development for unique business requirements. Our Enterprise plan includes custom web applications, integrations, and bespoke solutions.",
    },
    {
      question: "What's the difference between monthly and yearly billing?",
      answer:
        "Currently, our plans are project-based rather than subscription-based. WordPress and Enterprise plans are quoted based on project scope with flexible payment schedules.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary based on complexity. WordPress sites typically take 2-4 weeks, while Enterprise solutions can take 2-6 months. We provide detailed timelines during consultation.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, all paid plans include maintenance periods (3-6 months depending on plan). We also offer extended support contracts for long-term partnerships.",
    },
    {
      question: "Can you work with existing websites?",
      answer:
        "We can redesign, optimize, migrate, or enhance existing websites. We'll assess your current site and recommend the best approach for your goals.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-1000">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black dark:text-white transition-colors duration-500">
              Frequently Asked{" "}
              <span className="text-[#1e3a8a] dark:text-blue-500">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-500">
              Everything you need to know about our services and pricing
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-gray-200 dark:border-gray-600 hover:border-[#1e3a8a] dark:hover:border-blue-500 transition-all duration-300 bg-white dark:bg-gray-700 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-3 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300 group"
                  >
                    <h3 className="text-base font-semibold text-black dark:text-white pr-4 group-hover:text-[#1e3a8a] dark:group-hover:text-blue-400 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-[#1e3a8a] dark:text-blue-500 transform rotate-0 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#1e3a8a] dark:text-blue-500 transform rotate-0 transition-transform duration-300" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedFAQ === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-600">
                      <div className="pt-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 animate-fade-in delay-600">
            <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
              Still have questions?
            </p>
            <Link href="/contact">
              <button className="text-[#1e3a8a] dark:text-blue-500 cursor-pointer font-semibold hover:underline transition-all duration-300">
                Contact our team for personalized assistance
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
