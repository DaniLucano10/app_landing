import React from "react";
import WhyChooseCard from "./WhyChooseCard";
import { cardsData } from "@/constant/Constant";

const WhyChoose = () => {
  return (
    <section className="pt-16 pb-16">
      <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        ¿Por qué elegir LideraTec para tu productividad diaria?
      </h2>
      <p className="text-center text-gray-600 mt-4">
        Descubre cómo nuestra aplicación puede transformar tu flujo de trabajo y ayudarte a alcanzar tus metas más rápido con funcionalidades clave y soporte continuo.
      </p>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {cardsData.map((card, index) => (
          <div
            key={index}
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${index * 100}`} // Agregar delay basado en el índice
          >
            <WhyChooseCard
              image={card.image}
              alt={card.alt}
              title={card.title}
              linkText={card.linkText}
              description={card.description}
              linkUrl={card.linkUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
