import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2, Tag, GraduationCap, UserMinus } from "lucide-react";
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
  "Mosaic genomes",
  "Plants and Pathogens",
  "Genome Assembly and annotation",
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
  { name: "Alice Boizet ", institute: "CIRAD, UMR AGAP" },
  { name: "Saliha Beddek ", institute: "IFB, UMR AGAP" },
  { name: "Cathrine Breton ", institute: "Alliance Bioversity and CIAT, UMR AGAP" },
  { name: "Aurore Comte", institute: "IRD, UMR PHIM" },
  { name: "Jacques Dainat", institute: "IRD" },
  { name: "Jean-François Dufayard ", institute: "CIRAD, UMR AGAP" },
  { name: "Valentin Guignon", institute: "Alliance Bioversity and CIAT, UMR AGAP" },
  { name: "Fred de Lamotte ", institute: "INRAE, UMR AGAP" },
  { name: "David Lopez ", institute: "CIRAD, UMR AGAP" },
  { name: "Julie Orjuela ", institute: "IRD, UMR DIADE" },
  { name: "Vincent Manzanilla", institute: "IRD, UMR PHIM" },
  { name: "Guillaume Martin ", institute: "CIRAD, UMR AGAP" },
  { name: "Julien Paul ", institute: "CIRAD, UMR AGAP" },
  { name: "Sébastien Ravel ", institute: "CIRAD, UMR PHIM" },
  { name: "Manuel Ruiz ", institute: "CIRAD, UMR AGAP" },
  { name: "François Sabot ", institute: "IRD, UMR DIADE" },
  { name: "Gautier Sarah ", institute: "INRAE, UMR AGAP" },
  { name: "Guilhem Sempéré ", institute: "CIRAD" },
  { name: "Stéphanie Sidibe-Bocs ", institute: "CIRAD, UMR AGAP" },
  { name: "Alexandre Soriano ", institute: "CIRAD, UMR AGAP" },
  { name: "Marilyne Summo ", institute: "CIRAD, UMR AGAP" },
  { name: "Christine Tranchant-Dubreuil ", institute: "IRD, UMR DIADE" },
];

const students = [
  { name: "Bill Happi", degree: "PhD", dates: "2021-2024" },
  { name: "Michel Gomez", degree: "PhD", dates: "2023-" },
  { name: "Yann Pomie", degree: "MSc2", dates: "2021-2023" },
  { name: "Thi-Minh Nguyet Dang", degree: "PhD", dates: "2019-2022" },
  { name: "Marine Salson", degree: "MSc2", dates: "2021" },
  { name: "Anais Louis", degree: "MSc2", dates: "2020" },
  { name: "Justine Fleuret", degree: "MSc2", dates: "2020" },
  { name: "Nastasija Mijovic", degree: "MSc2", dates: "2020" },
  { name: "Clément Agret", degree: "PhD", dates: "2017-2020" },
  { name: "Eloi Durant", degree: "PhD", dates: "2019-2022" },
  { name: "Cecile Monat", degree: "PhD", dates: "2013-2016" },
  { name: "Delphine Lariviere", degree: "PhD", dates: "2012-2015" },
];

const previousMembers = [
  "Cecile Fleury",
  "Yann Hueber",
  "Chantal Hamelin",
  "Felix Homa",
  "Dominique This",
  "Stéphanie Pointet",
  "Xavier Argout",
  "Enrique Ortega",
  "Nordine El Hassouni",
  "David Couvin",
  "Cédric Farcy",
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

      {/* Students */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Students</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {students.map((student) => (
              <Card key={student.name} className="border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{student.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-sm">{student.degree}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{student.dates}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Members */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <UserMinus className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Previous Members</h2>
          </div>
          <Card className="border-border">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {previousMembers.map((member) => (
                  <div
                    key={member}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <span className="text-muted-foreground">•</span>
                    <span className="text-foreground">{member}</span>
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
