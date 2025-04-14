
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            <span className="text-primary">Diseño</span> y <span className="text-primary">desarrollo</span> <br />
            para la era digital
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Somos un estudio de diseño gráfico y desarrollo web que combina creatividad e innovación para transformar tu visión en realidad digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg">
              Nuestros servicios
            </Button>
            <Button variant="outline" size="lg">
              Contáctanos
            </Button>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Descubre más</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
      
      {/* Abstract gradient shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
