import React from "react";
import {
    FaBook,
    FaCog,
    FaDesktop,
    FaHeadset,
    FaInfinity,
    FaLaptop,
    FaLayerGroup,
    FaMobileAlt,
    FaShieldAlt,
} from "react-icons/fa";

const Feature = () => {
    const features = [
        {
            icon: <FaLayerGroup className="text-red-500" />,
            text: "Más de 50 bloques de diseño únicos",
        },
        {
            icon: <FaLaptop className="text-blue-500" />,
            text: "Múltiples diseños",
        },
        {
            icon: <FaMobileAlt className="text-yellow-500" />,
            text: "Diseño móvil primero",
        },
        {
            icon: <FaDesktop className="text-purple-500" />,
            text: "Completamente receptivo",
        },
        {
            icon: <FaCog className="textteal-500" />,
            text: "Funciones personalizables",
        },
        {
            icon: <FaHeadset className="text-green-500" />,
            text: "Apoyo Humano",
        },
        {
            icon: <FaInfinity className="text-pink-500" />,
            text: "Actualizaciones de por vida",
        },
        {
            icon: <FaBook className="text-indigo-500" />,
            text: "Documentación rica",
        },
        {
            icon: <FaShieldAlt className="text-orange-500" />,
            text: "Seguridad mejorada",
        },
    ];
    return (
        <div className="bg-pink-50 pt-20 pb-20">
            <div className="w-[80%] mx-auto items-center">
                <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
                    Es todo lo que alguna vez necesitarás
                </h1>
                <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            data-aos="flip-right"
                            data-aos-anchor-placement="top-center"
                            data-aos-delay={`${index * 100}`}
                            key={index}
                            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md space-x-3"
                        >
                            <div className="text-3xl w-14 h-14 bg-gray-800 bg-opacity-10 flex items-center justify-center flex-col rounded-full">
                                <span>{feature.icon}</span>
                            </div>
                            <span className="font-semibold">{feature.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;
