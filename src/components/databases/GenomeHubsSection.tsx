import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const genomeHubs = [
  {
    name: "Banana Genome Hub",
    species: "Musa spp.",
    description: "Integrated platform for banana genome information, annotation, and comparative genomics analysis.",
    link: "http://banana-genome.cirad.fr/",
    image: "🍌",
    tags: ["JBrowse", "BLAST", "Expression", "Synteny", "Markers", "Pangenome"],
    status: "Active",
  },
  {
    name: "Coffee Genome Hub",
    species: "Coffea spp.",
    description: "Comprehensive genome browser and analysis tools for coffee genomics research.",
    link: "http://coffee-genome.org/",
    image: "☕",
    tags: ["Annotation", "Synteny", "Markers"],
    status: "Archive",
  },
  {
    name: "Cocoa Genome Hub",
    species: "Theobroma cacao",
    description: "Genomic resources and tools for cocoa research and breeding programs.",
    link: "http://cocoagendb.cirad.fr/",
    image: "🍫",
    tags: ["Assembly", "Genes", "Variants"],
    status: "Archive",
  },
  {
    name: "Rice Genome Hub",
    species: "Oryza spp.",
    description: "Rice genomics platform with multi-species comparative analysis capabilities.",
    link: "http://rice-genome.cirad.fr/",
    image: "🌾",
    tags: ["Pangenome", "GWAS", "QTL"],
    status: "Active",
  },
  {
    name: "Sugarcane Genome Hub",
    species: "Saccharum spp.",
    description: "Specialized hub for complex sugarcane genome analysis and visualization.",
    link: "http://sugarcane-genome.cirad.fr/",
    image: "🌿",
    tags: ["Polyploid", "Haplotypes", "Expression"],
    status: "Active",
  },
  {
    name: "Vanilla Genome Hub",
    species: "Vanilla planifolia",
    description: "Genomic resources for vanilla research, breeding, and flavor compound studies.",
    link: "https://vanilla-genome-hub.cirad.fr/",
    image: "🌸",
    tags: ["Annotation", "BLAST", "Expression"],
    status: "Active",
  },
  {
    name: "Citrus Genome Hub",
    species: "Citrus spp.",
    description: "Comprehensive platform for citrus genomics, comparative analysis, and breeding tools.",
    link: "https://citrus-genome-hub.southgreen.fr/",
    image: "🍊",
    tags: ["JBrowse", "Synteny", "Pangenome"],
    status: "Active",
  },
  {
    name: "Grass Genome Hub",
    species: "Poaceae family",
    description: "Multi-species genome browser for grass family comparative genomics research.",
    link: "https://grass-genome-hub.southgreen.fr/",
    image: "🌱",
    tags: ["Annotation", "BLAST"],
    status: "Active",
  },
  {
    name: "Olive Genome Hub",
    species: "Olea europaea",
    description: "Integrated genomic resources for olive research and Mediterranean crop improvement.",
    link: "https://olive-genome-hub.climolivemed.com/",
    image: "🫒",
    tags: ["Assembly", "Genes", "Expression"],
    status: "Active",
  },
  {
    name: "Palm Genome Hub",
    species: "Arecaceae family",
    description: "Genomic resources for palm species including oil palm, date palm, and coconut research.",
    link: "https://palm-genome-hub.southgreen.fr/",
    image: "🌴",
    tags: ["JBrowse", "Annotation", "BLAST"],
    status: "Active",
  },
];

export function GenomeHubsSection() {
  return (
    <section id="genome-hubs" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Genome Hubs
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">Integrated Information Systems</h2>
          <p className="text-muted-foreground max-w-2xl">
            Our Genome Hubs provide comprehensive genomic resources including genome browsers, BLAST servers, expression
            atlases, and comparative genomics tools for tropical crops.
          </p>
        </div>

        {/* Genome Hubs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {genomeHubs.map((hub) => (
            <a key={hub.name} href={hub.link} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="h-full border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                {/* Header with emoji and status */}
                <div className="relative p-6 pb-0">
                  <div className="flex items-start justify-between">
                    <div className="text-5xl mb-4">{hub.image}</div>
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
                      <Badge key={tag} variant="outline" className="text-xs">
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
