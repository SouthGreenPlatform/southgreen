import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DatabaseHero } from "@/components/databases/DatabaseHero";
import { GenomeHubsSection } from "@/components/databases/GenomeHubsSection";
import { AnalysisToolsSection } from "@/components/databases/AnalysisToolsSection";

const Databases = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  const handleSearch = () => {
    setActiveSearch(searchQuery);
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main>
        <DatabaseHero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
        />
        <GenomeHubsSection searchQuery={activeSearch} />
        <AnalysisToolsSection searchQuery={activeSearch} />
      </main>
      <Footer />
    </div>
  );
};

export default Databases;