import { Header } from "@/components/header";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { PricingComparison } from "@/components/pricing/pricing-comparison";
import { PricingFAQ } from "@/components/pricing/pricing-faq";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Zemenay",
  description:
    "Simple, transparent pricing: from free community options to enterprise-level digital solutions.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PricingHero />
        <PricingCards />
        <PricingComparison />
        <PricingFAQ />
      </main>
      <Footer />
    </div>
  );
}
