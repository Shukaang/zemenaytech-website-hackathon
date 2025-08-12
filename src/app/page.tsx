import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { WhyChooseZemenay } from "@/components/why-choose-zemenay";
import { OurClients } from "@/components/our-clients";
import { Footer } from "@/components/footer";
import MainTestimonial from "@/components/testimonials";

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
