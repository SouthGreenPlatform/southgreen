import { ExternalLink, Archive, Database, Dna, FlaskConical, Settings, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
const legacyTools = [
  {
    name: "TropGene",
    description: "Database for tropical crop genetic resources and molecular data.",
    link: "http://tropgenedb.cirad.fr",
    icon: Database,
    color: "from-slate-500 to-slate-600",
  },
  {
    name: "OryGenesDB",
    description: "Database dedicated to rice functional genomics with gene and mutant information.",
    link: "https://orygenesdb.cirad.fr",
    icon: Dna,
    color: "from-slate-500 to-slate-600",
  },
  {
    name: "Oryzatagline",
    description: "Rice T-DNA insertion mutant database for functional genomics studies.",
    link: "https://oryzatagline.cirad.fr/",
    icon: FlaskConical,
    color: "from-slate-500 to-slate-600",
  },
  {
    name: "EstTik",
    description: "EST database is a tool dedicated to the analysis and annotation of cDNA raw data",
    link: "http://esttik.cirad.fr/",
    icon: Database,
    color: "from-slate-500 to-slate-600",
  },
  {
    name: "ChadoController",
    description: "Tool for managing and controlling Chado database instances.",
    link: "https://www.gnpannot.org/content/chado-controller",
    icon: Settings,
    color: "from-slate-500 to-slate-600",
  },
];

export { legacyTools };

interface LegacyToolsSectionProps {
  searchQuery?: string;
}

export function LegacyToolsSection({ searchQuery = "" }: LegacyToolsSectionProps) {
  const filteredTools = searchQuery
    ? legacyTools.filter((tool) => tool.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : legacyTools;

  if (searchQuery && filteredTools.length === 0) {
    return null;
  }

  return (
    <section id="legacy-tools" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            <Archive className="w-4 h-4" />
            Legacy Tools
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-muted-foreground">
            Legacy Tools (Not Supported Anymore)
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-6">
            These tools are no longer actively maintained but remain accessible for reference and historical data
            access.
          </p>
          <Alert variant="destructive" className="max-w-2xl bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400">
            <AlertTriangle className="h-4 w-4 !text-amber-600 dark:!text-amber-400" />
            <AlertDescription className="text-amber-700 dark:text-amber-400">
              These legacy tools may contain broken links, outdated data, or deprecated functionality. Use with caution.
            </AlertDescription>
          </Alert>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool) => (
            <a key={tool.name} href={tool.link} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="h-full border-border/30 bg-card/50 backdrop-blur-sm hover:border-muted-foreground/30 hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 opacity-80 hover:opacity-100">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-sm`}
                    >
                      <tool.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="font-heading text-lg group-hover:text-muted-foreground transition-colors flex items-center gap-2">
                    {tool.name}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <span className="text-sm text-muted-foreground font-medium group-hover:underline">
                    Access Archive →
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
