
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Project = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  year: number;
};

export default function AllProjects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Rebrand Corporativo Tech Solutions",
      category: "Diseño Gráfico",
      imageUrl: "placeholder.svg",
      description: "Renovación completa de identidad visual para empresa de tecnología, incluyendo logo, papelería y manual de marca.",
      year: 2024
    },
    {
      id: 2,
      title: "E-commerce Moda Sostenible",
      category: "Desarrollo Frontend",
      imageUrl: "placeholder.svg",
      description: "Desarrollo de tienda online responsive con enfoque en usabilidad y optimización de conversión para marca de moda sostenible.",
      year: 2023
    },
    {
      id: 3,
      title: "Aplicación SaaS Productividad",
      category: "UI/UX Design",
      imageUrl: "placeholder.svg",
      description: "Diseño de interfaz y experiencia de usuario para aplicación de gestión de proyectos y productividad empresarial.",
      year: 2023
    },
    {
      id: 4,
      title: "Landing Page Foodtech",
      category: "Desarrollo Frontend",
      imageUrl: "placeholder.svg",
      description: "Desarrollo de landing page de alta conversión para startup de tecnología alimentaria con integración de formularios y analítica.",
      year: 2022
    },
    {
      id: 5,
      title: "Identidad Visual Ecofriendly",
      category: "Diseño Gráfico",
      imageUrl: "placeholder.svg",
      description: "Creación de identidad visual para marca de productos ecológicos, con enfoque en sostenibilidad y valores medioambientales.",
      year: 2022
    },
    {
      id: 6,
      title: "Dashboard Analytics",
      category: "UI/UX Design",
      imageUrl: "placeholder.svg",
      description: "Diseño de panel de control de datos y estadísticas con visualizaciones interactivas para empresa de análisis de mercado.",
      year: 2021
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <div className="mb-8">
          <Button variant="ghost" className="mb-6" asChild>
            <Link to="/" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Link>
          </Button>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Nuestros Proyectos</h1>
              <p className="text-muted-foreground mt-2">Explora nuestro portafolio de trabajos realizados</p>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-8">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="web">Desarrollo Frontend</TabsTrigger>
              <TabsTrigger value="design">Diseño Gráfico</TabsTrigger>
              <TabsTrigger value="ux">UI/UX Design</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === "Desarrollo Frontend").map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="design">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === "Diseño Gráfico").map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ux">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === "UI/UX Design").map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden border-0 shadow-md card-hover">
      <div className="aspect-[16/9] relative bg-muted/50">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="pt-6">
        <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-2">{project.year}</p>
        <p className="text-sm line-clamp-3">{project.description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground">
          Ver detalles →
        </Button>
      </CardFooter>
    </Card>
  );
}
