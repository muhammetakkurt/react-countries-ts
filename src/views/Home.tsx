import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import { getAllCountries } from "../services/country";
import { CountryType } from "../types";

export default function Home() {
  const [initCountries, setInıtCountries] = useState<CountryType[]>([]);
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCountries = async () => {
    setIsLoading(true);
    const data = await getAllCountries();
    setInıtCountries(data);
    setCountries(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const countriesMap = countries.map((country, y) => (
    <Link
      key={y}
      className="country-container"
      to={`/country/${country.alpha2Code.toLowerCase()}`}
    >
      <div className="country">
        <img
          className="country-image"
          src={country.flag}
          height={150}
          alt={country.name}
        />
        <span className="country-title">{country.name}</span>
      </div>
    </Link>
  ));

  return (
    <Loading isLoading={isLoading}>
      <Sidebar countries={initCountries} setCountries={setCountries} />
      <div className="flex flex-col w-full justify-center items-center">
        <Search countries={initCountries} setCountries={setCountries} />
        <div className="country-list">{countriesMap}</div>
        <div className="py-4">
          {`Shows: ${countries.length} countries in total ${initCountries.length} countries`}
        </div>
      </div>
    </Loading>
  );
}
