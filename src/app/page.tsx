import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ProcessStrip } from "@/components/ProcessStrip";
import { TechStack } from "@/components/TechStack";
import { WhySirosoft } from "@/components/WhySirosoft";
import { TeamSection } from "@/components/TeamSection";
import { Testimonials } from "@/components/Testimonials";
import { GroupSection } from "@/components/GroupSection";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0A0A0C] font-body text-ink" data-testid="sirosoft-app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ProcessStrip />
        <TechStack />
        <WhySirosoft />
        <GroupSection />
        <TeamSection />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
