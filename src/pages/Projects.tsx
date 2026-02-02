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
  years?: string;
}

const projects: Project[] = [
  {
    acronym: "Mudis4LS",
    title: "Mutualized Digital Spaces for FAIR Life Sciences",
    url: "https://anr.fr/ProjetIA-21-ESRE-0048",
    donor: "ANR",
  },
  {
    acronym: "BReIF",
    title: "Infrastructure to boost the use of diversified biological resources",
    url: "https://www.pepr-agroeconum.fr/les-projets-finances/traitement-de-donnees-et-modelisation/infrastructures/breif",
    donor: "PEPR",
  },
  {
    acronym: "Genebanks accelarator",
    title: "The Genebanks Accelerator will enable smarter, more widespread use of crop diversity",
    url: "https://www.cgiar.org/cgiar-research-portfolio-2025-2030/genebanks",
    donor: "CGIAR",
  },
  {
    acronym: "AgroDiv",
    title:
      "Genomic and Functional Characterization of the Diversity of Crop Plants and Domestic Animals as a Cornerstone of Agroecology: From Genome to Phenotype",
    url: "https://www.pepr-agroeconum.fr/les-projets-finances/ressources-genetiques/projets-cibles/agrodiv",
    donor: "PEPR",
  },
  {
    acronym: "DIG-AI",
    title: "Deciphering plant genotype-phenotype Interactions using knowledge Graphs and AI",
    url: "https://anr-dig-ai.github.io/content/",
    donor: "ANR",
  },
  {
    acronym: "ClimOliveMed",
    title:
      "Diversity of varieties and farming systems as an asset of Mediterranean oleiculture in a global change setting",
    url: "https://www.climolivemed.com/",
    donor: "Multi",
  },
  {
    acronym: "Bolero",
    title: "Breeding for cOffee and cocoa root resiLiEnce in low input farming systems based on improved ROotstock",
    url: "https://www.bolero-project.eu/project/bolero-project",
    donor: "EU",
  },
  {
    acronym: "BRIDGES",
    title:
      "Bridging Resources for Innovation in Diversified Genomic Exploration of Species - Coffee genomics research project",
    url: "https://www.bridgescoffea.org/",
    donor: "ANR",
    years: "2024-2027",
  },
  {
    acronym: "PlastiVigne",
    title:
      "Studies the structural plasticity of the grapevine genome, with the aim of improving knowledge of variability in gene content and isoforms, and identifying structural variations likely to modulate gene expression and traits involved in adaptation to climate change.",
    url: "https://umr-agap.cirad.fr/en/research/main-projects/vinid-occ",
    donor: "Vinid’Occ",
    years: "2022-2026",
  },
  {
    acronym: "EPIS",
    title:
      "The objective of the EPIS project is to decipher how demographic and environmental changes impact the evolution of the plant immune system",
    url: "",
    donor: "ANR",
    years: "2025-2028",
  },
  {
    acronym: "EpiHLB",
    title: "",
    url: "",
    donor: "ANR",
    years: "2024-2028",
  },
  {
    acronym: "Bana+",
    title: "https://bananaplus.org/",
    url: "Ministère",
    donor: "ANR",
    years: "2024-2029",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <FolderOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Research Projects</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Projects Supported by the Platform</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the research projects leveraging South Green's infrastructure, tools, and expertise for advancing
              plant and pathogen genomics.
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
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.title}</p>
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
