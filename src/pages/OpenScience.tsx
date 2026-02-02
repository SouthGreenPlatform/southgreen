import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Database, GitBranch, FileCheck, BookOpen, Code2, Workflow, Shield, Users } from "lucide-react";
import { FaGithub, FaGitlab } from "react-icons/fa";

const dataManagementResources = [
  {
    name: "Recherche Data Gouv",
    description: "French national ecosystem for sharing and opening research data",
    url: "https://recherche.data.gouv.fr/fr",
    icon: Database,
  },
  {
    name: "Research Data Guide",
    description: "New guide for research data management",
    url: "https://recherche.data.gouv.fr/fr/actualite/donnees-de-recherche-le-nouveau-guide",
    icon: BookOpen,
  },
  {
    name: "RDMkit",
    description: "Research Data Management toolkit - resources and best practices for data management",
    url: "https://rdmkit.elixir-europe.org/",
    icon: FileCheck,
  },
];

const softwareResources = [
  {
    name: "Open Science - Codes & Software",
    description: "French national guide on opening source codes and research software",
    url: "https://www.ouvrirlascience.fr/science-ouverte-codes-et-logiciels/",
    icon: Code2,
  },
  {
    name: "Software Heritage",
    description: "Universal archive of software source codes",
    url: "https://www.softwareheritage.org/",
    icon: GitBranch,
  },
];

const gitRepositories = [
  {
    name: "GitLab CIRAD",
    description: "CIRAD software forge for collaborative development",
    url: "https://gitlab.cirad.fr/",
    icon: FaGitlab,
    color: "text-orange-500",
  },
  {
    name: "GitLab IRD",
    description: "IRD source code management platform",
    url: "https://gitlab.ird.fr/",
    icon: FaGitlab,
    color: "text-orange-500",
  },
  {
    name: "Forge INRAE",
    description: "INRAE software forge for research projects",
    url: "https://forge.inrae.fr/",
    icon: FaGitlab,
    color: "text-orange-500",
  },
  {
    name: "GitLab Alliance",
    description: "Alliance of Bioversity & CIAT code repository",
    url: "https://ciatgit.ciat.cgiar.org/",
    icon: FaGitlab,
    color: "text-orange-500",
  },
  {
    name: "GitHub South Green",
    description: "South Green platform GitHub organization",
    url: "https://github.com/SouthGreenPlatform",
    icon: FaGithub,
    color: "text-foreground",
  },
  {
    name: "GitHub Training",
    description: "Training resources and tutorials",
    url: "https://southgreenplatform.github.io/",
    icon: FaGithub,
    color: "text-foreground",
  },
];

const fairResources = [
  {
    name: "FAIR-Checker",
    description: "Tool to verify the FAIR compliance of your digital resources",
    url: "https://fair-checker.france-bioinformatique.fr/",
    icon: Shield,
    buttonLabel: "Check your data",
  },
  {
    name: "GO FAIR",
    description: "International initiative for implementing FAIR principles",
    url: "https://www.go-fair.org/fair-principles/",
    icon: FileCheck,
    buttonLabel: "Learn more",
  },
  {
    name: "bio.tools",
    description: "Registry where our bioinformatics tools are documented and discoverable",
    url: "https://bio.tools/southgreen",
    icon: Database,
    buttonLabel: "View our tools",
  },
  {
    name: "FAIRsharing",
    description: "Registry of standards, databases and policies - our tools are listed here",
    url: "https://fairsharing.org/search?fairsharingRegistry=Database&subjects=genomics&status=ready",
    icon: FileCheck,
    buttonLabel: "Explore registry",
  },
];

export default function OpenScience() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Collaborative Research</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
                Open Science & <span className="text-gradient">Source Codes</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Our commitment to open, reproducible, and collaborative science. 
                Discover our resources for data management, code sharing, and FAIR best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Data Management Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold">Data Management</h2>
                  <p className="text-muted-foreground">Resources for managing and sharing your research data</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {dataManagementResources.map((resource) => (
                  <Card key={resource.name} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <resource.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{resource.name}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Access
                          <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Software & Workflows Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold">Software & Workflows</h2>
                  <p className="text-muted-foreground">Best practices for development and code sharing</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {softwareResources.map((resource) => (
                  <Card key={resource.name} className="group hover:shadow-lg transition-all duration-300 hover:border-accent/30">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <resource.icon className="w-5 h-5 text-accent" />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{resource.name}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full group/btn hover:border-accent hover:text-accent" asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Access
                          <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Git Repositories Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center">
                  <GitBranch className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold">Our Code Repositories</h2>
                  <p className="text-muted-foreground">Access the source codes of our tools and projects</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gitRepositories.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/30 group-hover:scale-[1.02]">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <repo.icon className={`w-8 h-8 ${repo.color}`} />
                          <div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              {repo.name}
                            </CardTitle>
                          </div>
                        </div>
                        <CardDescription className="mt-2">{repo.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors">
                          <span>Visit</span>
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAIR Principles Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold">FAIR Principles</h2>
                  <p className="text-muted-foreground">Findable, Accessible, Interoperable, Reusable</p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-primary text-lg">Findable</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Data should be easy to find with rich metadata and persistent identifiers.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-accent/5 border-accent/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-accent text-lg">Accessible</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Data should be accessible via standardized and open protocols.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-primary text-lg">Interoperable</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Data should use standard vocabularies and formats to be combinable.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-accent/5 border-accent/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-accent text-lg">Reusable</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Data should have clear licenses and documented provenance.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {fairResources.map((resource) => (
                  <Card key={resource.name} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <resource.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{resource.name}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          {resource.buttonLabel}
                          <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
                  Data Management Tips
                </h2>
                <p className="text-muted-foreground">
                  Best practices for reproducible and open research
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</span>
                      Plan from the start
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Write a Data Management Plan (DMP) before starting your project. 
                      Use tools like DMP OPIDoR.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</span>
                      Use open formats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Prefer standard and non-proprietary formats to ensure 
                      long-term accessibility of your data.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">3</span>
                      Document your workflows
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Use tools like Snakemake or Nextflow to create 
                      reproducible and documented workflows.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">4</span>
                      Version your code
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Use Git to version your code and deposit it on an 
                      institutional forge or GitHub with an appropriate license.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">5</span>
                      Deposit to repositories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Archive your datasets in repositories like Zenodo, Dataverse, 
                      or sequence archives (ENA, SRA) for long-term preservation and citability.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">6</span>
                      Use thematic repositories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      At South Green, we deposit genome data to our Genome Hubs 
                      and genetic variants in GIGWA for community access.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">7</span>
                      Consider ABS for DSI
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Keep traceability of sample metadata including sample identifiers 
                      and country of origin to comply with Access and Benefit Sharing regulations for Digital Sequence Information.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
