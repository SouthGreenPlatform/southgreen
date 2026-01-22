import { Mail, MapPin, ExternalLink, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import ifbElixirLogos from "@/assets/ifb-elixir-logos.png";

declare const __BUILD_DATE__: string | undefined;

const formatBuildDate = () => {
  try {
    if (typeof __BUILD_DATE__ === "undefined") {
      return new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    const date = new Date(__BUILD_DATE__);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "Unknown";
  }
};

const quickLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Databases & Tools",
    href: "./databases",
  },
  {
    label: "Training",
    href: "./training",
  },
  {
    label: "About",
    href: "#about",
  },
];
const resources = [
  {
    label: "GitHub",
    href: "https://github.com/SouthGreenPlatform",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/south-green-bioinformatics-platform",
  },
  {
    label: "Publications",
    href: "./publications",
  },
];
export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Platform Info */}
          <div className="lg:col-span-2">
            <img
              src={ifbElixirLogos}
              alt="IFB and Elixir France logos"
              className="h-12 bg-white/90 rounded px-3 py-1 mb-4"
            />
            <p className="text-primary-foreground/70 mb-4 max-w-md">
              South Green is a bioinformatics platform dedicated to the genomic resource analysis of southern and
              Mediterranean plants. South Green is a member platform of IFB-ELIXIR.
            </p>
            <a
              href="https://www.ifb-elixir.fr/ifb-elixir-fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-6 hover:opacity-80 transition-opacity"
            ></a>
            <div className="space-y-3">
              <a
                href="mailto:pf-southgreen@groupes.france-bioinformatique.fr"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact the Platform
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
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-primary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {link.label === "LinkedIn" && <Linkedin className="w-4 h-4" />}
                    {link.label}
                    {link.href.startsWith("http") && link.label !== "LinkedIn" && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} South Green Bioinformatics Platform.
            </p>
            <p className="text-sm text-primary-foreground/40">Last updated: {formatBuildDate()}</p>
          </div>
          <div className="flex gap-6">
            <Link
              to="/terms-of-use"
              className="text-sm text-primary-foreground/50 hover:text-primary transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
