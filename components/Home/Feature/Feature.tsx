import React from "react";
import Head from "next/head";
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
            icon: <FaCog className="text-teal-500" />,
            text: "Funciones personalizables",
        },
        {
            icon: <FaHeadset className="text-green-500" />,
            text: "Apoyo humano",
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
        <>
            <Head>
                <title>Características del Producto | Todo en uno</title>
                <meta
                    name="description"
                    content="Descubre nuestras principales características: diseño adaptable, soporte humano, actualizaciones constantes, documentación completa y más. Todo lo que necesitas en un solo lugar."
                />
            </Head>

            <section id="caracteristicas" className="bg-pink-50 pt-20 pb-20">
                <div className="w-[80%] mx-auto items-center">
                    <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
                        Es todo lo que alguna vez necesitarás
                    </h2>
                    <p className="mt-4 text-center text-gray-700 text-sm">
                        Explora las características clave que harán que tu experiencia sea más completa y eficiente. Desde
                        un diseño completamente adaptable hasta un soporte técnico dedicado, tenemos todo cubierto.
                    </p>

                    <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                data-aos="flip-right"
                                data-aos-anchor-placement="top-center"
                                data-aos-delay={`${index * 100}`}
                                key={index}
                                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md space-x-3"
                                aria-label={`Característica: ${feature.text}`}
                            >
                                <div className="text-3xl w-14 h-14 bg-gray-800 bg-opacity-10 flex items-center justify-center flex-col rounded-full">
                                    <span>{feature.icon}</span>
                                </div>
                                <span className="font-semibold">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Feature;
