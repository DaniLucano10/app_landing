import React from "react";

const Offer = () => {
  return (
    <section
      id="contacto"
      className="flex items-center justify-center pt-24 pb-24 mb-20 bg-black"
      aria-labelledby="offer-heading"
    >
      <div className="text-center px-6 max-w-2xl">
        <h2
          id="offer-heading"
          className="text-white text-2xl md:text-3xl font-semibold mb-4"
        >
          Explora las funciones más avanzadas con la versión premium
        </h2>

        <p className="text-gray-400 mb-8">
          Descubra cómo nuestras características premium pueden impulsar su
          productividad. Proporcione su correo electrónico asociado a Apple ID
          y reciba una invitación a TestFlight directamente en su bandeja de entrada.
        </p>

        <a
          href="#planes"
          className="inline-block bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-medium mb-4 hover:bg-blue-600 transition"
          role="button"
          aria-label="Comenzar prueba gratuita de 14 días"
        >
          Comience una prueba gratuita de 14 días
        </a>

        <p className="text-gray-400" aria-hidden="false">
          No se requiere tarjeta de crédito
        </p>
      </div>
    </section>
  );
};

export default Offer;
