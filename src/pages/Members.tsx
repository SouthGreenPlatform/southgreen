import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2 } from "lucide-react";

const scientificLeaders = [
  { name: "Alexis Dereeper", institute: "" },
  { name: "Gaetan Droc", institute: "" },
  { name: "Pierre Larmande", institute: "" },
  { name: "Mathieu Rouard", institute: "" },
];

const technicalLeaders = [
  { name: "Bertrand Pitollat", institute: "" },
  { name: "Ndomassi Tando", institute: "" },
];

const teamMembers = [
  { name: "Boizet Alice", institute: "" },
  { name: "Breton Cathrine", institute: "" },
  { name: "Orjuela Julie", institute: "" },
  { name: "Dereeper Alexis", institute: "" },
  { name: "Dainat Jacques", institute: "" },
  { name: "Ruiz Manuel", institute: "" },
  { name: "Sarah Gautier", institute: "" },
  { name: "Tranchant-Dubreuil Christine", institute: "" },
  { name: "Soriano Alexandre", institute: "" },
  { name: "Paul Julien", institute: "" },
  { name: "Guignon Valentin", institute: "" },
  { name: "Sidibe-Bocs Stéphanie", institute: "" },
  { name: "Droc Gaetan", institute: "" },
  { name: "Dufayard Jean-François", institute: "" },
  { name: "Larmande Pierre", institute: "" },
  { name: "Ravel Sébastien", institute: "" },
  { name: "Sabot François", institute: "" },
  { name: "Rouard Mathieu", institute: "" },
  { name: "Sempéré Guilhem", institute: "" },
  { name: "Summo Marilyne", institute: "" },
  { name: "Tando Ndomassi", institute: "" },
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
              The South Green Bioinformatics Platform brings together experts from multiple research institutes, 
              working collaboratively to advance plant and pathogen genomics.
            </p>
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
                  <h3 className="font-semibold text-foreground mb-1">{leader.name}</h3>
                  <p className="text-sm text-primary mb-3">Scientific Leader</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm italic">
                      {leader.institute || "Institute placeholder"}
                    </span>
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
                  <h3 className="font-semibold text-foreground mb-1">{leader.name}</h3>
                  <p className="text-sm text-primary mb-3">Technical Leader</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm italic">
                      {leader.institute || "Institute placeholder"}
                    </span>
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
                  <div key={member.name} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <span className="text-foreground font-medium">{member.name}</span>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="w-3 h-3" />
                        <span className="text-xs italic">
                          {member.institute || "Institute placeholder"}
                        </span>
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
