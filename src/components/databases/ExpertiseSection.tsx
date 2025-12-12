import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Building } from "lucide-react";
const keywords = ["NGS Data Analysis", "Web Portals", "Pangenomics", "High Performance Computing", "Variant Calling", "Data Visualization", "Sequence Analysis", "Knowledge Representation", "Phylogenomics", "Workflow Development"];
const leaders = {
  scientific: [{
    name: "Alexis Dereeper",
    role: "Scientific Leader"
  }, {
    name: "Gaetan Droc",
    role: "Scientific Leader"
  }, {
    name: "Pierre Larmande",
    role: "Scientific Leader"
  }, {
    name: "Mathieu Rouard",
    role: "Scientific Leader"
  }],
  technical: [{
    name: "Bertrand Pitollat",
    role: "Technical Leader"
  }, {
    name: "Ndomassi Tando",
    role: "Technical Leader"
  }]
};
const funders = ["Alliance of Bioversity International and CIAT", "IRD", "INRAE", "CIRAD"];
export function ExpertiseSection() {
  return <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Expertise & Keywords */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
              Specialized Knowledge Areas
            </h2>
            <p className="text-muted-foreground mb-8">
              Genomic analysis of plants and their pathogens, including genome assembly, 
              phylogenomics, GWAS, and transcriptomics. We develop reproducible workflows 
              (SnakeMake, Galaxy) and support the management, annotation, and curation of 
              biological data. Experts in the visualization of genomic and pangenomic data.
            </p>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2 mb-8">
              {keywords.map(keyword => <Badge key={keyword} variant="secondary" className="px-3 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                  {keyword}
                </Badge>)}
            </div>

            {/* Certification */}
            <Card className="border-primary/20 bg-primary/5">
              
            </Card>
          </div>

          {/* Right: Team & Funders */}
          
        </div>
      </div>
    </section>;
}