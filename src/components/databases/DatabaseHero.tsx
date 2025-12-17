import { Database, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function DatabaseHero() {
  return <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-pulse-slow" style={{
      animationDelay: "2s"
    }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Database className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Databases and Tools</span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Genome Hubs & <span className="text-gradient">Analysis Tools</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our integrated information systems for tropical and Mediterranean plants, featuring genome browsers,
            pangenomic visualization, and high-performance analysis workflows.
          </p>

          {/* Search Bar */}
          <div className="flex gap-3 max-w-lg mx-auto mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input type="text" placeholder="Search databases and tools..." className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            </div>
            <Button className="gradient-hero border-0 px-6">Search</Button>
          </div>

          {/* Quick Stats */}
          <div className="flex justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-semibold text-foreground">8</p>
              <p className="text-sm text-muted-foreground">Genome Hubs</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="text-3xl font-semibold text-foreground">13+</p>
              <p className="text-sm text-muted-foreground">Tools</p>
            </div>
            <div className="w-px bg-border" />
            <div></div>
          </div>
        </div>
      </div>
    </section>;
}