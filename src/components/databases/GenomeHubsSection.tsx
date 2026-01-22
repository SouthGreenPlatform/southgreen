import { useState, useMemo } from "react";
import { ExternalLink, Filter, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { PlantIcons, PlantIconName } from "@/components/icons/PlantIcons";

const genomeHubs = [
  {
    name: "Banana Genome Hub",
    species: "Musa spp.",
    description: "Integrated platform for banana genome information, annotation, and comparative genomics analysis.",
    link: "https://banana-genome-hub.southgreen.fr/",
    icon: "banana" as PlantIconName,
    tags: [
      "JBrowse",
      "BLAST",
      "Synteny",
      "Expression",
      "GO Enrichment",
      "Variants",
      "Pangenome",
      "Mosaics",
      "Structural variation",
      "Pathways",
    ],
    status: "Active",
  },
  {
    name: "Citrus Genome Hub",
    species: "Citrus spp.",
    description: "Comprehensive platform for citrus genomics, comparative analysis, and breeding tools.",
    link: "https://citrus-genome-hub.southgreen.fr/",
    icon: "citrus" as PlantIconName,
    tags: ["JBrowse", "BLAST", "Synteny", "Variants", "Repeats"],
    status: "Active",
  },
  {
    name: "Cocoa Genome Hub",
    species: "Theobroma cacao",
    description: "Genomic resources and tools for cocoa research and breeding programs.",
    link: "https://cocoa-genome-hub.southgreen.fr/",
    icon: "cocoa" as PlantIconName,
    tags: ["JBrowse", "BLAST", "Pathways"],
    status: "Archive",
  },
  {
    name: "Coffee Genome Hub",
    species: "Coffea spp.",
    description: "Comprehensive genome browser and analysis tools for coffee genomics research.",
    link: "https://coffee-genome-hub.southgreen.fr/",
    icon: "coffee" as PlantIconName,
    tags: ["JBrowse", "BLAST"],
    status: "Active",
  },
  {
    name: "Grass Genome Hub",
    species: "Poaceae family",
    description: "Multi-species genome browser for grass family comparative genomics research.",
    link: "https://grass-genome-hub.southgreen.fr/",
    icon: "poaceae" as PlantIconName,
    tags: ["JBrowse", "Synteny", "Variants"],
    status: "Archive",
  },
  {
    name: "Olive Genome Hub",
    species: "Olea europaea",
    description: "Integrated genomic resources for olive research and Mediterranean crop improvement.",
    link: "https://olive-genome-hub.climolivemed.com/",
    icon: "olive" as PlantIconName,
    tags: ["JBrowse", "BLAST", "Synteny"],
    status: "Active",
  },
  {
    name: "Palm Genome Hub",
    species: "Arecaceae family",
    description: "Genomic resources for palm species including oil palm, date palm, and coconut research.",
    link: "https://palm-genome-hub.southgreen.fr/",
    icon: "palm" as PlantIconName,
    tags: ["JBrowse", "BLAST", "Pathways", "Genetic maps"],
    status: "Active",
  },
  {
    name: "Rice Genome Hub",
    species: "Oryza spp.",
    description: "Rice genomics platform with multi-species comparative analysis capabilities.",
    link: "https://rice-genome-hub.southgreen.fr/",
    icon: "rice" as PlantIconName,
    tags: ["JBrowse", "BLAST", "Variants", "Expression", "Repeats"],
    status: "Active",
  },
  {
    name: "Sugarcane Genome Hub",
    species: "Saccharum spp.",
    description: "Specialized hub for complex sugarcane genome analysis and visualization.",
    link: "http://sugarcane-genome.cirad.fr/",
    icon: "sugarcane" as PlantIconName,
    tags: ["JBrowse", "BLAST", "Synteny"],
    status: "Active",
  },
  {
    name: "Vanilla Genome Hub",
    species: "Vanilla planifolia",
    description: "Genomic resources for vanilla research, breeding, and flavor compound studies.",
    link: "https://vanilla-genome-hub.cirad.fr/",
    icon: "vanilla" as PlantIconName,
    tags: ["JBrowse", "BLAST", "Synteny", "Expression", "GO Enrichment"],
    status: "Active",
  },
  {
    name: "Yam Genome Hub",
    species: "Dioscorea family",
    description: "Genomic resources for Dioscorea species",
    link: "https://yam-genome-hub.southgreen.fr",
    icon: "yam" as PlantIconName,
    tags: ["JBrowse", "BLAST"],
    status: "Active",
  },
];

export { genomeHubs };

// Extract all unique tags from genome hubs
const allTags = Array.from(new Set(genomeHubs.flatMap((hub) => hub.tags))).sort();

interface GenomeHubsSectionProps {
  searchQuery?: string;
}

export function GenomeHubsSection({ searchQuery = "" }: GenomeHubsSectionProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredHubs = useMemo(() => {
    let hubs = genomeHubs;

    // Filter by search query
    if (searchQuery) {
      hubs = hubs.filter((hub) => hub.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      hubs = hubs.filter((hub) => selectedTags.some((tag) => hub.tags.includes(tag)));
    }

    return hubs;
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  if (searchQuery && filteredHubs.length === 0 && selectedTags.length === 0) {
    return null;
  }

  return (
    <section id="genome-hubs" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Genome Hubs
            </span>

            {/* Filter Dropdown */}
            <div className="flex items-center gap-2">
              {selectedTags.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear ({selectedTags.length})
                </Button>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Filter className="w-4 h-4" />
                    Filter by tools
                    {selectedTags.length > 0 && (
                      <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs">
                        {selectedTags.length}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 max-h-80 overflow-y-auto bg-popover">
                  <DropdownMenuLabel>Available Tools</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {allTags.map((tag) => (
                    <DropdownMenuCheckboxItem
                      key={tag}
                      checked={selectedTags.includes(tag)}
                      onCheckedChange={() => toggleTag(tag)}
                    >
                      {tag}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Our Genome Hubs provide comprehensive genomic resources including genome browsers, BLAST servers, expression
            atlases, and comparative genomics tools for tropical crops.
          </p>
        </div>

        {/* Selected Tags Display */}
        {selectedTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedTags.map((tag) => (
              <Badge
                key={tag}
                variant="default"
                className="cursor-pointer gap-1 gradient-hero border-0"
                onClick={() => toggleTag(tag)}
              >
                {tag}
                <X className="w-3 h-3" />
              </Badge>
            ))}
          </div>
        )}

        {/* No results message */}
        {filteredHubs.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No genome hubs match the selected filters.</p>
            <Button variant="link" onClick={clearFilters} className="mt-2">
              Clear all filters
            </Button>
          </div>
        )}

        {/* Genome Hubs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHubs.map((hub) => (
            <a key={hub.name} href={hub.link} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="h-full border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                {/* Header with emoji and status */}
                <div className="relative p-6 pb-0">
                  <div className="flex items-start justify-between">
                    <div className="mb-4">
                      {(() => {
                        const IconComponent = PlantIcons[hub.icon];
                        return IconComponent ? <IconComponent size={48} className="text-primary" /> : null;
                      })()}
                    </div>
                    <Badge
                      variant={hub.status === "Active" ? "default" : "secondary"}
                      className={hub.status === "Active" ? "gradient-hero border-0" : ""}
                    >
                      {hub.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pt-2">
                  <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors flex items-center gap-2">
                    {hub.name}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <p className="text-sm text-primary italic">{hub.species}</p>
                  <CardDescription className="text-muted-foreground mt-2">{hub.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {hub.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={`text-xs ${selectedTags.includes(tag) ? "bg-primary/20 border-primary" : ""}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
