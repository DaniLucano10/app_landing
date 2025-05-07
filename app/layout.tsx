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
  title: "LideraTec | Tu compañero digital para un espacio de trabajo eficiente",
  description:
    "LideraTec es tu solución integral para maximizar la productividad diaria. Descarga la app y transforma tu forma de trabajar con herramientas inteligentes.",
  keywords: [
    "productividad",
    "aplicaciones",
    "Next.js",
    "landing page",
    "trabajo en equipo",
    "gestión digital",
    "App Store",
    "Google Play",
  ],
  authors: [{ name: "TuCompañía", url: "https://tudominio.com" }],
  creator: "TuCompañía",
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
    title: "TuCompañía | Herramientas de trabajo intuitivas",
    description:
      "Descubre la solución ideal para aumentar tu productividad diaria. Únete a miles de usuarios satisfechos.",
    url: "https://tudominio.com",
    siteName: "TuCompañía",
    images: [
      {
        url: "https://tudominio.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vista previa de la aplicación de TuCompañía",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TuCompañía | Soluciones digitales",
    description:
      "Optimiza tu flujo de trabajo con nuestra app intuitiva, rápida y flexible.",
    creator: "@TuTwitter",
    images: ["https://tudominio.com/images/og-image.jpg"],
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
        <meta name="google-site-verification" content="abc1234567890" />
        {/* GEO meta tags para Lima, Perú */}
        <meta name="geo.region" content="PE-LIM" />
        <meta name="geo.placename" content="Lima" />
        <meta name="geo.position" content="-12.0464;-77.0428" />
        <meta name="ICBM" content="-12.0464, -77.0428" />

        {/* LocalBusiness JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "LideraTec",
              image: "https://tudominio.com/logo.png",
              "@id": "https://tudominio.com",
              url: "https://tudominio.com",
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
      </head>
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
