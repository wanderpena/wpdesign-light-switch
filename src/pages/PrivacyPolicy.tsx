
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Política de Privacidad</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">Última actualización: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Información que recopilamos</h2>
              <p className="mb-3">
                En wpdesignsestudio, valoramos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad describe cómo 
                recopilamos, utilizamos y protegemos su información cuando visita nuestro sitio web o utiliza nuestros servicios.
              </p>
              <p className="mb-3">Podemos recopilar los siguientes tipos de información:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Información de contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono y dirección postal.</li>
                <li><strong>Información comercial:</strong> Detalles de su empresa, sector y necesidades de diseño o desarrollo.</li>
                <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador, sistema operativo y otros datos relacionados con su dispositivo.</li>
                <li><strong>Información de uso:</strong> Datos sobre cómo interactúa con nuestro sitio web, incluyendo páginas visitadas y tiempo de permanencia.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Cómo utilizamos su información</h2>
              <p className="mb-3">Utilizamos la información recopilada para diversos propósitos:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Proporcionar y mantener nuestros servicios</li>
                <li>Mejorar y personalizar su experiencia en nuestro sitio</li>
                <li>Comunicarnos con usted sobre sus consultas o proyectos</li>
                <li>Enviarle información sobre nuestros servicios, actualizaciones o eventos (solo con su consentimiento)</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Protección de datos</h2>
              <p className="mb-3">
                Implementamos medidas de seguridad adecuadas para proteger su información personal contra acceso, alteración, divulgación o destrucción no autorizada. 
                Sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Sus derechos</h2>
              <p className="mb-3">Usted tiene derecho a:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos</li>
                <li>Eliminar sus datos en determinadas circunstancias</li>
                <li>Retirar su consentimiento en cualquier momento</li>
                <li>Oponerse al procesamiento de sus datos</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Contacto</h2>
              <p className="mb-3">
                Si tiene preguntas o inquietudes sobre esta política de privacidad, contáctenos en:
                <br />
                <strong>Email:</strong> info@wpdesignsestudio.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
