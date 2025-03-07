export interface Currency {
  code: string;
  name: string;
  flag: string;
}

export interface ConversionHistory {
  id: string;
  fromCurrency: string;
  toCurrency: string;
  amount: number;
  result: number;
  timestamp: Date;
}

export interface ConversionRate {
  rate: number;
  timestamp: number;
}