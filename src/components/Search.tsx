import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import SearchIcon from "../icons/search";
import { CountryType } from "../types";

const Search: FunctionComponent<{
  countries: CountryType[];
  setCountries: Dispatch<SetStateAction<CountryType[]>>;
}> = (props) => {
  const { countries, setCountries } = props;
  const [searchValue, setSearchValue] = useState<string>();

  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
    setCountries(
      countries.filter((country) => {
        console.log(event.target.value);
        return country.name.toLocaleLowerCase().includes(event.target.value);
      })
    );
  };

  return (
    <div className="m-6 relative">
      <input
        className="border w-[400px] rounded-lg px-3 py-2"
        placeholder="Search"
        onChange={handleChange}
        value={searchValue}
      />
      <span className="absolute right-3 top-[25%] cursor-pointer">
        <SearchIcon />
      </span>
    </div>
  );
};
export default Search;
