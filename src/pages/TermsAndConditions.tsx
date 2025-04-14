
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function TermsAndConditions() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Términos y Condiciones</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">Última actualización: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
              <p className="mb-3">
                Al acceder y utilizar este sitio web (wpdesignsestudio), usted acepta cumplir con estos términos y condiciones. 
                Si no está de acuerdo con alguno de los términos establecidos, no debe utilizar este sitio.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Servicios</h2>
              <p className="mb-3">
                wpdesignsestudio ofrece servicios de diseño gráfico y desarrollo web frontend. Los detalles específicos de cada servicio,
                incluyendo plazos, entregables y precios, se acordarán por separado para cada proyecto mediante un contrato específico.
              </p>
              <p className="mb-3">
                Nos reservamos el derecho de rechazar cualquier proyecto que consideremos que va en contra de nuestros valores éticos
                o que no sea viable según nuestros criterios profesionales.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Propiedad Intelectual</h2>
              <p className="mb-3">
                Todo el contenido presente en este sitio web, incluyendo textos, gráficos, logotipos, imágenes y software, está protegido 
                por derechos de autor y es propiedad de wpdesignsestudio, salvo que se indique lo contrario.
              </p>
              <p className="mb-3">
                Los derechos de propiedad intelectual de los trabajos realizados para clientes se transferirán según lo establecido 
                en el contrato específico de cada proyecto, una vez completado el pago total acordado.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Limitación de Responsabilidad</h2>
              <p className="mb-3">
                wpdesignsestudio proporciona este sitio web y sus contenidos "tal cual", sin garantías de ningún tipo, expresas o implícitas.
                No seremos responsables por daños directos, indirectos, incidentales o consecuentes que puedan surgir del uso de nuestro sitio
                o servicios.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Modificaciones</h2>
              <p className="mb-3">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán 
                en vigor inmediatamente después de su publicación en el sitio web. Su uso continuado del sitio después de cualquier cambio 
                constituye su aceptación de los nuevos términos.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Ley Aplicable</h2>
              <p className="mb-3">
                Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes vigentes, sin tener en cuenta 
                sus disposiciones sobre conflictos de leyes.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contacto</h2>
              <p className="mb-3">
                Si tiene preguntas sobre estos términos y condiciones, contáctenos en:
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
