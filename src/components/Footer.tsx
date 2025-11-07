import { Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-neon flex items-center justify-center">
                <span className="text-lg font-display font-bold text-background">J</span>
              </div>
              <span className="text-lg font-display font-bold text-gradient">
                Jackson Scale
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Precision in Every Gram – The Future of Weighing
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <NavLink to="/products" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Products
              </NavLink>
              <NavLink to="/automation" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Automation Solutions
              </NavLink>
              <NavLink to="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </NavLink>
              <NavLink to="/contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </NavLink>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4" />
                <span>info@jacksonscale.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                <span>Industrial District, Tech City</span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Documentation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Technical Support
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Warranty Info
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Jackson Scale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
