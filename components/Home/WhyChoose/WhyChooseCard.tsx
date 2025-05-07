import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  alt: string; // Cambié "alt" a "title" para mayor claridad
  image: string;
  linkText: string;
  description: string; // Agregar descripción relevante para cada tarjeta
  linkUrl: string; // Agregar URL para hacer el enlace dinámico
};

const WhyChooseCard = ({ image, title, linkText, description, linkUrl }: Props) => {
  return (
    <div className="p-6 shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl">
      <Image
        src={image}
        alt={`Icono representando ${title}`} // Texto alternativo más descriptivo
        width={80}
        height={80}
        className="object-contain mx-auto"
      />
      <h3 className="text-center text-xl mt-5 mb-5 font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 text-center font-medium text-sm mb-7">
        {description} {/* Mostrar una descripción relevante en lugar de "Lorem Ipsum" */}
      </p>
      <a
        href={linkUrl} // Usar un enlace dinámico
        className="text-center font-semibold text-blue-900 hover:text-blue-950 transition-all duration-200 cursor-pointer"
        aria-label={`Más información sobre ${title}`} // Agregar descripción accesible
      >
        {linkText} &#8594;
      </a>
    </div>
  );
};

export default WhyChooseCard;
