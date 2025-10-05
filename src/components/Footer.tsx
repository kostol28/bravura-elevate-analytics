import { NavLink } from "react-router-dom";
import bravuraLogo from "@/assets/bravura-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={bravuraLogo} 
                alt="Bravura Data Works Logo" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Data analytics partner helping businesses unlock their potential. 
              Transforming data into competitive advantage with reliable and secure solutions.
            </p>
            <div className="flex space-x-4">
              <div className="text-xs text-primary-foreground/60">
                © 2024 Bravura Data Works
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <NavLink 
                to="/" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                About Us
              </NavLink>
              <NavLink 
                to="/services" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Services
              </NavLink>
              <NavLink 
                to="/insights" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Insights
              </NavLink>
              <NavLink 
                to="/contact" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="space-y-2">
              <div className="text-primary-foreground/80 text-sm">Data Engineering</div>
              <div className="text-primary-foreground/80 text-sm">Predictive Analytics</div>
              <div className="text-primary-foreground/80 text-sm">AI Prototyping</div>
              <div className="text-primary-foreground/80 text-sm">Data Governance</div>
              <div className="text-primary-foreground/80 text-sm">Cloud Migration</div>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div>info@bravura.com</div>
              <div>+1 (555) 123-4567</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <div>
              © 2024 Bravura Data Works. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <NavLink to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </NavLink>
              <NavLink to="/security" className="hover:text-primary-foreground transition-colors">
                Security
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;