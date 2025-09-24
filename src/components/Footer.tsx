import { NavLink } from "react-router-dom";
import { Shield, Award, FileCheck, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold">Bravura Data Works</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium data analytics partner for Fortune 500 enterprises. 
              Transforming data into competitive advantage with enterprise-grade security and reliability.
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

          {/* Contact & Certifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enterprise Support</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div>24/7 Enterprise Support</div>
              <div>enterprise@bravura.com</div>
              <div>+1 (555) 123-4567</div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Security Certifications</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-1 text-xs text-primary-foreground/80">
                  <Shield size={14} />
                  <span>SOC 2</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-primary-foreground/80">
                  <Award size={14} />
                  <span>ISO 27001</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-primary-foreground/80">
                  <FileCheck size={14} />
                  <span>GDPR</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-primary-foreground/80">
                  <Lock size={14} />
                  <span>HIPAA</span>
                </div>
              </div>
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