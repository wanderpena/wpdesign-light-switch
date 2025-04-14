
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type Project = {
  title: string;
  category: string;
  imageUrl: string;
};

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Rebrand Corporativo",
      category: "Diseño Gráfico",
      imageUrl: "placeholder.svg"
    },
    {
      title: "E-commerce Responsivo",
      category: "Desarrollo Frontend",
      imageUrl: "placeholder.svg"
    },
    {
      title: "Aplicación SaaS",
      category: "UI/UX Design",
      imageUrl: "placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Una selección de nuestros trabajos más recientes y relevantes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden border-0 shadow-md card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="aspect-[16/9] relative bg-muted/50">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="pt-6">
              <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
              <h3 className="text-xl font-semibold mb-0">{project.title}</h3>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                Ver proyecto →
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button variant="outline" size="lg">Ver todos los proyectos</Button>
      </div>
    </section>
  );
}
