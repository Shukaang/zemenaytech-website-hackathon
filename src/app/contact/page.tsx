import { Header } from "@/components/header";
import { ContactHero } from "@/components/contact-hero";
import { ContactForm } from "@/components/contact-form";
import { ContactMap } from "@/components/contact-map";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Zemenaytech",
  description:
    "Have questions or a project idea? Get in touch —— our team is ready to help. Located in Piassa, Addis Ababa",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
}
