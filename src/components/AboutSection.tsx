import { CheckCircle, Globe, Microscope, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Collaboration",
    description: "Partnering with research institutions across the Mediterranean and tropical regions",
  },
  {
    icon: Microscope,
    title: "Cutting-Edge Research",
    description: "Supporting genomic research with state-of-the-art bioinformatics tools",
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description: "Offering comprehensive training in bioinformatics and computational biology",
  },
];

const highlights = [
  "Open-source tools and databases",
  "Collaborative research network",
  "Focus on tropical and Mediterranean plants",
  "Support for sustainable agriculture",
  "Training and capacity building",
  "Data sharing and reproducibility",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
              Empowering Plant Science Through{" "}
              <span className="text-gradient">Open Bioinformatics</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              South Green is a collaborative bioinformatics platform dedicated to 
              supporting research on tropical and Mediterranean plants. Founded by 
              leading French research institutions, we provide open-access tools, 
              databases, and training to the global scientific community.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0 shadow-sm">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
