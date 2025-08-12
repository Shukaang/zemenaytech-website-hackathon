import { Header } from "@/components/header";
import { HeroSection } from "@/components/home/hero-section";
import { WhyChooseZemenay } from "@/components/home/why-choose-zemenay";
import { OurClients } from "@/components/home/our-clients";
import { Footer } from "@/components/footer";
import MainTestimonial from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseZemenay />
        <OurClients />
        <MainTestimonial />
      </main>
      <Footer />
    </div>
  );
}
