import { ExternalLink, Sparkles, BarChart3, Search, GitBranch, Dna, Leaf } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tools = [
  {
    name: "Galaxy",
    description: "Web-based platform for accessible, reproducible, and transparent computational research",
    icon: Sparkles,
    link: "http://galaxy.southgreen.fr/galaxy/",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "GreenPhyl",
    description: "Web resource for comparative and functional genomics in plants",
    icon: GitBranch,
    link: "http://www.greenphyl.org/",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "SNiPlay",
    description: "A web-based application for detection, management and analysis of SNPs",
    icon: BarChart3,
    link: "http://sniplay.southgreen.fr/",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "TropGene",
    description: "Database for tropical and Mediterranean crop plants genomic data",
    icon: Search,
    link: "http://tropgenedb.cirad.fr/",
    color: "from-teal-500 to-green-500",
  },
  {
    name: "Banana Genome Hub",
    description: "Integrated platform for banana genome information and analysis",
    icon: Dna,
    link: "http://banana-genome.cirad.fr/",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "GNPAnnot",
    description: "Genome annotation platform for genomic data analysis",
    icon: Leaf,
    link: "http://www.gnpannot.org/",
    color: "from-lime-500 to-green-500",
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
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Powerful Bioinformatics Solutions
          </h2>
          <p className="text-muted-foreground">
            Discover our suite of specialized tools designed for genomic analysis, 
            data visualization, and computational biology research.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <a
              key={tool.name}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-sm`}>
                      <tool.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardTitle className="font-heading text-xl mt-4 group-hover:text-primary transition-colors">
                    {tool.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-primary font-medium group-hover:underline">
                    Access Tool →
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
