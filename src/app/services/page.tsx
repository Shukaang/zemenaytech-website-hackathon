import { Header } from "@/components/header";
import { ServicesHero } from "@/components/services-hero";
import { ComprehensiveSolutions } from "@/components/comprehensive-solutions";
import { ServicesDetailed } from "@/components/services-detailed";
import { PortfolioShowcase } from "@/components/portfolio-showcase";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Our Services | Web-Development | Wordpress-Development | Seo-Management | Website-Maintenance",
  description:
    "Comprehensive tech services including Web-Development, Wordpress-Development, Seo-Management, Website-Maintenance and more World-wide",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesHero />
        <ComprehensiveSolutions />
        <ServicesDetailed />
        <PortfolioShowcase />
      </main>
      <Footer />
    </div>
  );
}
