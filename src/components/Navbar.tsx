import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import southGreenLogo from "@/assets/south-green-logo-large.svg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Databases & Tools", href: "/databases" },
  { label: "Training", href: "/training" },
  { label: "Projects", href: "/projects" },
  { label: "Members", href: "/members" },
  { label: "Publications", href: "/publications" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={southGreenLogo} alt="South Green" className="h-10 md:h-12 transition-all duration-300 group-hover:scale-105 group-hover:opacity-80" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isExternal = item.href.startsWith('#') || item.href.includes('/#');
              const activeClass = isActive(item.href) 
                ? "text-primary font-semibold after:scale-x-100" 
                : "text-muted-foreground hover:text-foreground";
              
              const baseClass = "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-secondary after:content-[''] after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100";
              
              if (isExternal) {
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
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const activeClass = isActive(item.href) 
                  ? "text-primary bg-primary/10 font-semibold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary";
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeClass}`}
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
