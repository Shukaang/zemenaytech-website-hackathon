"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messageLength, setMessageLength] = useState(0);
  const maxLength = 500;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "message") {
      setMessageLength(value.length);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="sm:py-20 md:py-10 lg:py-10 bg-white dark:bg-gray-900 transition-colors duration-1000">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-black dark:text-white mb-4 transition-colors duration-500">
                  Send us a message
                </h2>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-500">
                  Fill out the form below and we&aposll get back to you within
                  24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black dark:text-white mb-2 transition-colors duration-300">
                      First Name *
                    </label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      required
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black dark:text-white mb-2 transition-colors duration-300">
                      Last Name *
                    </label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      required
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2 transition-colors duration-300">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2 transition-colors duration-300">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What&aposs this about?"
                    required
                    className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2 transition-colors duration-300">
                    Message * (Max {maxLength} characters)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    required
                    maxLength={maxLength}
                    rows={6}
                    className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]/20 transition-all duration-300 resize-none"
                  />
                  <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {messageLength}/{maxLength}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 dark:bg-blue-700 dark:hover:bg-blue-800 text-white group transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in delay-200">
              <Card className="bg-[#1e3a8a] dark:bg-blue-900 text-white border-none shadow-2xl h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

                  <div className="space-y-8">
                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                        <p className="text-blue-100 mb-1">
                          info@zemenaytech.com
                        </p>
                        <p className="text-blue-200 text-sm">
                          We&aposll respond within 24 hours
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                        <p className="text-blue-100 mb-1">+251 911 123 456</p>
                        <p className="text-blue-200 text-sm">
                          Mon-Fri, 9AM-6PM EAT
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Visit Us</h4>
                        <p className="text-blue-100 mb-1">
                          Addis Ababa, Ethiopia
                        </p>
                        <p className="text-blue-200 text-sm">
                          Bole Sub City, Woreda 03
                        </p>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          Business Hours
                        </h4>
                        <div className="space-y-1 text-blue-100 text-sm">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 10:00 AM - 4:00 PM</p>
                          <p className="text-blue-200">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
