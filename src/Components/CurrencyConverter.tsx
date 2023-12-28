import { useState, useEffect } from 'react';
import axios from 'axios';

export interface CurrencyRates {
  USD: number;
  PLN: number;
  EUR: number;
}

export const useCurrencyRates = (fromCurrency: string): CurrencyRates | null => {
  const [currencyRates, setCurrencyRates] = useState<CurrencyRates | null>(null);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await axios.get(`https://open.er-api.com/v6/latest/${fromCurrency}`);
        setCurrencyRates(response.data.rates);
      } catch (error) {
      }
    };

    fetchCurrencyRates();
  }, [fromCurrency]);

  return currencyRates;
};

export const currencyRates: CurrencyRates = {
  USD: 0,
  PLN: 0,
  EUR: 0
};

export const convertCurrency = (
  amount: number,
  fromCurrency: keyof CurrencyRates,
  toCurrency: keyof CurrencyRates
): number => {
  if (currencyRates[fromCurrency] && currencyRates[toCurrency]) {
    const conversionRate = currencyRates[toCurrency] / currencyRates[fromCurrency];
    return amount * conversionRate;
  } else {
    console.error('error');
    return 0;
  }
};
