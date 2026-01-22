import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExternalLink, BookOpen, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Training = () => {
  const externalUrl = "https://southgreenplatform.github.io/trainings/";

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm font-medium">Training & Education</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                <span className="text-primary">Training</span> Resources
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Access comprehensive training materials, tutorials, and workshops for bioinformatics tools and analysis
                pipelines.
              </p>

              <Button
                size="lg"
                className="gradient-hero border-0 shadow-lg hover:shadow-glow transition-all gap-2"
                onClick={() => window.open(externalUrl, "_blank")}
              >
                <span>Access Training Portal</span>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">University Courses</h3>
                <p className="text-muted-foreground text-sm">Modules in Masters programs.</p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Local and National Courses</h3>
                <p className="text-muted-foreground text-sm">
                  Hands-on courses and practical sessions for researchers in French research organisations.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Capacity Building in the South</h3>
                <p className="text-muted-foreground text-sm">
                  Hands-on courses and practical sessions for researchers and students from the Global South.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                You will be redirected to our training portal for full access to all resources.
              </p>
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                {externalUrl}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Upcoming Events</h2>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <p className="text-muted-foreground text-lg">None</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Training;
