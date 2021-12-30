import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCountryByIsoCode } from "../services/country";
import { CountryType } from "../types";
import { Loading, CountryDataTable } from "../components";

export default function Detail() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { countryIsoCode } = useParams<{ countryIsoCode: string | any }>();
  const [country, setCountry] = useState<CountryType | any>();

  const getCountry = useCallback(async () => {
    setIsLoading(true);
    const data = await getCountryByIsoCode(countryIsoCode);
    setCountry(data);
    setIsLoading(false);
  }, [countryIsoCode]);

  useEffect(() => {
    getCountry();
  }, [getCountry]);

  return (
    <div className="detail-country-container">
      <Loading isLoading={isLoading}>
        <>
          <div className="flex flex-col">
            <Link
              to="/"
              className="border w-20 rounded p-3 font-thin hover:bg-red-500 hover:text-white"
            >
              {`< Back`}
            </Link>
            <img
              className="detail-country-image"
              src={country?.flag}
              height={150}
              alt={country?.name}
            />
          </div>

          <CountryDataTable country={country} />
        </>
      </Loading>
    </div>
  );
}
