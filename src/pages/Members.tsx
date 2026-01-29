import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2, Tag, GraduationCap, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FileText } from "lucide-react";
import teamPhoto from "@/assets/team-photo.png";

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
  {
    name: "Alexis Dereeper",
    institute: "IRD, UMR PHIM",
    github: "https://github.com/dereeper",
    linkedin: "",
    publications: "https://scholar.google.fr/citations?hl=fr&user=AdM83yUAAAAJ",
  },
  {
    name: "Gaetan Droc",
    institute: "CIRAD, UMR AGAP",
    github: "",
    linkedin: "",
    publications: "https://scholar.google.fr/citations?hl=fr&user=WejXtmAAAAAJ",
  },
  {
    name: "Pierre Larmande",
    institute: "IRD, UMR DIADE",
    github: "https://github.com/pierrelarmande",
    linkedin: "",
    publications: "https://scholar.google.fr/citations?hl=fr&user=BjYnqe8AAAAJ",
  },
  {
    name: "Mathieu Rouard",
    institute: "Alliance Bioversity and CIAT, UMR AGAP",
    github: "",
    linkedin: "https://www.linkedin.com/in/mrouard",
    publications: "https://scholar.google.fr/citations?hl=fr&user=Hjdw95wAAAAJ&view_op=list_works&sortby=pubdate",
  },
];

const technicalLeaders = [
  { name: "Bertrand Pitollat", institute: "CIRAD, UMR AGAP", github: "", linkedin: "", publications: "" },
  { name: "Ndomassi Tando", institute: "IRD, UMR DIADE", github: "", linkedin: "", publications: "" },
];

