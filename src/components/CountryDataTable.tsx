import { FunctionComponent } from "react";
import { CountryType } from "../types";

interface ICountryTable {
  country: CountryType;
}

const CountryDataTable: FunctionComponent<ICountryTable> = (props) => {
  const { country } = props;

  const cleanUpName = (name: string) => {
    let clearName = name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase();
    return clearName[0]
      .toUpperCase()
      .concat(clearName.substring(1, clearName.length));
  };

  const printData = (data: string | boolean | number | ArrayLike<object>) => {
    switch (typeof data) {
      case "string":
      case "boolean":
      case "number":
        return data;
      case "object":
        if (
          Object.values(data)[0] !== undefined &&
          typeof Object.values(data)[0] === "object"
        ) {
          const [value] = Object.values<object>(data);
          return Object.values(value).join(", ");
        } else {
          return Object.values(data).join(", ");
        }
      default:
        return;
    }
  };

  return (
    <div className="country-table">
      {country &&
        Object.entries(country).map(([key, data]) => {
          return (
            <div className="country-col" key={key}>
              <span className="w-full text-right pr-5 border-b">
                {cleanUpName(key)}
              </span>
              <span className="w-full flex justify-items-start border-b">
                {printData(data)}
              </span>
            </div>
          );
        })}
    </div>
  );
};
export default CountryDataTable;
