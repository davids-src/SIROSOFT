import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kapcsolat | SIROSOFT",
  description: "Vedd fel velünk a kapcsolatot, és kezdjük el a közös munkát!",
};

export default function KapcsolatPage() {
  return (
    <div className="bg-[#0A0A0C] font-body text-ink">
      <Navbar />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
