import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const keywords = [
  "NGS Data Analysis",
  "Web portals",
  "Pangenomics",
  "High performance computing",
  "Variant calling",
  "Data visualization",
  "Sequence analysis",
  "Knowledge representation",
  "Phylogenomics",
  "Workflow development",
];

const scientificLeaders = [
  { name: "Alexis Dereeper", institute: "IRD, UMR PHIM" },
  { name: "Gaetan Droc", institute: "CIRAD, UMR AGAP" },
  { name: "Pierre Larmande", institute: "IRD, UMR DIADE" },
  { name: "Mathieu Rouard", institute: "Alliance Bioversity and CIAT, UMR AGAP" },
];

const technicalLeaders = [
  { name: "Bertrand Pitollat", institute: "CIRAD, UMR AGAP" },
  { name: "Ndomassi Tando", institute: "IRD, UMR DIADE" },
];

const teamMembers = [
  { name: "Boizet Alice", institute: "CIRAD, UMR AGAP" },
  { name: "Breton Cathrine", institute: "Alliance Bioversity and CIAT, UMR AGAP" },
  { name: "Dainat Jacques", institute: "IRD" },
  { name: "Dufayard Jean-François", institute: "CIRAD, UMR AGAP" },
  { name: "Guignon Valentin", institute: "Alliance Bioversity and CIAT, UMR AGAP" },
  { name: "Lopez David", institute: "CIRAD, UMR AGAP" },
  { name: "Orjuela Julie", institute: "IRD, UMR DIADE" },
  { name: "Paul Julien", institute: "CIRAD, UMR AGAP" },
  { name: "Ravel Sébastien", institute: "CIRAD, UMR PHIM" },
  { name: "Ruiz Manuel", institute: "CIRAD, UMR AGAP" },
  { name: "Sabot François", institute: "IRD, UMR DIADE" },
  { name: "Sarah Gautier", institute: "INRAE, UMR AGAP" },
  { name: "Sempéré Guilhem", institute: "CIRAD" },
  { name: "Sidibe-Bocs Stéphanie", institute: "CIRAD, UMR AGAP" },
  { name: "Soriano Alexandre", institute: "CIRAD, UMR AGAP" },
  { name: "Summo Marilyne", institute: "CIRAD, UMR AGAP" },
  { name: "Tranchant-Dubreuil Christine", institute: "IRD, UMR DIADE" },
];

export default function Members() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Our Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Members</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              The South Green Bioinformatics Platform brings together experts from multiple research institutes, working
              collaboratively to advance plant and pathogen genomics.
            </p>
          </div>
        </div>
      </section>

      {/* Keywords Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Tag className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Scientific and Technical Expertise</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {keywords.map((keyword) => (
              <Badge
                key={keyword}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-background border border-border hover:border-primary/30 transition-colors"
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Leaders */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Scientific Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {scientificLeaders.map((leader) => (
              <Card key={leader.name} className="border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{leader.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm italic">{leader.institute || "Institute placeholder"}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Leaders */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Technical Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {technicalLeaders.map((leader) => (
              <Card key={leader.name} className="border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{leader.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm italic">{leader.institute || "Institute placeholder"}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Team</h2>
          </div>
          <Card className="border-border">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <span className="text-foreground font-medium">{member.name}</span>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="w-3 h-3" />
                        <span className="text-xs italic">{member.institute || "Institute placeholder"}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
