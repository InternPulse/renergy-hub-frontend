import React, { useState } from "react";
import Select, { SingleValue, StylesConfig } from "react-select";
import Flag from "react-world-flags";

// Define types for the country data
interface Country {
  code: string;
  name: string;
}

// Define types for the React-Select options
interface Option {
  value: string; // Country code
  label: JSX.Element; // Custom rendered label with flag and name
}

const CountryInputField: React.FC = () => {
  // Static list of countries
  const countries: Country[] = [
    { code: "NG", name: "Nigeria" },
    { code: "ZA", name: "South Africa" },
    { code: "EG", name: "Egypt" },
    { code: "KE", name: "Kenya" },
    { code: "GH", name: "Ghana" },
    // Add more countries as needed
  ];

  // Transform country data for react-select
  const options: Option[] = countries.map((country) => ({
    value: country.code,
    label: (
      <div className="flex items-center space-x-2">
        <Flag code={country.code} className="w-6 h-4 rounded-sm" />
        <span>{country.name}</span>
      </div>
    ),
  }));

  // State for selected country
  const [selectedCountry, setSelectedCountry] =
    useState<SingleValue<Option>>(null);

  // Handle selection change
  const handleChange = (selectedOption: SingleValue<Option>) => {
    setSelectedCountry(selectedOption);
    console.log("Selected country:", selectedOption);
  };

  // Custom styles for react-select
  const customStyles: StylesConfig<Option, false> = {
    control: (base) => ({
      ...base,
      padding: "5px",
      borderColor: "#ddd",
      borderRadius: "8px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#4CAF50",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#f5f5f5" : "white",
      color: "black",
      cursor: "pointer",
    }),
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-1" htmlFor="country">
        Country
      </label>
      <Select
        id="country"
        options={options}
        value={selectedCountry}
        onChange={handleChange}
        placeholder="Select Country"
        styles={customStyles}
      />
      {selectedCountry && (
        <div className="mt-4">
          <h2 className="text-sm">
            You selected:{" "}
            <strong>
              {selectedCountry.label.props.children[1]} ({selectedCountry.value}
              )
            </strong>
          </h2>
        </div>
      )}
    </div>
  );
};

export default CountryInputField;
