
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-background/80 backdrop-blur-md shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-bold tracking-tight">
          <span className="text-primary">wp</span>
          <span>designsestudio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            Nosotros
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
            Proyectos
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contacto
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg shadow-lg py-4 border-t border-border md:hidden animate-fade-in">
            <nav className="container flex flex-col space-y-4">
              <a 
                href="#services" 
                className="px-4 py-2 hover:bg-accent/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </a>
              <a 
                href="#about" 
                className="px-4 py-2 hover:bg-accent/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </a>
              <a 
                href="#projects" 
                className="px-4 py-2 hover:bg-accent/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proyectos
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 hover:bg-accent/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
