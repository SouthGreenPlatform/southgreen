import { ExternalLink, GitBranch, Search, TreeDeciduous } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

// Import favicons
import gigwaFavicon from "@/assets/tools/gigwa-favicon.ico";
import galaxyFavicon from "@/assets/tools/galaxy-favicon.png";
import synflowFavicon from "@/assets/tools/synflow-favicon.ico";
import githubFavicon from "@/assets/tools/github-favicon.svg";
import dianeFavicon from "@/assets/tools/diane-favicon.png";
import culebrontFavicon from "@/assets/tools/culebront-favicon.png";
import greenphylFavicon from "@/assets/tools/greenphyl-favicon.png";
import agroldFavicon from "@/assets/tools/agrold-favicon.png";

interface Tool {
  name: string;
  description: string;
  link: string;
  icon?: LucideIcon;
  favicon?: string;
  color: string;
  internal?: boolean;
}

interface ToolCategory {
  name: string;
  description: string;
  tools: Tool[];
}

const toolCategories: ToolCategory[] = [
  {
    name: "Data Integration",
    description: "Platforms for integrating and querying multi-source plant data",
    tools: [
      {
        name: "AgroLD",
        description: "Agronomic Linked Data platform integrating data from various plant resources using semantic web technologies.",
        link: "https://agrold.southgreen.fr/aldp/index.jsp",
        favicon: agroldFavicon,
        color: "from-green-600 to-teal-500",
      },
    ],
  },
  {
    name: "Gene Expression",
    description: "Tools for analyzing and visualizing gene expression data",
    tools: [
      {
        name: "DIANE",
        description: "Dashboard for the Inference and Analysis of Network from Expression data, a Shiny application for RNA-seq analysis.",
        link: "https://github.com/Alexandre-So/DIANE",
        favicon: dianeFavicon,
        color: "from-rose-500 to-pink-500",
      },
    ],
  },
  {
    name: "Molecular Markers Exploration & Analysis",
    description: "Tools for exploring and analyzing molecular markers and genetic variants",
    tools: [
      {
        name: "Gigwa",
        description: "Gigantic Data explorer for high-density genotyping data management and analysis.",
        link: "/gigwa",
        favicon: gigwaFavicon,
        color: "from-indigo-500 to-purple-500",
        internal: true,
      },
      {
        name: "SniPlay",
        description: "Web-based tool for detection, management, and analysis of SNPs from re-sequencing data.",
        link: "https://sniplay.southgreen.fr/",
        icon: Search,
        color: "from-blue-500 to-indigo-500",
      },
    ],
  },
  {
    name: "Mosaic Genomes",
    description: "Tools for analyzing genome structure and evolution",
    tools: [
      {
        name: "GeMo",
        description: "Genome Evolution MOdeler for comparative genomics visualization and analysis.",
        link: "http://gemo.southgreen.fr/",
        icon: GitBranch,
        color: "from-violet-500 to-purple-500",
      },
      {
        name: "VCFHunter",
        description: "Tools for VCF file exploration, chromosome painting, and haplotype analysis.",
        link: "https://github.com/SouthGreenPlatform/VcfHunter",
        favicon: githubFavicon,
        color: "from-teal-500 to-cyan-500",
      },
    ],
  },
  {
    name: "Pangenomics",
    description: "Tools for pangenome visualization and exploration",
    tools: [
      {
        name: "FrangiPANe",
        description: "A tool for building and analyzing pangenome graphs from multiple genome assemblies.",
        link: "https://github.com/tranchant/frangiPANe",
        favicon: githubFavicon,
        color: "from-amber-500 to-orange-500",
      },
      {
        name: "Panache",
        description: "Web-based interface designed for the visualization of linear pangenome graphs.",
        link: "https://github.com/SouthGreenPlatform/panache",
        favicon: githubFavicon,
        color: "from-orange-500 to-red-500",
      },
      {
        name: "PanExplorer",
        description: "Interactive tool for exploring and analyzing pangenomic data across multiple genomes.",
        link: "https://github.com/SouthGreenPlatform/PanExplorer",
        favicon: githubFavicon,
        color: "from-pink-500 to-rose-500",
      },
    ],
  },
  {
    name: "Phylogenomics",
    description: "Tools for phylogenetic analysis and gene family evolution",
    tools: [
      {
        name: "GreenPhyl",
        description: "Database for plant comparative genomics based on gene family analysis.",
        link: "http://www.greenphyl.org/",
        favicon: greenphylFavicon,
        color: "from-green-600 to-emerald-500",
      },
      {
        name: "RAP-Green",
        description: "Reconciled gene trees for comprehensive phylogenomic analysis of green plants.",
        link: "https://github.com/SouthGreenPlatform/rap-green/",
        favicon: githubFavicon,
        color: "from-lime-500 to-green-500",
      },
    ],
  },
  {
    name: "Structural Variation",
    description: "Tools for analyzing synteny and structural variations across genomes",
    tools: [
      {
        name: "SynFlow",
        description: "Interactive web application for exploring and visualizing synteny and structural variations across genomes.",
        link: "https://synflow.southgreen.fr/",
        favicon: synflowFavicon,
        color: "from-cyan-500 to-blue-500",
      },
    ],
  },
  {
    name: "Workflow",
    description: "Platforms for building and running bioinformatics pipelines",
    tools: [
      {
        name: "Culebront",
        description: "Snakemake-based pipeline for genome assembly from long-read sequencing data.",
        link: "https://github.com/SouthGreenPlatform/culebront",
        favicon: culebrontFavicon,
        color: "from-yellow-500 to-amber-500",
      },
      {
        name: "Galaxy",
        description: "Web-based platform for accessible, reproducible, and transparent computational research.",
        link: "https://plants.usegalaxy.fr/",
        favicon: galaxyFavicon,
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Toggle",
        description: "Toolbox for generic NGS analyses with comprehensive pipeline management capabilities.",
        link: "https://github.com/SouthGreenPlatform/TOGGLE",
        favicon: githubFavicon,
        color: "from-emerald-500 to-green-500",
      },
    ],
  },
];

