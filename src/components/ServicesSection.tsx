
import { Code, PenTool, Smartphone, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card className="border border-border card-hover">
      <CardHeader>
        <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 mb-4 flex items-center justify-center">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default function ServicesSection() {
  const services = [
    {
      icon: <PenTool className="h-6 w-6 text-primary" />,
      title: "Diseño Gráfico",
      description: "Creamos identidades visuales únicas y atractivas que representan la esencia de tu marca y conectan con tu audiencia."
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Desarrollo Frontend",
      description: "Desarrollamos interfaces web modernas, responsivas y accesibles con las últimas tecnologías y mejores prácticas."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Diseño UI/UX",
      description: "Diseñamos experiencias digitales intuitivas y atractivas centradas en el usuario que impulsan la conversión."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Optimización Web",
      description: "Mejoramos el rendimiento de tu sitio web para una experiencia de usuario más rápida y eficiente."
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ofrecemos soluciones digitales completas para ayudarte a destacar en el mundo digital.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
