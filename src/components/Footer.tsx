
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4">
              <span className="text-primary">wp</span>
              <span>designsestudio</span>
            </h2>
            <p className="text-muted-foreground max-w-xs">
              Transformando ideas en experiencias digitales excepcionales desde 2020.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Nosotros</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Proyectos</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} wpdesignsestudio. Todos los derechos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full border border-border hover:border-primary/50 transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
