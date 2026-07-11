import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { TechStack } from "@/components/TechStack";
import { References } from "@/components/References";
import { WhySirosoft } from "@/components/WhySirosoft";
import { ContactCTA } from "@/components/ContactCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-siro-bg font-body text-siro-text" data-testid="sirosoft-app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <TechStack />
        <References />
        <WhySirosoft />
        <ContactCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
