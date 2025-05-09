import { RawCountry } from "@/types/RawCountry";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data: RawCountry[] = await response.json();

    const countries = data
      .map((country) => ({
        name: country.translations?.spa?.common || country.name.common,
        dialCode:
          country.idd?.root && country.idd?.suffixes?.length
            ? `${country.idd.root}${country.idd.suffixes[0]}`
            : '',
        flag: country.cca2
          ? `https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`
          : '',
      }))
      .filter((c) => c.dialCode);

    return NextResponse.json(countries);
  } catch (error) {
    console.error('Error fetching countries:', error); // Usar el error aquí
    return NextResponse.json(
      { error: 'Error fetching countries' },
      { status: 500 }
    );
  }
}
