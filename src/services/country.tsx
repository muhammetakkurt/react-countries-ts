import api from ".";
import { CountryType } from "../types";

const getAllCountries = async () => {
  try {
    const { data } = await api.get<CountryType[]>("/all");
    return data;
  } catch (error) {
    return [];
  }
};

const getCountryByIsoCode = async (countryIsoCode: string) => {
  try {
    const { data } = await api.get<CountryType>(`alpha/${countryIsoCode}`);
    return data;
  } catch (error) {
    return {};
  }
};

export { getAllCountries, getCountryByIsoCode };
