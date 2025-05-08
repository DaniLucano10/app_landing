import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AnalyticsFeature = () => {
  return (
    <section id="acerca-de" className="pt-24 pb-16">
      {/* Define grid */}
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Content */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <Image
            src="/images/a.jpg"
            alt="Análisis de audiencia con herramientas de seguimiento"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        {/* Text content */}
        <div className="p-6">
          <h2 className="text-base font-semibold text-orange-700">
            Seguimiento y análisis de audiencia
          </h2>
          <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Potentes herramientas de análisis para rastrear el comportamiento y
            la interacción de los usuarios, proporcionando información para
            optimizar su estrategia de contenido.
          </h3>
          <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem]">
            Mejora la eficiencia de tu contenido con herramientas avanzadas para
            entender el comportamiento del usuario, optimizando cada aspecto de
            tu estrategia digital.
          </p>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Módulo de mensaje de chat compatible
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Acceso ilimitado a todas las funciones
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Gestión completa de conversaciones
            </li>
          </ul>
          <button className="mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-blue-800 transition-all duration-200 hover:text-white">
            Explora más &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsFeature;
