import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, ExternalLink, Building2 } from "lucide-react";

interface Project {
  acronym: string;
  title: string;
  url?: string;
  donor?: string;
}

const projects: Project[] = [
  { acronym: "Mudis4LS", title: "Mutualized Digital Spaces for FAIR Life Sciences", url: "https://anr.fr/ProjetIA-21-ESRE-0048" },
  { acronym: "Brief", title: "Infrastructure to boost the use of diversified biological resources" },
  { acronym: "CGIAR Genebank initiative", title: "CGIAR Genebank initiative" },
  { acronym: "AgroDiv", title: "Caractérisation génomique de la diversité des plantes et animaux domestiques pour la transition agroécologique" },
  { acronym: "DIG-AI", title: "Découverte des interactions génotype-phénotype à l'aide de graphe de connaissance et d'IA" },
  { acronym: "AFRIXOO", title: "African Xoo evolution" },
  { acronym: "GWASPemiladapt", title: "GWASPemiladapt" },
  { acronym: "wathealth_MH", title: "wathealth" },
  { acronym: "CURLY", title: "CURLY" },
  { acronym: "LoaGen", title: "LoaGen" },
  { acronym: "ClimOliveMed", title: "Diversity of varieties and farming systems as an asset of Mediterranean oleiculture in a global change setting" },
  { acronym: "Greener", title: "Greener" },
  { acronym: "Bolero", title: "Breeding for cOffee and cocoa root resiLiEnce in low input farming systems based on improved ROotstock" },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              <FolderOpen className="w-3 h-3 mr-1" />
              Research Projects
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Projects Supported by the Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the research projects leveraging South Green's infrastructure, tools, and expertise 
              for advancing plant and pathogen genomics.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    {project.url ? (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:underline"
                      >
                        <CardTitle className="text-lg font-bold text-primary group-hover:text-primary/80 transition-colors">
                          {project.acronym}
                        </CardTitle>
                        <ExternalLink className="w-3 h-3 text-primary" />
                      </a>
                    ) : (
                      <CardTitle className="text-lg font-bold text-primary group-hover:text-primary/80 transition-colors">
                        {project.acronym}
                      </CardTitle>
                    )}
                    {project.donor && (
                      <Badge variant="secondary" className="text-xs shrink-0">
                        <Building2 className="w-3 h-3 mr-1" />
                        {project.donor}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.title}
                  </p>
                  {!project.donor && (
                    <div className="mt-3 flex items-center text-xs text-muted-foreground/60">
                      <Building2 className="w-3 h-3 mr-1" />
                      <span>Donor TBD</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
