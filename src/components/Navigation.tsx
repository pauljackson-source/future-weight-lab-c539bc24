import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/automation", label: "Automation" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass-card shadow-lg py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-neon flex items-center justify-center">
              <span className="text-2xl font-display font-bold text-background">J</span>
            </div>
            <span className="text-xl font-display font-bold text-gradient">
              Jackson Scale
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
                activeClassName="text-primary"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-card rounded-lg p-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block py-2 px-4 rounded text-foreground/80 hover:text-primary hover:bg-muted/50 transition-all"
                activeClassName="text-primary bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
