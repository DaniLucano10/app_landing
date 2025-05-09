import { useEffect, useState } from "react";

export interface Country {
  name: string;
  dialCode: string;
  flag: string;
}

interface RawCountry {
  name: { common: string };
  translations?: { spa?: { common: string } };
  idd?: { root?: string; suffixes?: string[] };
  cca2?: string;
}

const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      if (countries.length > 0) return; // Evitar múltiples llamadas innecesarias

      const cachedCountries = sessionStorage.getItem("countries");
      if (cachedCountries) {
        setCountries(JSON.parse(cachedCountries));
        setLoading(false); // Ya que se carga desde el almacenamiento en caché
        return;
      }

      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data: RawCountry[] = await response.json();

        const formattedCountries: Country[] = data
          .map((country) => ({
            name: country.translations?.spa?.common || country.name.common,
            dialCode:
              country.idd?.root && country.idd.suffixes
                ? `${country.idd.root}${country.idd.suffixes[0]}`
                : "",
            flag: country.cca2
              ? `https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`
              : "",
          }))
          .filter((c) => c.dialCode);

        setCountries(formattedCountries);
        sessionStorage.setItem("countries", JSON.stringify(formattedCountries));
      } catch (error) {
        console.error("Error fetching country data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [countries]); // Dependencia de `countries` para evitar múltiples llamados

  return { countries, isLoading: loading, error };
};

export default useCountries;