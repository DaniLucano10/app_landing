// app/register/page.tsx
"use client";
import useCountries from "@/hook/useCountries";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const RegisterPage = () => {

  const { countries } = useCountries();
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Perú",
    dialCode: "+51",
    flag: "https://flagcdn.com/w40/pe.png",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* Formulario */}
      <div className="bg-white rounded-lg shadow-lg p-6 md:w-1/2 w-full max-w-md">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre completo"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
              Contacto
            </label>
            <div className="relative w-full flex items-center border rounded-lg mb-4 border-gray-300 bg-white z-20">
              <div
                className="flex items-center px-3 py-3 cursor-pointer w-30 justify-between relative"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedCountry.flag && (
                  <Image
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    className="w-6 h-4"
                    loading="lazy"
                    width={40}
                    height={30}
                  />
                )}
                <span className="ml-1 text-its-600 font-medium">
                  {selectedCountry.dialCode}
                </span>
                <FaAngleDown className="w-5 h-5 text-its-600 ml-2" />
              </div>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-its-600 w-60 max-h-60 overflow-y-auto z-[9999] shadow-lg mt-1">
                  {countries.map((country, index) => (
                    <div
                      key={index}
                      className="flex items-center px-2 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <Image
                        src={country.flag}
                        alt={country.name}
                        className="w-6 h-4 mr-2"
                        loading="lazy"
                        width={40}
                        height={30}
                      />
                      <span>
                        {country.name} ({country.dialCode})
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <div className="w-[2px] h-10 border-l border-its-600 mx-1 ml-5 md:ml-0" />
              <input
                type="number"
                name="phone"
                placeholder="Teléfono*"
                className="flex-1 outline-none p-2 text-gray-700"
                required
              />
            </div>
          </div>


          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="tu@correo.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">
              Cargo u ocupación
            </label>
            <input
              type="text"
              id="occupation"
              placeholder="Ej. Gerente de proyectos"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Enviar invitación
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
