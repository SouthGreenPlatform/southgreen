import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Database, GitBranch, FileCheck, BookOpen, Code2, Workflow, Shield, Users } from "lucide-react";
import { FaGithub, FaGitlab } from "react-icons/fa";

const dataManagementResources = [
  {
    name: "Recherche Data Gouv",
    description: "L'écosystème national pour le partage et l'ouverture des données de recherche françaises",
    url: "https://recherche.data.gouv.fr/fr",
    icon: Database,
  },
  {
    name: "Guide Données de Recherche",
    description: "Nouveau guide pour la gestion des données de recherche",
    url: "https://recherche.data.gouv.fr/fr/actualite/donnees-de-recherche-le-nouveau-guide",
    icon: BookOpen,
  },
  {
    name: "RDMkit",
    description: "Research Data Management toolkit - ressources et bonnes pratiques pour la gestion des données",
    url: "https://rdmkit.elixir-europe.org/",
    icon: FileCheck,
  },
];

const softwareResources = [
  {
    name: "Ouvrir la Science - Codes et Logiciels",
    description: "Guide national sur l'ouverture des codes sources et logiciels de recherche",
    url: "https://www.ouvrirlascience.fr/science-ouverte-codes-et-logiciels/",
    icon: Code2,
  },
  {
    name: "Software Heritage",
    description: "Archive universelle des codes sources logiciels",
    url: "https://www.softwareheritage.org/",
    icon: GitBranch,
  },
];

const gitRepositories = [
  {
    name: "GitLab CIRAD",
    description: "Forge logicielle du CIRAD pour le développement collaboratif",
    url: "https://gitlab.cirad.fr/",
    icon: FaGitlab,
    color: "text-orange-500",
  },
  {
    name: "GitLab IRD",
    description: "Plateforme de gestion de code source de l'IRD",
    url: "https://gitlab.ird.fr/",
    icon: FaGitlab,
    color: "text-orange-500",
  },
  {
    name: "Forge INRAE",
    description: "Forge logicielle de l'INRAE pour les projets de recherche",
    url: "https://forge.inrae.fr/",
    icon: FaGitlab,
    color: "text-orange-500",
  },
  {
    name: "GitHub South Green",
    description: "Organisation GitHub de la plateforme South Green",
    url: "https://github.com/SouthGreenPlatform",
    icon: FaGithub,
    color: "text-foreground",
  },
  {
    name: "GitHub Training",
    description: "Ressources de formation et tutoriels",
    url: "https://southgreenplatform.github.io/",
    icon: FaGithub,
    color: "text-foreground",
  },
];

const fairResources = [
  {
    name: "FAIR-Checker",
    description: "Outil pour vérifier la conformité FAIR de vos ressources numériques",
    url: "https://fair-checker.france-bioinformatique.fr/",
    icon: Shield,
  },
  {
    name: "GO FAIR",
    description: "Initiative internationale pour l'implémentation des principes FAIR",
    url: "https://www.go-fair.org/fair-principles/",
    icon: FileCheck,
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
                Notre engagement pour une science ouverte, reproductible et collaborative. 
                Découvrez nos ressources pour la gestion des données, le partage de code et les bonnes pratiques FAIR.
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
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold">Gestion des Données</h2>
                  <p className="text-muted-foreground">Ressources pour gérer et partager vos données de recherche</p>
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
                          Accéder
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
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold">Logiciels & Workflows</h2>
                  <p className="text-muted-foreground">Bonnes pratiques pour le développement et le partage de code</p>
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
                          Accéder
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
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold">Nos Dépôts de Code</h2>
                  <p className="text-muted-foreground">Accédez aux codes sources de nos outils et projets</p>
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
                          <span>Visiter</span>
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
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold">Principes FAIR</h2>
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
                      Les données doivent être faciles à trouver avec des métadonnées riches et des identifiants persistants.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-accent/5 border-accent/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-accent text-lg">Accessible</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Les données doivent être accessibles via des protocoles standardisés et ouverts.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-primary text-lg">Interoperable</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Les données doivent utiliser des vocabulaires et formats standards pour être combinables.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-accent/5 border-accent/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-accent text-lg">Reusable</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Les données doivent avoir des licences claires et une provenance documentée.
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
                          Vérifier vos données
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
                  Conseils pour la Gestion des Données
                </h2>
                <p className="text-muted-foreground">
                  Bonnes pratiques pour une recherche reproductible et ouverte
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</span>
                      Planifiez dès le début
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Rédigez un Plan de Gestion des Données (DMP) avant de commencer votre projet. 
                      Utilisez des outils comme DMP OPIDoR.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</span>
                      Utilisez des formats ouverts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Privilégiez les formats standards et non propriétaires pour garantir 
                      l'accessibilité à long terme de vos données.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">3</span>
                      Documentez vos workflows
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Utilisez des outils comme Snakemake ou Nextflow pour créer des workflows 
                      reproductibles et documentés.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">4</span>
                      Versionez votre code
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Utilisez Git pour versionner votre code et déposez-le sur une forge 
                      institutionnelle ou GitHub avec une licence appropriée.
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
