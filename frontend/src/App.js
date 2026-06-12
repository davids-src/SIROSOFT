import "@/App.css";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { TechStack } from "@/components/site/TechStack";
import { References } from "@/components/site/References";
import { WhySirosoft } from "@/components/site/WhySirosoft";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App bg-siro-bg text-siro-text font-body" data-testid="sirosoft-app">
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
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#111116",
            border: "1px solid #2A2A35",
            color: "#F0F0F5",
          },
        }}
      />
    </div>
  );
}

export default App;
