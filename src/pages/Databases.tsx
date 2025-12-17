import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DatabaseHero } from "@/components/databases/DatabaseHero";
import { GenomeHubsSection } from "@/components/databases/GenomeHubsSection";
import { AnalysisToolsSection } from "@/components/databases/AnalysisToolsSection";
import { ExpertiseSection } from "@/components/databases/ExpertiseSection";

const Databases = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main>
        <DatabaseHero />
        <GenomeHubsSection />
        <AnalysisToolsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Databases;
