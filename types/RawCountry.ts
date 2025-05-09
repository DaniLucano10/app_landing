// types/RawCountry.ts

export interface RawCountry {
  name: { common: string };
  translations?: { spa?: { common: string } };
  idd?: { root?: string; suffixes?: string[] };
  cca2?: string;
}
