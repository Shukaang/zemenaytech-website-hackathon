"use client";

import Link from "next/link";

export function ContactMap() {
  return (
    <section
      id="contact-map"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4 transition-colors duration-500">
              Find Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-500">
              Located in the heart of Addis Ababa, we're easily accessible and
              ready to meet with you.
            </p>
          </div>

          <div className="animate-fade-in delay-200">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors duration-500">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.250048028078!2d38.75166331435289!3d9.036103793519959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853bfbb2b0c5%3A0x3a8aa2b1a3a15442!2sPiazza%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1683567133454!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              <div className="p-6 bg-gradient-to-r from-[#1e3a8a] to-blue-700 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">
                      ZemenayTech Office
                    </h3>
                    <p className="text-blue-100">Addis Ababa, Ethiopia</p>
                  </div>
                  <Link
                    href="https://maps.gstatic.com/maps-api-v3/embed/js/61/14/init_embed.js"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    View larger map
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
