// useCountries hook

import { useEffect, useState } from "react";

// Interfaz para representar los países en el frontend
export interface Country {
  name: string;
  dialCode: string;
  flag: string;
}

const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      // Evitar llamadas innecesarias si los países ya están cargados
      if (countries.length > 0) return;

      // Intentar obtener los países desde el almacenamiento en caché del navegador (sessionStorage)
      const cachedCountries = sessionStorage.getItem("countries");
      if (cachedCountries) {
        setCountries(JSON.parse(cachedCountries));
        setLoading(false); // Si los datos están en caché, marcar como cargado
        return;
      }

      try {
        // Hacer la solicitud a la API interna de Next.js
        const response = await fetch("/api/countries");
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data: Country[] = await response.json();

        setCountries(data); // Guardar los países obtenidos
        sessionStorage.setItem("countries", JSON.stringify(data)); // Guardar los países en caché para futuras peticiones
      } catch (error) {
        console.error("Error fetching country data:", error); // Manejo de error
        setError(true);
      } finally {
        setLoading(false); // Finalizar el proceso de carga
      }
    };

    fetchCountries(); // Llamar a la función para obtener los países
  }, [countries]); // El efecto solo se ejecuta una vez

  return { countries, isLoading: loading, error };
};

export default useCountries;
