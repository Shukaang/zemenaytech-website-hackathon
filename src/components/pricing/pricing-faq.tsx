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
        "The Community plan gives you access to a basic website template and community support. It's perfect for individuals or early-stage teams looking to get online quickly with minimal cost.",
    },
    {
      question: "What is the WordPress Solution plan?",
      answer:
        "Our WordPress Solution plan offers professionally designed WordPress websites tailored to your brand. It includes SEO optimization, responsive design, and a user-friendly CMS to manage your content with ease.",
    },
    {
      question: "Who is the Enterprise plan for?",
      answer:
        "The Enterprise plan is built for organizations needing custom web applications, full-scale digital ecosystems, and advanced integration. It includes dedicated support, ongoing maintenance, and complete customization.",
    },
    {
      question: "How does pricing work for the WordPress and Enterprise plans?",
      answer:
        "Pricing is custom for each client based on scope and requirements. We';ll walk you through a quick consultation to understand your needs and provide a fair quote.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes! You can start with the Community or WordPress plan and upgrade to Enterprise whenever your needs grow. We';ll ensure a smooth transition.",
    },
    {
      question: "Do I need to pay anything to try it out?",
      answer:
        "The Community plan is completely free to start. For WordPress or Enterprise, we offer a free consultation before any commitment.",
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
                    <h3 className="text-base font-semibold text-black dark:text-white pr-4 hover:underline hover:cursor-pointer group-hover:text-[#1e3a8a] dark:group-hover:text-blue-400 transition-colors duration-300">
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
