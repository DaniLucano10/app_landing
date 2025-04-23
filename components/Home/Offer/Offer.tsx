import React from "react";

const Offer = () => {
  return (
    <div className="flex items-center justify-center pt-24 pb-24 mb-20 bg-black">
      <div className="text-center px-6">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
          Explora las funciones más avanzadas con la versión premium
        </h2>
        <p className="text-gray-400 mb-8">
          Indíquenos su dirección de correo electrónico de ID de Apple para que
          podamos enviarle una invitación a TestFlight directamente.
        </p>
        <button className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-medium mb-4 hover:bg-blue-600">
          Comience una prueba gratuita de 14 días
        </button>
        <p className="text-gray-400">No se requiere tarjeta de crédito</p>
      </div>
    </div>
  );
};

export default Offer;