const teamMembers = [
  {
    name: "Alice Boizet",
    institute: "CIRAD, UMR AGAP",
    github: "https://github.com/aliceboizet",
    linkedin: "",
    publications: "",
    dates: "2020-",
  },
  { name: "Saliha Beddek", institute: "IFB, UMR AGAP", github: "", linkedin: "", publications: "", dates: "2023-" },
  {
    name: "Cathrine Breton",
    institute: "Alliance Bioversity and CIAT, UMR AGAP",
    github: "",
    linkedin: "",
    publications: "",
    dates: "2015-",
  },
  { name: "Aurore Comte", institute: "IRD, UMR PHIM", github: "", linkedin: "", publications: "", dates: "2018-" },
  { name: "Jacques Dainat", institute: "IRD", github: "", linkedin: "", publications: "", dates: "2019-" },
  {
    name: "Jean-François Dufayard",
    institute: "CIRAD, UMR AGAP",
    github: "",
    linkedin: "",
    publications: "",
    dates: "2010-",
  },
  {
    name: "Valentin Guignon",
    institute: "Alliance Bioversity and CIAT, UMR AGAP",
    github: "",
    linkedin: "",
    publications: "",
    dates: "2008-",
  },
  { name: "Fred de Lamotte", institute: "INRAE, UMR AGAP", github: "", linkedin: "", publications: "", dates: "2015-" },
  { name: "David Lopez", institute: "CIRAD, UMR AGAP", github: "", linkedin: "", publications: "", dates: "2020-" },
  { name: "Julie Orjuela", institute: "IRD, UMR DIADE", github: "", linkedin: "", publications: "", dates: "2017-" },
  {
    name: "Vincent Manzanilla",
    institute: "IRD, UMR PHIM",
    github: "",
    linkedin: "",
    publications: "",
    dates: "2022-",
  },
  {
    name: "Guillaume Martin",
    institute: "CIRAD, UMR AGAP",
    github: "",
    linkedin: "",
    publications: "",
    dates: "2015-",
  },
  { name: "Julien Paul", institute: "CIRAD, UMR AGAP", github: "", linkedin: "", publications: "", dates: "2021-" },
  { name: "Sébastien Ravel", institute: "CIRAD, UMR PHIM", github: "", linkedin: "", publications: "", dates: "2012-" },
  { name: "Manuel Ruiz", institute: "CIRAD, UMR AGAP", github: "", linkedin: "", publications: "", dates: "2005-" },
  { name: "François Sabot", institute: "IRD, UMR DIADE", github: "", linkedin: "", publications: "", dates: "2010-" },
  { name: "Gautier Sarah", institute: "INRAE, UMR AGAP", github: "", linkedin: "", publications: "", dates: "2015-" },
  { name: "Guilhem Sempéré", institute: "CIRAD", github: "", linkedin: "", publications: "", dates: "2012-" },
  {
    name: "Stéphanie Sidibe-Bocs",
    institute: "CIRAD, UMR AGAP",
    github: "",
    linkedin: "",
    publications: "",
    dates: "2008-",
  },
  {
    name: "Alexandre Soriano",
    institute: "CIRAD, UMR AGAP",
    github: "",
    linkedin: "",
    publications: "",
    dates: "2020-",
  },
  { name: "Marilyne Summo", institute: "CIRAD, UMR AGAP", github: "", linkedin: "", publications: "", dates: "2018-" },
  {
    name: "Christine Tranchant-Dubreuil",
    institute: "IRD, UMR DIADE",
    github: "",
    linkedin: "",
    publications: "",
    dates: "2010-",
  },
  // Previous members
  { name: "Cecile Fleury", institute: "", github: "", linkedin: "", publications: "", dates: "Past" },
  { name: "Yann Hueber", institute: "", github: "", linkedin: "", publications: "", dates: "Past" },
  { name: "Chantal Hamelin", institute: "", github: "", linkedin: "", publications: "", dates: "Past" },
  { name: "Felix Homa", institute: "", github: "", linkedin: "", publications: "", dates: "Past" },
  { name: "Dominique This", institute: "", github: "", linkedin: "", publications: "", dates: "Past" },
  { name: "Stéphanie Pointet", institute: "", github: "", linkedin: "", publications: "", dates: "Past" },
  { name: "Xavier Argout", institute: "", github: "", linkedin: "", publications: "", dates: "Past" },
  { name: "Enrique Ortega", institute: "", github: "", linkedin: "", publications: "", dates: "Past" },
  { name: "Nordine El Hassouni", institute: "", github: "", linkedin: "", publications: "", dates: "Past" },
  { name: "David Couvin", institute: "", github: "", linkedin: "", publications: "", dates: "Past" },
  { name: "Cédric Farcy", institute: "", github: "", linkedin: "", publications: "", dates: "Past" },
  { name: "Anestis Gkanogiannis", institute: "", github: "", linkedin: "", publications: "", dates: "Past" },
  { name: "Sandy Contreras", institute: "", github: "", linkedin: "", publications: "", dates: "Past" },
];

const students = [
  { name: "Rayane Elmedjadji", degree: "MSc alternant", dates: "2024-" },
  { name: "Michel Gomes", degree: "PhD", dates: "2023-" },
  { name: "Bill Happi", degree: "PhD", dates: "2021-2024" },
  { name: "Romain Vicens", degree: "MSc2", dates: "2024" },
  { name: "Yann Pomie", degree: "MSc2", dates: "2021-2023" },
  { name: "Laurine Jaffret", degree: "MSc2", dates: "2023" },
  { name: "Wafa Aichoune", degree: "MSc2", dates: "2023" },
  { name: "Fadwa El Khaddar", degree: "MSc2", dates: "2023" },
  { name: "Thi-Minh Nguyet Dang", degree: "PhD", dates: "2019-2022" },
  { name: "Eloi Durant", degree: "PhD", dates: "2019-2022" },
  { name: "Marine Salson", degree: "MSc2", dates: "2021" },
  { name: "Adama Ndar", degree: "MSc2", dates: "2021" },
  { name: "Louis Dennu", degree: "MSc2", dates: "2021" },
  { name: "Anais Louis", degree: "MSc2", dates: "2020" },
  { name: "Justine Floret", degree: "MSc2", dates: "2020" },
  { name: "Nastasija Mijovic", degree: "MSc2", dates: "2020" },
  { name: "Clément Agret", degree: "PhD", dates: "2017-2020" },
  { name: "Pierrick Perelle", degree: "IUT", dates: "2020" },
  { name: "Adrien Dufour", degree: "MSc1", dates: "2019" },
  { name: "Sarah Barrière", degree: "IUT", dates: "2019" },
  { name: "Samira Younesy", degree: "IUT", dates: "2019" },
  { name: "Laura Helou", degree: "MSc1", dates: "2015-2016" },
  { name: "Cecile Monat", degree: "PhD", dates: "2013-2016" },
  { name: "Adrien Petel", degree: "MSc2", dates: "2016" },
  { name: "Delphine Lariviere", degree: "PhD", dates: "2012-2015" },
];

