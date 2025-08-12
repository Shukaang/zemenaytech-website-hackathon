"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Binyam Masresha",
    role: "Co-founder at Hiyaw Animations",
    image: "/Binyam_Masresha.jpg",
    stars: 5,
    message:
      "Working with this team has been an absolute game-changer for our business. And Their innovative solutions have streamlined our processes and boosted our productivity tenfold!",
  },
  {
    name: "Dagmawi Bedilu",
    role: "CSO at Efuye Gela",
    image: "/Dagmawi_Bedilu.jpg",
    stars: 5,
    message:
      "I can't recommend their services enough. The level of expertise and dedication they bring to each project is unparalleled. Our ROI has skyrocketed since partnering with them.",
  },
  {
    name: "Kirubel Samuel",
    role: "Co-founder at Chewataawaqi",
    image: "/Kirubel_Samuel.jpg",
    stars: 5,
    message:
      "The customer support is top-notch. They're always available to answer questions and provide guidance. It's refreshing to work with a company that truly cares about its clients' success.",
  },
  {
    name: "Shueb Ahmed",
    role: "Founder at TechAddis",
    image: "/my-profilePic.jpg",
    stars: 4,
    message:
      "I can't recommend their services enough. The level of expertise and dedication they bring to each project is unparalleled. Our ROI has skyrocketed since partnering with them.",
  },
];

export default function MainTestimonial() {
  return (
    <section className="pt-20 bg-white dark:bg-slate-900 transition-colors duration-1000 animate-on-scroll animate-pc-only animate-fade-in delay-200">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16 animate-on-scroll animate-mobile-only animate-fade-in delay-200">
          <div className="inline-flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-800/5 rounded-full text-[#1e3a8a] dark:text-blue-500 text-sm font-medium mb-4 transition-colors duration-500">
            <FontAwesomeIcon icon={faStar} className="w-4 h-4 mr-2" />
            Client Stories
          </div>
          <h2 className="text-4xl font-bold text-black dark:text-white mb-6 transition-colors duration-500">
            What Our{" "}
            <span className="text-[#1e3a8a] dark:text-blue-500 transition-colors duration-300">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-500">
            Don't just take our word for it. Here's what industry professionals
            have to say about our services and solutions.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-800/20 p-8 h-full border border-gray-100 dark:border-gray-800 hover:border-[#1e3a8a] dark:hover:border-[#1e3a8a] transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/sarah.jpg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black dark:text-white transition-colors duration-500">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center transition-colors duration-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="text-[#1e3a8a] dark:text-blue-600 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="mr-1" />
                  ))}
                  {[...Array(5 - testimonial.stars)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="mr-1 text-gray-300 dark:text-gray-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic transition-colors duration-500">
                  "{testimonial.message}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full">
        <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black border-t border-b border-gray-200 dark:border-gray-800 py-12 md:py-16 lg:py-20 overflow-hidden transition-all duration-1000">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/5 to-transparent dark:from-[#1e3a8a]/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1e3a8a]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#1e3a8a]/5 rounded-full blur-2xl"></div>

          <div className="container text-center mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-800/5 rounded-full text-[#1e3a8a] dark:text-blue-500 text-xs sm:text-sm font-medium mb-4 sm:mb-6 transition-colors duration-500">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Ready to Get Started?
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-black dark:text-white transition-colors duration-500">
              Transform Your Business
              <span className="block text-[#1e3a8a] dark:text-blue-500 mt-1 sm:mt-2">
                With ZemenayTech
              </span>
            </h3>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed transition-colors duration-500">
              Join 200+ satisfied clients who chose ZemenayTech as their
              technology partner. Let's discuss how we can help you achieve your
              digital goals and drive unprecedented growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-[#1e3a8a] hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white group transition-all duration-300 hover:scale-105"
                >
                  Start Your Project Today
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#1e3a8a] dark:border-blue-600 text-[#1e3a8a] dark:text-blue-600 hover:bg-[#1e3a8a] dark:hover:bg-blue-700 hover:text-white dark:hover:text-white bg-transparent transition-all duration-300 hover:scale-105"
                >
                  Schedule Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
