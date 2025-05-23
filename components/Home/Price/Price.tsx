import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <section className="pt-16 pb-16 bg-[#edfbff]">
      <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Conozca emocionantes planes de precios
      </h2>

      <div className="w-[90%] md:w-[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <PriceCard
            price={15}
            plan="Starter"
            description="Ideal para quienes comienzan. Incluye funcionalidades esenciales para arrancar su proyecto."
            features={[
              "Conexión ilimitada",
              "Acciones básicas y desencadenadores",
              "Pagos en borrador",
              "Flujos y soportes ilimitados",
              "Actualizaciones de por vida",
            ]}
          />
        </div>

        <div
          data-aos="flip-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <PriceCard
            price={45}
            plan="Business"
            description="Perfecto para equipos en crecimiento que necesitan más capacidad y flexibilidad."
            features={[
              "Todo lo del plan Starter",
              "Integraciones avanzadas",
              "Soporte prioritario",
              "Historial de actividad ilimitado",
              "Reportes personalizados",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Price;
