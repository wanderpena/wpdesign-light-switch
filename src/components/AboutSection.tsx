
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-muted-foreground mb-6">
            En <span className="text-primary font-medium">wpdesignsestudio</span>, somos un equipo apasionado de diseñadores y desarrolladores 
            comprometidos con la excelencia visual y técnica. Nos especializamos en crear 
            soluciones digitales que combinan estética y funcionalidad.
          </p>
          <p className="text-muted-foreground mb-8">
            Fundado en 2020, nuestro estudio ha trabajado con marcas de diversos sectores, 
            ayudándolas a establecer su presencia digital con un enfoque centrado en resultados
            y una estética minimalista y moderna.
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div>
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Proyectos completados</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Clientes satisfechos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Años de experiencia</p>
            </div>
          </div>
          <Button>Conoce al equipo</Button>
        </div>
        
        <div className="relative h-80 md:h-96 lg:h-[32rem] rounded-lg bg-gradient-to-tr from-primary/20 to-accent/20 overflow-hidden animate-fade-in-right">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-xl md:text-2xl font-medium mb-4">Nuestro enfoque</p>
              <p className="text-muted-foreground max-w-md">
                "Combinamos la creatividad del diseño con la precisión del desarrollo para crear
                experiencias digitales que no solo se ven increíbles, sino que también funcionan
                a la perfección."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
