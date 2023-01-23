import React from "react";

const SelectField = ({ value, onChange, options, name }) => {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  return (
    <select
      className="form-select form-select-sm w-25 dropup"
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
    >
      {options.length > 0 &&
        options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
    </select>
  );
};

export default SelectField;
