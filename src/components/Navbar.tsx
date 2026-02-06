import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import southGreenLogo from "@/assets/south-green-logo-large.svg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Databases & Tools", href: "/databases" },
  { label: "Open Science", href: "/open-science" },
  { label: "Training", href: "/training" },
  { label: "Projects", href: "/projects" },
  { label: "Members", href: "/members" },
  { label: "Publications", href: "/publications" },
  { label: "News", href: "https://www.linkedin.com/company/south-green-bioinformatics-platform", external: true },
  { label: "About", href: "/#about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.includes("/#")) return location.pathname === "/" && location.hash === href.replace("/", "");
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background/90 via-background/80 to-background/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      {/* Glossy shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with glow effect */}
          <Link to="/" className="flex items-center gap-2 group relative">
            <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img src={southGreenLogo} alt="South Green" className="h-10 md:h-12 transition-all duration-300 group-hover:scale-105 relative drop-shadow-[0_0_8px_rgba(41,107,68,0.3)]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1.5 border border-white/10 shadow-inner">
            {navItems.map((item) => {
              const isHashLink = item.href.startsWith('#') || item.href.includes('/#');
              const isExternalLink = item.external;
              const activeClass = isActive(item.href) 
                ? "text-primary font-semibold bg-primary/10 shadow-[0_0_20px_rgba(41,107,68,0.3)] after:scale-x-100 after:shadow-[0_0_8px_rgba(41,107,68,0.5)]" 
                : "text-muted-foreground hover:text-foreground hover:bg-white/5";
              
              const baseClass = "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full after:content-[''] after:absolute after:bottom-1.5 after:left-4 after:right-4 after:h-0.5 after:bg-primary after:rounded-full after:origin-left after:scale-x-0 after:transition-all after:duration-300 hover:after:scale-x-100";
              
              if (isExternalLink) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseClass} ${activeClass} inline-flex items-center gap-1 group/link`}
                  >
                    {item.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                );
              }
              
              if (isHashLink) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`${baseClass} ${activeClass}`}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`${baseClass} ${activeClass}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col gap-1 bg-white/5 rounded-2xl p-2 border border-white/10">
              {navItems.map((item) => {
                const activeClass = isActive(item.href) 
                  ? "text-primary bg-primary/15 font-semibold shadow-[0_0_15px_rgba(41,107,68,0.2)]" 
                  : "text-muted-foreground hover:text-foreground hover:bg-white/10";
                
                if (item.external) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 inline-flex items-center gap-2 ${activeClass}`}
                    >
                      {item.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  );
                }
                
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${activeClass}`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
