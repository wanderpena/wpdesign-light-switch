
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CookiePolicy() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Política de Cookies</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">Última actualización: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. ¿Qué son las cookies?</h2>
              <p className="mb-3">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. 
                Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y proporcionar información a los propietarios del sitio.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Tipos de cookies que utilizamos</h2>
              <p className="mb-3">Nuestro sitio web utiliza varios tipos de cookies:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio. Permiten navegar por el sitio y utilizar sus funciones.
                </li>
                <li>
                  <strong>Cookies analíticas:</strong> Nos ayudan a entender cómo interactúan los visitantes con el sitio, recopilando información anónima sobre
                  qué páginas visitan con más frecuencia y si encuentran errores.
                </li>
                <li>
                  <strong>Cookies de preferencias:</strong> Permiten recordar información que cambia el aspecto o comportamiento del sitio, como su idioma preferido.
                </li>
                <li>
                  <strong>Cookies de marketing:</strong> Utilizadas para rastrear a los visitantes a través de los sitios web con el fin de mostrar anuncios relevantes.
                </li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Control de cookies</h2>
              <p className="mb-3">
                La mayoría de los navegadores le permiten controlar las cookies a través de sus preferencias. Puede aceptar, rechazar o eliminar cookies
                modificando la configuración de su navegador.
              </p>
              <p className="mb-3">
                Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad de nuestro sitio web y limitar su capacidad para utilizar determinadas características.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Cookies de terceros</h2>
              <p className="mb-3">
                Además de nuestras propias cookies, también podemos utilizar cookies de terceros para analizar el uso del sitio web y para proporcionar
                ciertas funciones, como los botones de compartir en redes sociales.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Actualizaciones de esta política</h2>
              <p className="mb-3">
                Podemos actualizar esta política de cookies periódicamente. Le recomendamos que consulte esta página regularmente para estar informado 
                sobre cualquier cambio.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Contacto</h2>
              <p className="mb-3">
                Si tiene preguntas sobre nuestra política de cookies, contáctenos en:
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
