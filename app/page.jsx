import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionTransition from "@/components/effects/SectionTransition";
import StatsSection from "@/components/StatsSection";
import ModelsGrid from "@/components/ModelsGrid";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <SectionTransition />
        <StatsSection />
        <SectionTransition />
        <ModelsGrid />
        <SectionTransition />
        <BenefitsSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
