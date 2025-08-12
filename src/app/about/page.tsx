import { Header } from "@/components/header";
import { AboutHero } from "@/components/about-hero";
import { OurStory } from "@/components/our-story";
import { WhoWeAre } from "@/components/who-we-are";
import { MeetOurTeam } from "@/components/meet-our-team";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Zemenay | Ethiopia's Premier Tech Company",
  description:
    "Learn about Zemenay's story, mission, values and the talented team shaping digital solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <OurStory />
        <WhoWeAre />
        <MeetOurTeam />
      </main>
      <Footer />
    </div>
  );
}
