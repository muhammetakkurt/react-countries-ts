import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { CountryType } from "../types";

interface ISidebar {
  countries: CountryType[];
  setCountries: Dispatch<SetStateAction<CountryType[]>>;
}
const Sidebar: FunctionComponent<ISidebar> = (props) => {
  const { countries, setCountries } = props;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleAlphabetClick = (name: string) => {
    setCountries(
      countries.filter((country) => {
        return country.name.split("")[0] === name;
      })
    );
  };

  const aphabetMap = alphabet.split("").map((letter, key) => (
    <span key={key} onClick={() => handleAlphabetClick(letter)}>
      {letter}
    </span>
  ));

  return <div className="sidebar">{aphabetMap}</div>;
};

export default Sidebar;
