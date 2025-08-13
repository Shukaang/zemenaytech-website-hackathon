"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ArrowRight,
  X,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
  const [showTermsDialog, setShowTermsDialog] = useState(false);

  const openPrivacyDialog = () => setShowPrivacyDialog(true);
  const closePrivacyDialog = () => setShowPrivacyDialog(false);
  const openTermsDialog = () => setShowTermsDialog(true);
  const closeTermsDialog = () => setShowTermsDialog(false);

  const serviceLinks = [
    { name: "Web Development", id: "web-development" },
    { name: "WordPress Development", id: "wordpress-development" },
    { name: "SEO Management", id: "seo-management" },
    { name: "Website Maintenance", id: "website-maintenance" },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white overflow-hidden transition-all duration-1000">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1e3a8a]/10 to-[#1e3a8a]/5"></div>
          <div className="absolute top-20 right-20 w-64 h-64 border border-[#1e3a8a]/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 border border-[#1e3a8a]/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#1e3a8a]/10 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Footer Content */}
          <div className="py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div className="space-y-6 sm:space-y-8 animate-fade-in">
                <div className="flex items-center space-x-0.5">
                  <Image
                    src="/Zemenay Main.png"
                    alt="Zemenay Logo"
                    width={24}
                    height={24}
                    className="rounded-sm dark:hidden block w-10 h-10 sm:w-8 sm:h-8 transition-colors duration-300"
                  />
                  <Image
                    src="/Zemenay Logo White.png"
                    alt="Zemenay Logo"
                    width={24}
                    height={24}
                    className="rounded-sm hidden dark:block w-10 h-10 sm:w-8 sm:h-8 transition-colors duration-300"
                  />
                  <div>
                    <h4 className="font-bold text-xl sm:text-2xl text-[#1e3a8a] dark:text-white">
                      ZemenayTech
                    </h4>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs sm:text-sm max-w-md">
                  Ethiopia's leading technology solutions provider. We transform
                  businesses with cutting-edge web development, mobile
                  applications, and AI-powered solutions that drive real growth.
                </p>

                {/* Social Links */}
                <div className="flex space-x-3 sm:space-x-4">
                  {[
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Instagram, href: "#", label: "Instagram" },
                    { icon: Github, href: "#", label: "GitHub" },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 rounded-xl flex items-center justify-center hover:bg-[#1e3a8a] dark:hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                    >
                      <social.icon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-400 dark:group-hover:text-white group-hover:text-white transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="space-y-6 sm:space-y-8 animate-fade-in delay-200">
                <h3 className="font-bold text-lg sm:text-xl text-black dark:text-white relative pb-2 sm:pb-3">
                  Services
                  <div className="absolute -bottom-0 left-0 w-10 sm:w-12 h-0.5 bg-[#1e3a8a] dark:bg-blue-600 rounded-full"></div>
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {serviceLinks.map((service, index) => (
                    <li key={index} className="inline-flex">
                      <a
                        href={`/services#${service.id}`}
                        className="text-gray-600 dark:text-gray-400 hover:text-[#1e3a8a] dark:hover:text-blue-600 transition-all duration-300 text-xs sm:text-sm flex items-center group"
                      >
                        <div className="w-1.5 h-1.5 bg-[#1e3a8a] dark:bg-blue-600 rounded-full mr-2 sm:mr-3 group-hover:scale-150 transition-transform"></div>
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="space-y-6 sm:space-y-8 animate-fade-in delay-400">
                <h3 className="font-bold text-lg sm:text-xl text-black dark:text-white relative pb-2 sm:pb-3">
                  Quick Links
                  <div className="absolute -bottom-0 left-0 w-10 sm:w-12 h-0.5 bg-[#1e3a8a] dark:bg-blue-600 rounded-full"></div>
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    { name: "About ZemenayTech", href: "/about" },
                    { name: "Our Projects", href: "/services" },
                    { name: "Prices", href: "/pricing" },
                    { name: "Contact Us", href: "/contact" },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="inline-flex text-gray-600 dark:text-gray-400 hover:text-[#1e3a8a] dark:hover:text-blue-600 transition-all duration-300 text-xs sm:text-sm items-center group"
                      >
                        <div className="w-1.5 h-1.5 bg-[#1e3a8a] dark:bg-blue-600 rounded-full mr-2 sm:mr-3 group-hover:scale-150 transition-transform"></div>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 sm:space-y-8 animate-fade-in delay-600">
                <h3 className="font-bold text-lg sm:text-xl text-black dark:text-white relative pb-2 sm:pb-3">
                  Contact Info
                  <div className="absolute -bottom-0 left-0 w-10 sm:w-12 h-0.5 bg-[#1e3a8a] dark:bg-blue-600 rounded-full"></div>
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      text: "info@zemenaytech.com",
                      href: "mailto:info@zemenaytech.com",
                    },
                    {
                      icon: Phone,
                      text: "+251 911 123456",
                      href: "tel:+251911123456",
                    },
                    {
                      icon: MapPin,
                      text: "Addis Ababa, Ethiopia",
                      href: "/contact#contact-map",
                    },
                  ].map((contact, index) => (
                    <Link
                      key={index}
                      href={contact.href}
                      className="inline-flex items-center space-x-3 group hover:text-[#1e3a8a] dark:hover:text-[#1e3a8a] transition-colors duration-300"
                    >
                      <div className="w-8 h-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-[#1e3a8a] dark:text-blue-600 group-hover:scale-110 transition-transform mt-1">
                        <contact.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm group-hover:text-[#1e3a8a] dark:group-hover:text-blue-600">
                        {contact.text}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in delay-800">
              <div className="space-y-6 sm:space-y-8">
                <h3 className="font-bold text-lg sm:text-xl text-black dark:text-white relative pb-2 sm:pb-3">
                  Stay Updated
                  <div className="absolute -bottom-0 left-0 w-10 sm:w-12 h-0.5 bg-blue-800 dark:bg-blue-600 rounded-full"></div>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Get the latest updates on technology trends, project
                  showcases, and exclusive insights from our team.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-300/50 dark:border-gray-700/50 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 rounded-xl pr-10 sm:pr-12 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]/20 h-10 sm:h-12 text-xs sm:text-sm"
                    />
                    <Button
                      size="sm"
                      className="absolute right-1 top-1 bottom-1 bg-blue-800 hover:bg-blue-900 text-white rounded-lg px-2 sm:px-3"
                    >
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>

                  <p className="text-[10px] xs:text-xs text-gray-500 dark:text-gray-400 mt-1 sm:mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 sm:py-8 border-t border-gray-300/50 dark:border-gray-700/50 animate-fade-in delay-1000">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} ZemenayTech. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
                <button
                  onClick={openPrivacyDialog}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#1e3a8a] dark:hover:text-[#1e3a8a] transition-colors duration-300 cursor-pointer"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={openTermsDialog}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#1e3a8a] dark:hover:text-[#1e3a8a] transition-colors duration-300 cursor-pointer"
                >
                  Terms of Service
                </button>
                <Link
                  href="/#"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#1e3a8a] dark:hover:text-[#1e3a8a] transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Dialog */}
      {showPrivacyDialog && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closePrivacyDialog}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden animate-scale-in border border-gray-200 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dialog Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-[#1e3a8a] dark:text-white">
                Privacy Policy
              </h2>
              <button
                onClick={closePrivacyDialog}
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
              >
                <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Dialog Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Effective Date: 8/12/2025
                </p>

                <h3 className="text-lg font-semibold text-[#1e3a8a] dark:text-white mb-4">
                  Information We Collect
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We collect information you provide directly to us, such as
                  when you create an account, use our services, or contact us.
                  This may include your name, email address, phone number, and
                  business information.
                </p>

                <h3 className="text-lg font-semibold text-[#1e3a8a] dark:text-white mb-4">
                  How We Use Your Information
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  We use the information we collect to:
                </p>
                <ul className="text-gray-600 dark:text-gray-300 mb-4 list-disc pl-6">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#1e3a8a] dark:text-white mb-4">
                  Information Sharing
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy or as required by Ethiopian law.
                </p>

                <h3 className="text-lg font-semibold text-[#1e3a8a] dark:text-white mb-4">
                  Data Security
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction.
                </p>

                <h3 className="text-lg font-semibold text-[#1e3a8a] dark:text-white mb-4">
                  Your Rights
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Under Ethiopian data protection laws, you have the right to
                  access, update, or delete your personal information. Contact
                  us to exercise these rights.
                </p>

                <h3 className="text-lg font-semibold text-[#1e3a8a] dark:text-white mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  If you have questions about this Privacy Policy, please
                  contact us at zemenaytechsolutions@gmail.com
                </p>

                <h3 className="text-lg font-semibold text-[#1e3a8a] dark:text-white mb-4">
                  Changes to This Policy
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Dialog */}
      {showTermsDialog && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeTermsDialog}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden animate-scale-in border border-gray-200 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dialog Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-[#1e3a8a] dark:text-white">
                Terms of Service
              </h2>
              <button
                onClick={closeTermsDialog}
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
              >
                <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Dialog Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Effective Date: 8/12/2025
                </p>

                <h3 className="text-lg font-semibold text-[#1e3a8a] dark:text-white mb-4">
                  Acceptance of Terms
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  By accessing and using Zemenay Tech Solutions services, you
                  accept and agree to be bound by the terms and provision of
                  this agreement.
                </p>

                <h3 className="text-lg font-semibold text-[#1e3a8a] dark:text-white mb-4">
                  Services Description
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Zemenay Tech Solutions provides technology consulting,
                  software development, and digital solutions. We reserve the
                  right to modify or discontinue services at any time.
                </p>

                <h3 className="text-lg font-semibold text-[#1e3a8a] dark:text-white mb-4">
                  User Responsibilities
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  You agree to:
                </p>
                <ul className="text-gray-600 dark:text-gray-300 mb-4 list-disc pl-6">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services in compliance with Ethiopian laws</li>
                  <li>Not engage in any unlawful or prohibited activities</li>
                  <li>Respect intellectual property rights</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#1e3a8a] dark:text-white mb-4">
                  Payment Terms
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Payment terms will be specified in individual service
                  agreements. All fees are in Ethiopian Birr (ETB) unless
                  otherwise specified. Late payments may incur additional
                  charges.
                </p>

                <h3 className="text-lg font-semibold text-[#1e3a8a] dark:text-white mb-4">
                  Intellectual Property
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  All content, features, and functionality of our services are
                  owned by Zemenay Tech Solutions and are protected by Ethiopian
                  and international copyright, trademark, and other intellectual
                  property laws.
                </p>

                <h3 className="text-lg font-semibold text-[#1e3a8a] dark:text-white mb-4">
                  Limitation of Liability
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To the maximum extent permitted by Ethiopian law, Zemenay Tech
                  Solutions shall not be liable for any indirect, incidental,
                  special, or consequential damages.
                </p>

                <h3 className="text-lg font-semibold text-[#1e3a8a] dark:text-white mb-4">
                  Governing Law
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  These terms shall be governed by and construed in accordance
                  with the laws of the Federal Democratic Republic of Ethiopia.
                </p>

                <h3 className="text-lg font-semibold text-[#1e3a8a] dark:text-white mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  For questions regarding these terms, please contact us at
                  zemenaytechsolutions@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
