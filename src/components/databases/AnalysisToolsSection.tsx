import { ExternalLink, Database, Layers, Eye, Workflow, Sparkles, Dna, GitBranch, Search, TreeDeciduous } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const toolCategories = [
  {
    name: "Molecular Markers Exploration & Analysis",
    description: "Tools for exploring and analyzing molecular markers and genetic variants",
    tools: [
      {
        name: "SniPlay",
        description: "Web-based tool for detection, management, and analysis of SNPs from re-sequencing data.",
        link: "https://sniplay.southgreen.fr/",
        icon: Search,
        color: "from-blue-500 to-indigo-500",
      },
      {
        name: "Gigwa",
        description: "Gigantic Data explorer for high-density genotyping data management and analysis.",
        link: "/gigwa",
        icon: Database,
        color: "from-indigo-500 to-purple-500",
        internal: true,
      },
    ],
  },
  {
    name: "Pangenomics",
    description: "Tools for pangenome visualization and exploration",
    tools: [
      {
        name: "Panache",
        description: "Web-based interface designed for the visualization of linear pangenome graphs.",
        link: "https://github.com/SouthGreenPlatform/panache",
        icon: Layers,
        color: "from-orange-500 to-red-500",
      },
      {
        name: "PanExplorer",
        description: "Interactive tool for exploring and analyzing pangenomic data across multiple genomes.",
        link: "https://github.com/SouthGreenPlatform/PanExplorer",
        icon: Eye,
        color: "from-pink-500 to-rose-500",
      },
    ],
  },
  {
    name: "Workflow",
    description: "Platforms for building and running bioinformatics pipelines",
    tools: [
      {
        name: "Galaxy",
        description: "Web-based platform for accessible, reproducible, and transparent computational research.",
        link: "https://plants.usegalaxy.fr/",
        icon: Sparkles,
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Toggle",
        description: "Toolbox for generic NGS analyses with comprehensive pipeline management capabilities.",
        link: "https://github.com/SouthGreenPlatform/TOGGLE",
        icon: Workflow,
        color: "from-emerald-500 to-green-500",
      },
      {
        name: "Culebront",
        description: "Snakemake-based pipeline for genome assembly from long-read sequencing data.",
        link: "https://github.com/SouthGreenPlatform/culebront",
        icon: Dna,
        color: "from-yellow-500 to-amber-500",
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
        icon: Search,
        color: "from-teal-500 to-cyan-500",
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
        icon: TreeDeciduous,
        color: "from-green-600 to-emerald-500",
      },
      {
        name: "RAP-Green",
        description: "Reconciled gene trees for comprehensive phylogenomic analysis of green plants.",
        link: "https://github.com/SouthGreenPlatform/rap-green/",
        icon: GitBranch,
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
        icon: GitBranch,
        color: "from-cyan-500 to-blue-500",
      },
    ],
  },
];

export function AnalysisToolsSection() {
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
          {toolCategories.map((category) => (
            <div key={category.name}>
              <div className="mb-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.tools.map((tool) => {
                  const LinkComponent = tool.internal ? 'a' : 'a';
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
                            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-sm`}>
                              <tool.icon className="w-5 h-5 text-primary-foreground" />
                            </div>
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
