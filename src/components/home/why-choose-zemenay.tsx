"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Zap,
  Users,
  Award,
  Clock,
  Target,
  HeartHandshake,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Code2,
} from "lucide-react";

export function WhyChooseZemenay() {
  const reasons = [
    {
      icon: Shield,
      title: "Proven Track Record",
      description:
        "5+ years of delivering exceptional technology solutions with 95% client satisfaction rate",
      details:
        "Over 200 successful projects delivered across various industries including healthcare, finance, e-commerce, and education.",
      stats: "200+ Projects",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description:
        "We use the latest technologies and frameworks to build future-ready solutions",
      details:
        "React, Next.js, Node.js, React Native, Flutter, AWS, Azure, AI/ML integration, and modern DevOps practices.",
      stats: "Latest Tech Stack",
    },
    {
      icon: Users,
      title: "Expert Ethiopian Team",
      description:
        "Skilled local developers who understand both global standards and local market needs",
      details:
        "Our team combines international best practices with deep understanding of Ethiopian business culture and requirements.",
      stats: "15+ Experts",
    },
    {
      icon: Clock,
      title: "24/7 Support & Maintenance",
      description:
        "Round-the-clock technical support and proactive maintenance for your peace of mind",
      details:
        "Dedicated support team, regular updates, security patches, performance monitoring, and emergency response.",
      stats: "24/7 Available",
    },
    {
      icon: Target,
      title: "Results-Driven Approach",
      description:
        "We focus on delivering measurable business outcomes, not just technical solutions",
      details:
        "ROI-focused development, performance metrics tracking, user analytics, and continuous optimization strategies.",
      stats: "ROI Focused",
    },
    {
      icon: HeartHandshake,
      title: "Local Partnership",
      description:
        "Based in Addis Ababa, we&aposre your trusted local technology partner",
      details:
        "Easy communication, same timezone, understanding of local regulations, and commitment to Ethiopian business growth.",
      stats: "Local Partner",
    },
  ];

  const achievements = [
    { icon: Award, label: "Industry Recognition", value: "Top Tech Company" },
    { icon: Star, label: "Client Rating", value: "4.9/5 Stars" },
    { icon: Globe, label: "Global Standards", value: "ISO Certified" },
    { icon: Code2, label: "Code Quality", value: "99.9% Uptime" },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-1000 animate-on-scroll">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm font-medium rounded-full text-[#1e3a8a] dark:text-blue-500 bg-blue-50 dark:bg-blue-800/5"
          >
            Proudly Ethiopian
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black dark:text-white transition-colors duration-500">
            Why Choose{" "}
            <span className="text-[#1e3a8a] dark:text-blue-500">
              ZemenayTech
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-500">
            We&aposre not just another tech company. We&aposre your strategic
            partner in digital transformation, combining global expertise with
            local understanding to deliver exceptional results.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/70 hover:border-[#1e3a8a] dark:hover:border-blue-600 transition-all duration-500 animate-scale-in hover:shadow-lg dark:hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-50 dark:bg-gray-700/70 rounded-full flex items-center justify-center transition-colors duration-300">
                <achievement.icon className="w-6 h-6 text-[#1e3a8a] dark:text-blue-600" />
              </div>
              <div className="font-bold text-lg text-[#1e3a8a] dark:text-blue-500 transition-colors duration-300">
                {achievement.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group border-gray-200 dark:border-gray-700 hover:border-[#1e3a8a] dark:hover:border-blue-600 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl bg-white dark:bg-gray-800 animate-scale-in"
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <CardContent className="p-8">
                {/* Icon & Stats Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-50 dark:bg-gray-700/70 flex items-center justify-center group-hover:bg-[#1e3a8a]/5 dark:group-hover:bg-blue-400/10 transition-colors duration-300">
                    <reason.icon className="w-8 h-8 text-[#1e3a8a] dark:text-blue-600" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {reason.stats}
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-[#1e3a8a] dark:group-hover:text-blue-500 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">
                  {reason.description}
                </p>

                {/* Details */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                    {reason.details}
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

        {/* Bottom CTA Section */}
        <div className="text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-12 animate-fade-in delay-700 transition-colors duration-500">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-black dark:text-white transition-colors duration-300">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
              Join 200+ satisfied clients who chose ZemenayTech as their
              technology partner. Let&aposs discuss how we can help you achieve
              your digital goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 dark:bg-blue-700 dark:hover:bg-blue-800 text-white group transition-all duration-300 hover:scale-105"
                >
                  Start Your Project Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#1e3a8a] dark:border-blue-600 text-[#1e3a8a] dark:text-blue-500 hover:bg-[#1e3a8a] dark:hover:bg-blue-700 hover:text-white dark:hover:text-white bg-transparent transition-all duration-300 hover:scale-105"
                >
                  Schedule Free Consultation
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 text-[#1e3a8a] dark:text-blue-500" />
                <span>Free Initial Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 text-[#1e3a8a] dark:text-blue-500" />
                <span>No Hidden Costs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 text-[#1e3a8a] dark:text-blue-500" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
