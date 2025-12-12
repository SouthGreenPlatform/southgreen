import { Server, HardDrive, Cpu, Zap, ExternalLink } from "lucide-react";
import itropLogo from "@/assets/itrop-logo.png";
import iso9001Logo from "@/assets/iso9001-logo.png";

const hpcClusters = [{
  name: "Meso@LR",
  location: "CINES",
  type: "RENT",
  partner: "CIRAD",
  docUrl: "https://agap.gitlab.cirad.fr/cluster/documentation/fr/",
  showItrop: false,
  specs: {
    cores: "2104 cores",
    nodes: ["70 standard nodes", "2 bigmem nodes", "1 GPU node"],
    storage: "700 To replicated storage"
  }
}, {
  name: "CINES",
  location: "IRD",
  type: "HOSTEL",
  partner: "IRD",
  docUrl: "https://bioinfo.ird.fr/index.php/cluster-fr/",
  showItrop: true,
  specs: {
    cores: "1148 cores",
    nodes: ["32 standard nodes", "1 supermem node", "1 GPU node"],
    storage: "800 To (SAN) + 210 To scratch"
  }
}];
export function HPCSection() {
  return <section id="hpc" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Server className="w-4 h-4" />
            High Performance Computing
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Computing <span className="text-gradient">Infrastructure</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The platform has privileged access to two HPC clusters providing 400+ users with 600+ bioinformatics tools.</p>
        </div>

        {/* HPC Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {hpcClusters.map((cluster, index) => <div key={cluster.name} className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              {/* Type Badge */}
              <div className="absolute -top-3 left-6">
                
              </div>

              {/* Partner Badge */}
              <div className="absolute -top-3 right-6 flex items-center gap-2">
                {cluster.showItrop && (
                  <>
                    <img src={iso9001Logo} alt="ISO 9001" className="h-8 w-auto" />
                    <img src={itropLogo} alt="i-Trop" className="h-8 w-auto" />
                  </>
                )}
                <span className="px-4 py-1 rounded-full text-sm font-medium bg-secondary text-muted-foreground border border-border">
                  {cluster.partner}
                </span>
              </div>

              <div className="mt-4">
                {/* Cluster Name */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cluster.name}
                    <span className="text-muted-foreground text-lg font-normal ml-2">
                      @ {cluster.location}
                    </span>
                  </h3>
                  <a 
                    href={cluster.docUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    title="Documentation"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Specs */}
                <div className="space-y-4">
                  {/* Cores */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">{cluster.specs.cores}</span>
                  </div>

                  {/* Nodes */}
                  <div className="pl-13 space-y-2">
                    {cluster.specs.nodes.map((node, i) => <div key={i} className="flex items-center gap-2 text-muted-foreground">
                        <Zap className="w-4 h-4 text-primary/60" />
                        <span>{node}</span>
                      </div>)}
                  </div>

                  {/* Storage */}
                  
                </div>
              </div>
            </div>)}
        </div>

        {/* Bottom Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">400+</p>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">600+</p>
            <p className="text-sm text-muted-foreground">Tools Available</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">SLURM</p>
            <p className="text-sm text-muted-foreground">Workload Manager</p>
          </div>
        </div>
      </div>
    </section>;
}