export { toolCategories };

interface AnalysisToolsSectionProps {
  searchQuery?: string;
}

export function AnalysisToolsSection({ searchQuery = "" }: AnalysisToolsSectionProps) {
  const filteredCategories = searchQuery
    ? toolCategories
        .map((category) => ({
          ...category,
          tools: category.tools.filter((tool) =>
            tool.name.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((category) => category.tools.length > 0)
    : toolCategories;

  if (searchQuery && filteredCategories.length === 0) {
    return null;
  }

  return (
    <section id="analysis-tools" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
            Analysis Tools
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Bioinformatics Software Suite
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Comprehensive tools organized by research domain to support your complete genomics analysis pipeline.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.name}>
              <div className="mb-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.tools.map((tool) => {
                  const linkProps = tool.internal 
                    ? { href: tool.link }
                    : { href: tool.link, target: "_blank", rel: "noopener noreferrer" };
                  
                  return (
                    <a
                      key={tool.name}
                      {...linkProps}
                      className="group block"
                    >
                      <Card className="h-full border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between mb-3">
                            {tool.favicon ? (
                              <img src={tool.favicon} alt={`${tool.name} icon`} className="w-12 h-12 object-contain" />
                            ) : (
                              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-sm`}>
                                {tool.icon && <tool.icon className="w-5 h-5 text-primary-foreground" />}
                              </div>
                            )}
                          </div>
                          <CardTitle className="font-heading text-lg group-hover:text-primary transition-colors flex items-center gap-2">
                            {tool.name}
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </CardTitle>
                          <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                            {tool.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <span className="text-sm text-primary font-medium group-hover:underline">
                            {tool.internal ? 'Learn More →' : 'Access Tool →'}
                          </span>
                        </CardContent>
                      </Card>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
