import { Building2, FlaskConical, Users, Network } from "lucide-react";
const institutes = [{
  name: "Alliance Bioversity & CIAT",
  type: "International"
}, {
  name: "IRD",
  fullName: "Institut de Recherche pour le Développement"
}, {
  name: "CIRAD",
  fullName: "Centre de coopération internationale en recherche agronomique"
}, {
  name: "INRAE",
  fullName: "Institut national de recherche pour l'agriculture"
}];
const researchUnits = [{
  name: "DIADE",
  description: "Diversité, Adaptation et Développement des plantes"
}, {
  name: "PHIM",
  description: "Plant Health Institute of Montpellier"
}, {
  name: "AGAP",
  description: "Amélioration Génétique et Adaptation des Plantes"
}];
export function AboutSection() {
  return <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Network className="w-4 h-4" />
            About Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            A Collaborative <span className="text-gradient">Research Network</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            South Green is a bioinformatics platform born from the collaboration of leading French research 
            institutions, dedicated to supporting genomic research on tropical and Mediterranean plants.
          </p>
        </div>

        {/* Network Structure */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Institutes Card */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">4 Institutes</h3>
                <p className="text-sm text-muted-foreground">Founding Partners</p>
              </div>
            </div>
            <div className="space-y-4">
              {institutes.map(institute => <div key={institute.name} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{institute.name}</p>
                    {institute.fullName && <p className="text-xs text-muted-foreground">{institute.fullName}</p>}
                    {institute.type && <span className="text-xs text-primary">{institute.type}</span>}
                  </div>
                </div>)}
            </div>
          </div>

          {/* Research Units Card */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">3 Research Units</h3>
                <p className="text-sm text-muted-foreground">UMR </p>
              </div>
            </div>
            <div className="space-y-4">
              {researchUnits.map(unit => <div key={unit.name} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <FlaskConical className="w-5 h-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{unit.name}</p>
                    <p className="text-xs text-muted-foreground">{unit.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            Together, our network provides <span className="text-foreground font-medium">open-source tools</span>, 
            {" "}<span className="text-foreground font-medium">genomic databases</span>, and 
            {" "}<span className="text-foreground font-medium">training programs</span> to support 
            sustainable agriculture and biodiversity conservation in the Global South and Mediterranean regions.
          </p>
        </div>
      </div>
    </section>;
}