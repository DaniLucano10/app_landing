import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "LideraTec | Tu compañero digital para un espacio de trabajo eficiente",
  description:
    "LideraTec es tu solución integral para maximizar la productividad diaria. Descarga la app y transforma tu forma de trabajar con herramientas inteligentes.",
  keywords: [
    "productividad en el trabajo",
    "herramientas digitales para equipos",
    "gestión de proyectos",
    "aplicaciones de productividad",
    "trabajo remoto",
    "optimización de equipos",
    "aplicaciones para la productividad laboral",
    "gestión digital de equipos",
    "plataforma para equipos remotos",
    "software para equipos de trabajo",
    "soluciones de productividad empresarial",
    "colaboración remota eficiente",
  ],
  authors: [{ name: "LideraTec", url: "https://lideratec.vercel.app" }],
  creator: "LideraTec",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "LideraTec | Herramientas de trabajo intuitivas",
    description:
      "Descubre la solución ideal para aumentar tu productividad diaria. Únete a miles de usuarios satisfechos.",
    url: "https://lideratec.vercel.app",
    siteName: "LideraTec",
    images: [
      {
        url: "https://lideratec.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vista previa de la aplicación de LideraTec",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LideraTec | Soluciones digitales",
    description:
      "Optimiza tu flujo de trabajo con nuestra app intuitiva, rápida y flexible.",
    creator: "@TuTwitter",
    images: ["https://lideratec.vercel.app/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="0e29f843aab58e9f" />

        {/* GEO meta tags para Lima, Perú */}
        <meta name="geo.region" content="PE-LIM" />
        <meta name="geo.placename" content="Lima" />
        <meta name="geo.position" content="-12.0464;-77.0428" />
        <meta name="ICBM" content="-12.0464, -77.0428" />

        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "LideraTec",
              image: "https://lideratec.vercel.app/logo.png",
              "@id": "https://lideratec.vercel.app",
              url: "https://lideratec.vercel.app",
              telephone: "+51 999 999 999",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Principal 123",
                addressLocality: "Lima",
                postalCode: "15001",
                addressCountry: "PE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -12.0464,
                longitude: -77.0428,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
            }),
          }}
        />

        {/* FAQPage structured data for GEO-IA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es LideraTec?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "LideraTec es una plataforma digital que ayuda a equipos a mejorar su productividad con herramientas colaborativas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Dónde puedo descargar la app de LideraTec?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Puedes descargarla desde App Store y Google Play directamente desde nuestro sitio web.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿LideraTec tiene versión gratuita?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, ofrecemos una versión gratuita con funciones básicas y planes premium para necesidades avanzadas.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
