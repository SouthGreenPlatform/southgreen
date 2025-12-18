import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Database,
  Download,
  Github,
  Server,
  BarChart3,
  Share2,
  FileSearch,
  Monitor,
  Apple,
  Terminal,
  Container,
  BookOpen,
  Users,
  Zap,
} from "lucide-react";
import ebsLogo from "@/assets/ebs-logo.png";

const liveInstances = [
  {
    name: "CIRAD Instance",
    url: "https://gigwa.southgreen.fr/",
    description: "Various species data",
  },
  {
    name: "Alliance Bioversity and CIAT Instance",
    url: "https://www.crop-diversity.org/gigwa/",
    description: "Musa data",
  },
  {
    name: "Australian Grains Genebank Instance",
    url: "https://gigwa.plantinformatics.io/gigwa/",
    description: "Cereals data",
  },
  {
    name: "GDR Rosaceae",
    url: "https://gigwa.rosaceae.org/gigwa/",
    description: "Rosaceae data",
  },
  {
    name: "CGIAR Genebanks",
    url: "https://gigwa.cgiar.org/",
    description: "Multicrop data",
  },
  {
    name: "PeanutBase",
    url: "https://www.peanutbase.org/gigwa/",
    description: "Peanut data",
  },
];

const features = [
  {
    icon: BarChart3,
    title: "Real-time Statistics",
    description: "MAF, Fst, Tajima's D graph calculation & display",
  },
  {
    icon: FileSearch,
    title: "Data Exploration",
    description: "Embedded Flapjack-Bytes and IGV.js viewers",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Simple interface to dump/restore databases",
  },
  {
    icon: Share2,
    title: "Multiple Standards",
    description: "BrAPI, GA4GH, SNiPlay, Galaxy & Flapjack connectivity",
  },
];

const downloads = [
  { version: "v2.9-RELEASE", isLatest: true },
  { version: "v2.8-RELEASE" },
  { version: "v2.7-RELEASE" },
  { version: "v2.6.1-RELEASE" },
];

const teamMembers = {
  referents: ["Guilhem Sempéré"],
  members: ["Alice Boizet", "Mathieu Rouard", "Pierre Larmande", "Valentin Guignon", "Catherine Breton"],
};

