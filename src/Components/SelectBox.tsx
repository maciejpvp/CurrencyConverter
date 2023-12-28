import React, { useState } from 'react';

interface SelectBoxProps {
  options: string[];
}

const SelectBox: React.FC<SelectBoxProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleSelectChange}>
      <option value="" disabled>
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