type MemberFilter = "current" | "past";

const isCurrentMember = (dates: string) => dates.endsWith("-");

export default function Members() {
  const [studentFilter, setStudentFilter] = useState<MemberFilter>("current");
  const [teamFilter, setTeamFilter] = useState<MemberFilter>("current");

  const filteredStudents = students.filter((student) => {
    if (studentFilter === "current") return isCurrentMember(student.dates);
    return !isCurrentMember(student.dates);
  });

  const filteredTeamMembers = teamMembers.filter((member) => {
    if (teamFilter === "current") return isCurrentMember(member.dates);
    return !isCurrentMember(member.dates);
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        {/* Watermark Background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.15]"
          style={{
            backgroundImage: `url(${teamPhoto})`,
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            filter: "grayscale(100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background z-0" />
        <div className="container mx-auto px-4 relative z-10">
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
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-semibold text-foreground">{leader.name}</h3>
                    {leader.github && (
                      <a
                        href={leader.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FaLinkedin className="w-4 h-4" />
                      </a>
                    )}
                    {leader.publications && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={leader.publications}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <FileText className="w-4 h-4" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Link to publications</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
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
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-semibold text-foreground">{leader.name}</h3>
                    {leader.github && (
                      <a
                        href={leader.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FaLinkedin className="w-4 h-4" />
                      </a>
                    )}
                    {leader.publications && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={leader.publications}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <FileText className="w-4 h-4" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Link to publications</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Members</h2>
            </div>
            <div className="flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={teamFilter === "current" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTeamFilter("current")}
                      className={teamFilter === "current" ? "gradient-hero border-0" : ""}
                    >
                      Current (
                      {scientificLeaders.length +
                        technicalLeaders.length +
                        teamMembers.filter((m) => isCurrentMember(m.dates)).length}
                      )
                      <Info className="w-3 h-3 ml-1 opacity-60" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Scientific Leaders + Technical Leaders + Members</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button
                variant={teamFilter === "past" ? "default" : "outline"}
                size="sm"
                onClick={() => setTeamFilter("past")}
                className={teamFilter === "past" ? "gradient-hero border-0" : ""}
              >
                Past ({teamMembers.filter((m) => !isCurrentMember(m.dates)).length})
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredTeamMembers.map((member) => (
              <Card key={member.name} className="border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FaLinkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.publications && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={member.publications}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <FileText className="w-4 h-4" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Link to publications</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm italic">{member.institute}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Link to detailed profiles */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://southgreenplatform.github.io/staff-info/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium text-sm"
            >
              <Info className="w-4 h-4" />
              View detailed member profiles
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Students */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Students</h2>
            </div>
            <div className="flex gap-2">
              <Button
                variant={studentFilter === "current" ? "default" : "outline"}
                size="sm"
                onClick={() => setStudentFilter("current")}
                className={studentFilter === "current" ? "gradient-hero border-0" : ""}
              >
                Current ({students.filter((s) => isCurrentMember(s.dates)).length})
              </Button>
              <Button
                variant={studentFilter === "past" ? "default" : "outline"}
                size="sm"
                onClick={() => setStudentFilter("past")}
                className={studentFilter === "past" ? "gradient-hero border-0" : ""}
              >
                Past ({students.filter((s) => !isCurrentMember(s.dates)).length})
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredStudents.map((student) => (
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

      <Footer />
    </div>
  );
}
