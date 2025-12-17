import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DatabaseHero } from "@/components/databases/DatabaseHero";
import { GenomeHubsSection, genomeHubs } from "@/components/databases/GenomeHubsSection";
import { AnalysisToolsSection, toolCategories } from "@/components/databases/AnalysisToolsSection";
import { SearchX } from "lucide-react";

const Databases = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

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

  const noResults = activeSearch && !hasHubResults && !hasToolResults;

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main>
        <DatabaseHero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
        />
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
            <GenomeHubsSection searchQuery={activeSearch} />
            <AnalysisToolsSection searchQuery={activeSearch} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Databases;