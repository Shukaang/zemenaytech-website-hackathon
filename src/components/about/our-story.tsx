"use client";

import { Clock } from "lucide-react";
import Image from "next/image";

export function OurStory() {
  return (
    <section className="py-5 px-5 bg-white dark:bg-gray-900 transition-colors duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            {/* Header */}
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-800/5 rounded-full text-[#1e3a8a] dark:text-blue-500 text-sm font-medium mb-4 transition-colors duration-300">
                <Clock className="w-4 h-4 mr-2" />
                Our Journey
              </div>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-6 transition-colors duration-300">
                Our Story
              </h2>
            </div>

            {/* Story Content */}
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              <p className="text-lg">
                Founded in 2019,{" "}
                <strong className="text-[#1e3a8a] dark:text-blue-500">
                  ZemenayTech
                </strong>{" "}
                emerged from a vision to revolutionize Ethiopia&aposs technology
                landscape. We recognized the need for a modern, reliable, and
                client-focused approach to software development in our rapidly
                growing digital economy.
              </p>
              <p>
                What began as a small team of passionate Ethiopian developers
                has evolved into one of the country&aposs most trusted
                technology solutions providers. Our deep understanding of local
                business needs, combined with international best practices, has
                enabled us to serve clients across diverse industries.
              </p>
              <p>
                Today, we pride ourselves on being more than just a software
                company. We are digital transformation partners, innovation
                catalysts, and trusted advisors who understand that every
                technology solution represents a significant step forward in our
                clients&apos business journey.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-[#1e3a8a]/10 dark:bg-blue-400/10 rounded-lg transition-colors duration-300">
                <div className="text-3xl font-bold text-[#1e3a8a] dark:text-blue-500 mb-2 transition-colors duration-300">
                  2019
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  Founded
                </div>
              </div>
              <div className="text-center p-4 bg-[#1e3a8a]/10 dark:bg-blue-400/10 rounded-lg transition-colors duration-300">
                <div className="text-3xl font-bold text-[#1e3a8a] dark:text-blue-500 mb-2 transition-colors duration-300">
                  200+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  Projects Delivered
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative group perspective">
            {/* Background gradient panel */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a]/80 dark:from-blue-600 dark:to-blue-800 rounded-2xl transform rotate-3 transition-transform duration-500 ease-out group-hover:rotate-6 group-hover:scale-105 group-hover:translate-y-[-2px]"></div>

            {/* Foreground card */}
            <div className="relative bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-2xl transition-all duration-500 ease-out transform group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:rotate-[1deg] group-hover:shadow-[0_20px_40px_rgba(30,58,138,0.4)]">
              <Image
                src="/community-image/community.jpg"
                alt="ZemenayTech Team"
                width={600}
                height={400}
                className="w-full h-full lg:h-96 object-cover rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
