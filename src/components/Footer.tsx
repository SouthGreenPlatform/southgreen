import { Dna, Mail, MapPin, ExternalLink } from "lucide-react";
const quickLinks = [{
  label: "Home",
  href: "#home"
}, {
  label: "Tools",
  href: "#tools"
}, {
  label: "Databases",
  href: "#databases"
}, {
  label: "Training",
  href: "#training"
}, {
  label: "About",
  href: "#about"
}];
const resources = [{
  label: "Documentation",
  href: "#"
}, {
  label: "GitHub",
  href: "https://github.com/SouthGreenPlatform"
}, {
  label: "Publications",
  href: "#"
}, {
  label: "News",
  href: "#"
}];
export function Footer() {
  return <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                <Dna className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-heading text-xl font-semibold">South <span className="text-primary">Green</span>
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              South Green is a bioinformatics platform dedicated to the genomic 
              resource analysis of southern and Mediterranean plants.
            </p>
            <div className="space-y-3">
              <a href="mailto:contact@southgreen.fr" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors">

pf-southgreen@groupes.france-bioinformatique.fr<Mail className="w-4 h-4" />
                contact@southgreen.fr
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                Montpellier, France
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map(link => <li key={link.label}>
                  <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-primary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1">
                    {link.label}
                    {link.href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} South Green Bioinformatics Platform.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>;
}