export default function Gigwa() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-primary/30 bg-primary/5">
              <Database className="w-4 h-4 mr-2" />
              Genotyping Data Management
            </Badge>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Gigwa</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Easily manage, share, explore & visualize NGS genotyping data
            </p>

            <p className="text-lg text-muted-foreground/80 mb-8 max-w-3xl mx-auto">
              A web-based tool providing an intuitive way to explore large amounts of genotyping data by filtering based
              on variant features, functional annotations, and genotype patterns.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gradient-hero border-0 shadow-md hover:shadow-glow transition-all" asChild>
                <a href="https://gigwa.southgreen.fr/" target="_blank" rel="noopener noreferrer">
                  Try Gigwa Online
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/SouthGreenPlatform/Gigwa2" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 w-4 h-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Recent Features</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Powerful capabilities for managing and exploring high-density genotyping data
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Instances Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Live Instances</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Try the latest version online with public datasets or upload your own data
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {liveInstances.map((instance, index) => (
              <Card
                key={index}
                className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <CardHeader className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Server className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{instance.name}</CardTitle>
                  <CardDescription>{instance.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <a href={instance.url} target="_blank" rel="noopener noreferrer">
                      Access Instance
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Downloads & Installation</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Multiple installation options available for all platforms
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Docker */}
            <Card className="bg-card border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Container className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle>Docker Container</CardTitle>
                    <CardDescription>Recommended for production</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Get the docker-compose file from the GitHub repository for easy deployment.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://hub.docker.com/r/guilhemsempere/gigwa" target="_blank" rel="noopener noreferrer">
                    View on DockerHub
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Webapp */}
            <Card className="bg-card border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Download className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <CardTitle>Webapp Archive</CardTitle>
                    <CardDescription>Java EE web-application</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {downloads.map((dl, index) => (
                    <Badge
                      key={index}
                      variant={dl.isLatest ? "default" : "secondary"}
                      className="cursor-pointer hover:bg-primary/80 transition-colors"
                    >
                      <a
                        href={`https://github.com/SouthGreenPlatform/Gigwa2/releases/download/${dl.version.replace("v", "")}/Gigwa_${dl.version.replace("v", "V")}_Webapp.zip`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        {dl.version}
                        {dl.isLatest && <span className="text-xs">(Latest)</span>}
                      </a>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Windows Bundle */}
            <Card className="bg-card border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle>Windows 7+ 64bit</CardTitle>
                    <CardDescription>Contains JRE, Apache Tomcat and MongoDB</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    {
                      version: "v2.9-RELEASE",
                      url: "https://github.com/SouthGreenPlatform/Gigwa2/releases/download/2.9-RELEASE/Gigwa_V2.9-RELEASE_bundle_creation_windows.ps1",
                      isScript: true,
                    },
                    {
                      version: "v2.8-RELEASE",
                      url: "https://github.com/SouthGreenPlatform/Gigwa2/releases/download/2.8-RELEASE/Gigwa_V2.8-RELEASE_bundle_creation_windows.ps1",
                      isScript: true,
                    },
                    {
                      version: "v2.7-RELEASE",
                      url: "https://github.com/SouthGreenPlatform/Gigwa2/releases/download/2.7-RELEASE/Gigwa_V2.7-RELEASE_bundle_creation_windows.ps1",
                      isScript: true,
                    },
                  ].map((item, index) => (
                    <Badge
                      key={index}
                      variant={index === 0 ? "default" : "secondary"}
                      className="cursor-pointer hover:bg-primary/80 transition-colors text-xs"
                    >
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.version}
                        {item.isScript ? " (script)" : ""}
                      </a>
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">Log in as gigwadmin / nimda after install</p>
              </CardContent>
            </Card>

            {/* macOS Bundle */}
            <Card className="bg-card border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center">
                    <Apple className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <CardTitle>OSX 10.11+</CardTitle>
                    <CardDescription>Contains JRE, Apache Tomcat and MongoDB</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    {
                      version: "v2.9-RELEASE",
                      url: "https://github.com/SouthGreenPlatform/Gigwa2/releases/download/2.9-RELEASE/Gigwa_V2.9-RELEASE_bundle_creation_osx.command",
                      isScript: true,
                    },
                    {
                      version: "v2.8-RELEASE",
                      url: "https://github.com/SouthGreenPlatform/Gigwa2/releases/download/2.8-RELEASE/Gigwa_V2.8-RELEASE_bundle_creation_osx.command",
                      isScript: true,
                    },
                    {
                      version: "v2.7-RELEASE",
                      url: "https://github.com/SouthGreenPlatform/Gigwa2/releases/download/2.7-RELEASE/Gigwa_V2.7-RELEASE_bundle_creation_osx.command",
                      isScript: true,
                    },
                  ].map((item, index) => (
                    <Badge
                      key={index}
                      variant={index === 0 ? "default" : "secondary"}
                      className="cursor-pointer hover:bg-primary/80 transition-colors text-xs"
                    >
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.version}
                        {item.isScript ? " (script)" : ""}
                      </a>
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Log in as gigwadmin / nimda after install.{" "}
                  <a
                    href="https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    OSX users must be aware of this
                  </a>
                </p>
              </CardContent>
            </Card>

            {/* Ubuntu 18+ Bundle */}
            <Card className="bg-card border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Terminal className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <CardTitle>Ubuntu 18+</CardTitle>
                    <CardDescription>Contains JRE, Apache Tomcat and MongoDB</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    {
                      version: "v2.9-RELEASE",
                      url: "https://github.com/SouthGreenPlatform/Gigwa2/releases/download/2.9-RELEASE/Gigwa_V2.9-RELEASE_bundle_creation_ubuntu.sh",
                      isScript: true,
                    },
                    {
                      version: "v2.8-RELEASE",
                      url: "https://github.com/SouthGreenPlatform/Gigwa2/releases/download/2.8-RELEASE/Gigwa_V2.8-RELEASE_bundle_creation_ubuntu.sh",
                      isScript: true,
                    },
                    {
                      version: "v2.7-RELEASE",
                      url: "https://github.com/SouthGreenPlatform/Gigwa2/releases/download/2.7-RELEASE/Gigwa_V2.7-RELEASE_bundle_creation_ubuntu.sh",
                      isScript: true,
                    },
                  ].map((item, index) => (
                    <Badge
                      key={index}
                      variant={index === 0 ? "default" : "secondary"}
                      className="cursor-pointer hover:bg-primary/80 transition-colors text-xs"
                    >
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.version}
                        {item.isScript ? " (script)" : ""}
                      </a>
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">Log in as gigwadmin / nimda after install</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources & Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Resources */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="w-7 h-7 text-primary" />
                Resources
              </h2>
              <div className="space-y-3">
                <a
                  href="https://github.com/SouthGreenPlatform/gigwa/wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/50 hover:bg-secondary/50 transition-all group"
                >
                  <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>Release Notes</span>
                </a>
                <a
                  href="https://github.com/SouthGreenPlatform/gigwa/blob/master/README.md#administration-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/50 hover:bg-secondary/50 transition-all group"
                >
                  <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>Administration Guide (v1)</span>
                </a>
                <a
                  href="https://southgreen.fr/sites/southgreen.fr/files/uploads/gigwa_releases/howto_gigwa_rapidnj_taxonium.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/50 hover:bg-secondary/50 transition-all group"
                >
                  <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>Gigwa v2 Source Code</span>
                </a>
              </div>
            </div>

            {/* Team */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-7 h-7 text-primary" />
                Team
              </h2>
              <Card className="bg-card border-border/50">
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Referents
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {teamMembers.referents.map((member, index) => (
                        <Badge key={index} variant="default" className="px-3 py-1">
                          {member}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Members
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {teamMembers.members.map((member, index) => (
                        <Badge key={index} variant="secondary" className="px-3 py-1">
                          {member}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      <strong>Funding:</strong> This project was funded by Agropolis Fondation under the reference ID
                      ARCAD 0900-001.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by Gigwa Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 flex items-center justify-center gap-3">
            <Zap className="w-8 h-8 text-primary" />
            Powered by Gigwa
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Tools and platforms that leverage Gigwa for genotyping data management
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg group">
              <CardHeader className="text-center">
                <div className="h-16 flex items-center justify-center mx-auto mb-4">
                  <img
                    src={ebsLogo}
                    alt="Enterprise Breeding System logo"
                    className="h-12 object-contain"
                  />
                </div>
                <CardTitle className="text-xl">Enterprise Breeding System</CardTitle>
                <CardDescription>
                  A comprehensive digital platform for modern breeding programs, integrating genotyping data management powered by Gigwa
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <a href="https://ebs.excellenceinbreeding.org/" target="_blank" rel="noopener noreferrer">
                    Visit EBS
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
