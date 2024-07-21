import { ChangeEvent } from "react";

type Props = {
  value: string | number;
  options: { value: string | number; name: string }[];
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  isDisabled?: boolean;
};

const Select = ({ value, onChange, label, options, isDisabled }: Props) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label className="text-sm text-gray-300 ml-1">{label}</label>
      <select
        value={value}
        onChange={onChange}
        id={label}
        disabled={isDisabled}
        className="bg-gray-700 rounded-md cursor-pointer hover:bg-gray-800 transition ease-in active:border-0 p-2 min-w-[200px] sm:min-w-full"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
