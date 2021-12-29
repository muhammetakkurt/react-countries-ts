import { FunctionComponent } from "react";
import { CountryType } from "../types";

const CountryTable: FunctionComponent<{ country: CountryType } | any> = (
  props
) => {
  const { country } = props;

  const cleanUpName = (name: string) => {
    let clearName = name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase();
    return clearName[0]
      .toUpperCase()
      .concat(clearName.substring(1, clearName.length));
  };

  const printData = (name: any) => {
    console.log(typeof name);
    switch (typeof name) {
      case "string":
        return name;
      case "boolean":
        return name;
      case "number":
        return name;
      case "object":
        if (
          Object.values(name)[0] !== undefined &&
          typeof Object.values(name)[0] === "object"
        ) {
          const test = Object.values<object>(name)[0];
          return Object.values(test).join(", ");
        } else {
          return Object.values(name).join(", ");
        }
      default:
        return;
    }
  };

  return (
    <div className="country-table">
      {country &&
        Object.keys(country).map((c, y) => {
          return (
            <div className="country-col" key={y}>
              {console.log(country)}
              <span className="w-full text-right pr-5 border-b">
                {cleanUpName(c)}
              </span>
              <span className="w-full flex justify-items-start border-b">
                {printData(country[c])}
              </span>
            </div>
          );
        })}
    </div>
  );
};
export default CountryTable;
