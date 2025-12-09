const partners = [
  { name: "CIRAD", description: "French Agricultural Research Centre for International Development" },
  { name: "INRAE", description: "French National Research Institute for Agriculture" },
  { name: "IRD", description: "French National Research Institute for Sustainable Development" },
  { name: "Bioversity", description: "Bioversity International" },
  { name: "SupAgro", description: "Montpellier SupAgro" },
];

const networks = [
  { name: "IBISA", description: "Infrastructure in Biology, Health and Agronomy" },
  { name: "IFB", description: "French Institute of Bioinformatics" },
  { name: "ReNaBi", description: "National Network of Bioinformatics Platforms" },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Network
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Trusted by Leading Institutions
          </h2>
          <p className="text-muted-foreground">
            Collaborating with major research organizations to advance plant genomics research.
          </p>
        </div>

        {/* Partners */}
        <div className="mb-16">
          <h3 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Founding Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
              >
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {partner.name}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Networks */}
        <div>
          <h3 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Member of Networks
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {networks.map((network) => (
              <div
                key={network.name}
                className="px-8 py-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <span className="font-medium text-foreground">{network.name}</span>
                <span className="text-muted-foreground text-sm ml-2">• {network.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
