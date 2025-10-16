import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import bravuraLogo from "@/assets/bravura-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img 
              src={bravuraLogo} 
              alt="Bravura Data Works Logo" 
              className="h-24 w-auto md:h-28 transition-transform hover:scale-105"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `text-foreground hover:text-primary transition-colors font-medium ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) =>
                `text-foreground hover:text-primary transition-colors font-medium ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) =>
                `text-foreground hover:text-primary transition-colors font-medium ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) =>
                `text-foreground hover:text-primary transition-colors font-medium ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              Contact
            </NavLink>
            <Button className="btn-gold" asChild>
              <a href="/contact">Book a Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 border-t border-border">
            <NavLink 
              to="/" 
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            <div className="pt-4">
              <Button className="btn-gold w-full" asChild>
                <a href="/contact">Book a Consultation</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;