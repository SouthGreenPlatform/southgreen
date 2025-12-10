import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ToolsSection } from "@/components/ToolsSection";
import { HPCSection } from "@/components/HPCSection";
import { AboutSection } from "@/components/AboutSection";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main>
        <Hero />
        <ToolsSection />
        <HPCSection />
        <AboutSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
