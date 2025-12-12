import { ArrowRight, Database, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
export function Hero() {
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="DNA and plant genomics visualization" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse-slow" style={{
      animationDelay: '2s'
    }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              IFB-ELIXIR Member Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-up-delayed">
            Advancing Plant & Pathogen Genomics for the{" "}
            <span className="text-gradient">Global South & Mediterranean regions</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up" style={{
          animationDelay: '0.3s'
        }}>
            South Green is a bioinformatics platform dedicated to the genomic resource 
            analysis of southern and Mediterranean plants. We provide tools, databases, 
            and training for the scientific community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{
          animationDelay: '0.4s'
        }}>
            <Button size="lg" className="gradient-hero border-0 shadow-md hover:shadow-glow transition-all group">
              Explore Our Tools
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="shadow-sm">
              View Databases
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 md:gap-12 animate-fade-up" style={{
          animationDelay: '0.5s'
        }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">Genome Hubs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Analysis Tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}