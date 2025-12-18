import { ExternalLink, Sparkles, GitBranch, Database, Layers, Eye, Dna, Globe, Cherry, Citrus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const tools = [
  {
    name: "AgroLD",
    category: "Knowledge Graph",
    description:
      "Agronomic Linked Data platform integrating data from various plant resources using semantic web technologies.",
    link: "https://agrold.southgreen.fr/aldp/index.jsp",
    icon: Globe,
    color: "from-green-600 to-teal-500",
    internal: false,
  },
  {
    name: "Banana Genome Hub",
    category: "Genome Hub",
    description:
      "Comprehensive genomic resources for banana including reference genomes, annotations, and genetic data.",
    link: "https://banana-genome-hub.southgreen.fr/",
    icon: Cherry,
    color: "from-yellow-500 to-amber-500",
    internal: false,
  },
  {
    name: "Citrus Genome Hub",
    category: "Genome Hub",
    description: "Genomic portal for citrus species with reference genomes, variant data, and analysis tools.",
    link: "https://citrus-genome-hub.southgreen.fr/",
    icon: Citrus,
    color: "from-orange-500 to-yellow-500",
    internal: false,
  },
  {
    name: "Culebront",
    category: "Assembly",
    description: "Snakemake-based pipeline for genome assembly from long-read sequencing data.",
    link: "https://github.com/SouthGreenPlatform/culebront",
    icon: Dna,
    color: "from-emerald-500 to-green-500",
    internal: false,
  },
  {
    name: "Galaxy",
    category: "Workflow Platform",
    description:
      "Web-based platform for accessible, reproducible, and transparent computational research with thousands of tools.",
    link: "https://plants.usegalaxy.fr/",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-500",
    internal: false,
  },
  {
    name: "GenoRing",
    category: "Visualization",
    description: "Tool for circular genome visualization and comparative genomics analysis.",
    link: "https://github.com/SouthGreenPlatform/genoring",
    icon: GitBranch,
    color: "from-violet-500 to-purple-500",
    internal: false,
  },
  {
    name: "Gigwa",
    category: "Variant Database",
    description: "Gigantic Data explorer for high-density genotyping data management and analysis.",
    link: "/gigwa",
    icon: Database,
    color: "from-indigo-500 to-purple-500",
    internal: true,
  },
  {
    name: "FrangiPANe",
    category: "Pangenomics",
    description: "A tool for building and analyzing pangenome graphs from multiple genome assemblies.",
    link: "https://github.com/tranchant/frangiPANe",
    icon: Layers,
    color: "from-amber-500 to-orange-500",
    internal: false,
  },
  {
    name: "Panache",
    category: "Pangenomics",
    description: "Web-based interface designed for the visualization of linear pangenome graphs.",
    link: "https://github.com/SouthGreenPlatform/panache",
    icon: Layers,
    color: "from-orange-500 to-red-500",
    internal: false,
  },
  {
    name: "PanExplorer",
    category: "Pangenomics",
    description: "Interactive tool for exploring and analyzing pangenomic data across multiple genomes.",
    link: "https://github.com/SouthGreenPlatform/PanExplorer",
    icon: Eye,
    color: "from-pink-500 to-rose-500",
    internal: false,
  },
  {
    name: "SynFlow",
    category: "Structural Variation",
    description:
      "Interactive web application for exploring and visualizing synteny and structural variations across genomes.",
    link: "https://synflow.southgreen.fr/",
    icon: GitBranch,
    color: "from-cyan-500 to-blue-500",
    internal: false,
  },
];
export function ToolsSection() {
  return (
    <section id="tools" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Tools
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">Featured Bioinformatics Solutions</h2>
          <p className="text-muted-foreground">
            From workflow platforms to specialized pangenomic visualizers, our tools support the complete genomics
            analysis pipeline.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const cardContent = (
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-sm`}
                    >
                      <tool.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md">
                      {tool.category}
                    </span>
                  </div>
                  <CardTitle className="font-heading text-lg group-hover:text-primary transition-colors flex items-center gap-2">
                    {tool.name}
                    {!tool.internal && (
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-primary font-medium group-hover:underline">
                    {tool.internal ? "Learn More →" : "Access Tool →"}
                  </span>
                </CardContent>
              </Card>
            );

            if (tool.internal) {
              return (
                <Link
                  key={tool.name}
                  to={tool.link}
                  className="group block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <a
                key={tool.name}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {cardContent}
              </a>
            );
          })}
        </div>

        {/* More Tools Link */}
        <div className="text-center mt-12">
          <Link
            to="/databases#analysis-tools"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline transition-colors"
          >
            More tools
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
