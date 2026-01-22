import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DatabaseHero } from "@/components/databases/DatabaseHero";
import { GenomeHubsSection, genomeHubs } from "@/components/databases/GenomeHubsSection";
import { AnalysisToolsSection, toolCategories } from "@/components/databases/AnalysisToolsSection";
import { LegacyToolsSection, legacyTools } from "@/components/databases/LegacyToolsSection";
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

type SectionFilter = "all" | "genome-hubs" | "analysis-tools" | "legacy-tools";

const validSections: SectionFilter[] = ["all", "genome-hubs", "analysis-tools", "legacy-tools"];

const Databases = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  
  // Initialize section filter from URL parameter
  const sectionFromUrl = searchParams.get("section") as SectionFilter | null;
  const [sectionFilter, setSectionFilter] = useState<SectionFilter>(
    sectionFromUrl && validSections.includes(sectionFromUrl) ? sectionFromUrl : "all"
  );

  // Sync URL when filter changes
  useEffect(() => {
    if (sectionFilter === "all") {
      searchParams.delete("section");
    } else {
      searchParams.set("section", sectionFilter);
    }
    setSearchParams(searchParams, { replace: true });
  }, [sectionFilter, searchParams, setSearchParams]);

  const handleSearch = () => {
    setActiveSearch(searchQuery);
  };

  const hasHubResults = activeSearch
    ? genomeHubs.some((hub) => hub.name.toLowerCase().includes(activeSearch.toLowerCase()))
    : true;

  const hasToolResults = activeSearch
    ? toolCategories.some((category) =>
        category.tools.some((tool) => tool.name.toLowerCase().includes(activeSearch.toLowerCase()))
      )
    : true;

  const hasLegacyResults = activeSearch
    ? legacyTools.some((tool) => tool.name.toLowerCase().includes(activeSearch.toLowerCase()))
    : true;

  const noResults = activeSearch && !hasHubResults && !hasToolResults && !hasLegacyResults;

  const showGenomeHubs = (sectionFilter === "all" || sectionFilter === "genome-hubs") && (activeSearch ? hasHubResults : true);
  const showAnalysisTools = (sectionFilter === "all" || sectionFilter === "analysis-tools") && (activeSearch ? hasToolResults : true);
  const showLegacyTools = (sectionFilter === "all" || sectionFilter === "legacy-tools") && (activeSearch ? hasLegacyResults : true);

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main>
        <DatabaseHero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
        />
        
        {/* Section Filter Buttons */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={sectionFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSectionFilter("all")}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              variant={sectionFilter === "genome-hubs" ? "default" : "outline"}
              size="sm"
              onClick={() => setSectionFilter("genome-hubs")}
              className="rounded-full"
            >
              Genome Hubs
            </Button>
            <Button
              variant={sectionFilter === "analysis-tools" ? "default" : "outline"}
              size="sm"
              onClick={() => setSectionFilter("analysis-tools")}
              className="rounded-full"
            >
              Analysis Tools
            </Button>
            <Button
              variant={sectionFilter === "legacy-tools" ? "default" : "outline"}
              size="sm"
              onClick={() => setSectionFilter("legacy-tools")}
              className="rounded-full"
            >
              Legacy Tools
            </Button>
          </div>
        </div>

        {noResults ? (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center justify-center text-center py-16">
                <SearchX className="w-16 h-16 text-muted-foreground mb-4" />
                <h2 className="text-2xl font-semibold text-foreground mb-2">No results found</h2>
                <p className="text-muted-foreground max-w-md">
                  No databases or tools match "<span className="font-medium text-foreground">{activeSearch}</span>". Try a different search term.
                </p>
              </div>
            </div>
          </section>
        ) : (
          <>
            {showGenomeHubs && <GenomeHubsSection searchQuery={activeSearch} />}
            {showAnalysisTools && <AnalysisToolsSection searchQuery={activeSearch} />}
            {showLegacyTools && <LegacyToolsSection searchQuery={activeSearch} />}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Databases;