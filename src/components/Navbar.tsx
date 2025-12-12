import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import southGreenLogo from "@/assets/south-green-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Databases", href: "/databases" },
  { label: "Tools", href: "/#tools" },
  { label: "Training", href: "/training" },
  { label: "Members", href: "/members" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={southGreenLogo} alt="South Green" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isExternal = item.href.startsWith('#') || item.href.includes('/#');
              if (isExternal) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm" className="gradient-hero border-0 shadow-sm hover:shadow-glow transition-shadow">
              Get Started
            </Button>
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
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 mt-4 px-4">
                <Button variant="outline" size="sm" className="flex-1">
                  Login
                </Button>
                <Button size="sm" className="flex-1 gradient-hero border-0">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
