import React, { useState } from 'react';
import { useCurrencyRates } from './CurrencyConverter';

import '.././App.scss';
export interface InputBoxProps {
  label: string;
  label2: string;
  onInputValueChange: (value: number) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ label, label2, onInputValueChange }) => {
  const [inputValue, setInputValue] = useState<number>();
  const [inputValue2, setInputValue2] = useState<number>();
  const [defaultFromCurrency, setDefaultFromCurrency] = useState<string>('Select');
  const [defaultFromCurrency2, setDefaultFromCurrency2] = useState<string>('Select');
  const currencyRates = useCurrencyRates(defaultFromCurrency);

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.name === "select1") {setDefaultFromCurrency(event.target.value);}
    else if (event.target.name === "select2") {setDefaultFromCurrency2(event.target.value);}
    
    
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'input1') {
      setInputValue(Number(value));
      setInputValue2(parseFloat((Number(defaultFromCurrency2) * Number(value)).toFixed(2)));
      onInputValueChange(Number(value));
      console.log(defaultFromCurrency2);
    }

    if (name === 'input2') {
      setInputValue2(Number(value));
      
      setInputValue(parseFloat((Number(defaultFromCurrency2) / Number(value)).toFixed(2)));
    }
  };

  return (
    <div className='mainDiv'>
      <div className='input'>
        <select value={defaultFromCurrency} onChange={handleCurrencyChange} name='select1'>
          <option>Select</option>
          <option value="USD">USD</option>
          <option value="PLN">PLN</option>
          <option value="EUR">EUR</option>
        </select>
        <input
          type="number"
          value={inputValue}
          onChange={handleChange}
          name="input1"
          
        />
      </div>
      <div className='input'>
        <select value={defaultFromCurrency2} onChange={handleCurrencyChange} name='select2'>
          <option>Select</option>
          <option value={currencyRates?.USD}>USD</option>
          <option value={currencyRates?.PLN}>PLN</option>
          <option value={currencyRates?.EUR}>EUR</option>
        </select>
        <input
          type="number"
          value={inputValue2}
          onChange={handleChange}
          name="input2"
          readOnly
        />
      </div>
    </div>
  );
};

export default InputBox;
