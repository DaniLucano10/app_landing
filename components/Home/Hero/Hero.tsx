import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]"
    >
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <header>
            {/* News Badge */}
            <div
              className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white"
              role="note"
              aria-label="Actualización importante"
            >
              <span className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white">
                Noticias
              </span>
              <p className="text-xs md:text-sm">
                Hemos actualizado nuestra política de términos y condiciones.
              </p>
            </div>

            {/* Heading */}
            <h1
              id="hero-heading"
              data-aos="fade-up"
              className="text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]"
            >
              El compañero de espacio de trabajo líder para sus necesidades diarias.
            </h1>

            {/* Description */}
            <p className="text-gray-700">
              Optimiza tu productividad con herramientas diseñadas para tu día a día. Colabora, organiza y lleva tu trabajo al siguiente nivel con nuestra plataforma intuitiva.
            </p>

            {/* App Store Buttons */}
            <div className="flex mt-8 mb-8 items-center space-x-4" aria-label="Descargar la aplicación">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/gp.png"
                  alt="Descargar desde Google Play"
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/as.png"
                  alt="Descargar desde App Store"
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </a>
            </div>
          </header>

          {/* Image Content */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="lg:block"
            aria-hidden="true"
          >
            <Image
              src="/images/hero.png"
              alt="Ilustración de la plataforma en uso"
              width={700}
              height={700}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
