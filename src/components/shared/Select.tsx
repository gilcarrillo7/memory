import * as React from "react";

const Select = ({
  label,
  options,
  selected,
  onChange,
}: {
  label: string;
  options: number[];
  selected: number;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}) => {
  return (
    <div className="text-2xl sm:text-3xl">
      <label htmlFor={label}>{label}</label>:
      <select
        id={label}
        className="bg-transparent"
        onChange={onChange}
        value={selected}
      >
        {options.map((option, i) => (
          <option key={`${option}${i}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
