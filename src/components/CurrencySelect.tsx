import React from 'react';
import { Currency } from '../types/currency';

interface CurrencySelectProps {
  value: string;
  onChange: (value: string) => void;
  currencies: Currency[];
  label: string;
}

export const CurrencySelect: React.FC<CurrencySelectProps> = ({
  value,
  onChange,
  currencies,
  label,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:text-white transition-all"
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.flag} {currency.code} - {currency.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};