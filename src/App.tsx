import { useState, useEffect, useCallback } from "react";
import { useQuery } from "react-query";
import { RefreshCw, ArrowRight } from "lucide-react";
import { CurrencySelect } from "./components/CurrencySelect";
import { ConversionHistory } from "./components/ConversionHistory";
import { ThemeToggle } from "./components/ThemeToggle";
import { fetchExchangeRates, convertCurrency } from "./utils/api";
import {
  Currency,
  ConversionHistory as ConversionHistoryType,
} from "./types/currency";
import { Footer } from "./components/Footer";

const CURRENCIES: Currency[] = [
  { code: "NPR", name: "Nepalese Rupee", flag: "🇳🇵" },
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦" },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭" },
  { code: "CNY", name: "Chinese Renminbi", flag: "🇨🇳" },
  { code: "SEK", name: "Swedish Krona", flag: "🇸🇪" },
  { code: "MXN", name: "Mexican Peso", flag: "🇲🇽" },
  { code: "NZD", name: "New Zealand Dollar", flag: "🇳🇿" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬" },
  { code: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰" },
  { code: "NOK", name: "Norwegian Krone", flag: "🇳🇴" },
  { code: "KRW", name: "South Korean Won", flag: "🇰🇷" },
  { code: "TRY", name: "Turkish Lira", flag: "🇹🇷" },
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳" },
  { code: "RUB", name: "Russian Ruble", flag: "🇷🇺" },
  { code: "BRL", name: "Brazilian Real", flag: "🇧🇷" },
  { code: "ZAR", name: "South African Rand", flag: "🇿🇦" },
  { code: "DKK", name: "Danish Krone", flag: "🇩🇰" },
  { code: "PLN", name: "Polish Złoty", flag: "🇵🇱" },
  { code: "THB", name: "Thai Baht", flag: "🇹🇭" },
  { code: "ILS", name: "Israeli New Shekel", flag: "🇮🇱" },
  { code: "IDR", name: "Indonesian Rupiah", flag: "🇮🇩" },
];

const formatNumberWithCommas = (value: string) => {
  const number = parseFloat(value.replace(/,/g, ''));
  return isNaN(number) ? '' : number.toLocaleString('en-US');
};

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return typeof window !== "undefined"
      ? localStorage.getItem("theme") === "dark" ||
          window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;
  });

  const [rawAmount, setRawAmount] = useState("1");
  const [displayAmount, setDisplayAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrencies, setToCurrencies] = useState<string[]>([]);
  const [history, setHistory] = useState<ConversionHistoryType[]>(() => {
    return typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("conversionHistory") || "[]")
      : [];
  });

  const { 
    data: rates, 
    isLoading, 
    isError, 
    refetch, 
    isFetching 
  } = useQuery(
    ["exchangeRates", fromCurrency],
    () => fetchExchangeRates(fromCurrency),
    {
      refetchInterval: 600000,
      staleTime: 600000,
      onError: (error) => {
        console.error("Error fetching exchange rates:", error);
      },
    }
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", isDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, [isDark]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("conversionHistory", JSON.stringify(history));
    }
  }, [history]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, '');
    if (/^(\d+)?([.]?\d{0,2})?$/.test(value)) {
      setRawAmount(value);
      setDisplayAmount(formatNumberWithCommas(value));
    }
  };

  const handleConversion = useCallback(() => {
    if (!rates || !rawAmount || toCurrencies.length === 0) return;

    const numericAmount = parseFloat(rawAmount);
    if (isNaN(numericAmount)) return;

    const newHistory = toCurrencies.map((toCurrency) => ({
      id: `${Date.now()}-${Math.random()}`,
      fromCurrency,
      toCurrency,
      amount: numericAmount,
      result: convertCurrency(numericAmount, rates[toCurrency]),
      timestamp: new Date(),
    }));

    setHistory((prev) => {
      const updatedHistory = [...newHistory, ...prev];
      return updatedHistory.slice(0, 10);
    });
  }, [rawAmount, fromCurrency, rates, toCurrencies]);

  const addToCurrency = useCallback(() => {
    const availableCurrencies = CURRENCIES.filter(
      (c) => c.code !== fromCurrency && !toCurrencies.includes(c.code)
    );

    if (availableCurrencies.length > 0) {
      setToCurrencies([...toCurrencies, availableCurrencies[0].code]);
    }
  }, [fromCurrency, toCurrencies]);

  const removeToCurrency = useCallback(
    (index: number) => {
      setToCurrencies((prev) => prev.filter((_, i) => i !== index));
    },
    []
  );

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="max-w-4xl mx-auto p-6 animate-fade-in-up">
        <header className="flex justify-between items-center mb-8 w-full">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 whitespace-nowrap overflow-visible leading-normal px-2 hover:scale-105 transition-transform duration-300">
            Trusted Haven
          </h1>
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        </header>

        <main className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 md:p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-shadow duration-300">
          <div className="grid gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="w-full md:flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Amount
                </label>
                <input
                  type="text"
                  value={displayAmount}
                  onChange={handleAmountChange}
                  className="w-full p-3 border rounded-lg bg-white/50 dark:bg-gray-700/50 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:ring-1 hover:ring-blue-300 transition-all duration-200"
                  placeholder="Enter amount"
                  inputMode="decimal"
                />
              </div>
              <CurrencySelect
                value={fromCurrency}
                onChange={setFromCurrency}
                currencies={CURRENCIES}
                label="From"
              />
            </div>

            {toCurrencies.map((toCurrency, index) => (
              <div 
                key={`${toCurrency}-${index}`} 
                className="flex flex-col md:flex-row gap-4 items-end animate-slide-in"
              >
                <CurrencySelect
                  value={toCurrency}
                  onChange={(value) =>
                    setToCurrencies((prev) =>
                      prev.map((c, i) => (i === index ? value : c))
                    )
                  }
                  currencies={CURRENCIES.filter(
                    (c) => c.code !== fromCurrency
                  )}
                  label="To"
                />
                <button
                  onClick={() => removeToCurrency(index)}
                  className="w-full md:w-auto px-4 py-2 text-sm font-medium text-red-500 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 border border-red-100 dark:border-red-900/50 rounded-lg hover:bg-red-50/50 dark:hover:bg-red-900/20 group"
                >
                  <span className="inline-block group-hover:-translate-x-1 transition-transform">
                    Remove Currency
                  </span>
                </button>
              </div>
            ))}

            {toCurrencies.length < 3 && (
              <button
                onClick={addToCurrency}
                className="w-fit text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-all duration-300 hover:translate-x-1 group"
              >
                <span className="inline-flex items-center gap-1">
                  <span>+ Add another currency</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </button>
            )}

            <div className="flex flex-col md:flex-row gap-4">
              <button
                onClick={handleConversion}
                disabled={isLoading || isError || !toCurrencies.length}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                <span className="relative z-10">
                  {isLoading ? "Loading Rates..." : "Convert Now"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={() => refetch()}
                disabled={isLoading || isFetching}
                className="p-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-300 relative"
              >
                <RefreshCw 
                  className={`w-5 h-5 ${
                    (isLoading || isFetching) ? "animate-spin" : "hover:rotate-180 transition-transform"
                  }`}
                />
                {(isLoading || isFetching) && (
                  <div className="absolute inset-0 bg-gray-100/50 dark:bg-gray-700/50 rounded-lg" />
                )}
              </button>
            </div>
          </div>
        </main>

        <ConversionHistory history={history} onClear={clearHistory} />
      </div>
      <Footer />
    </div>
  );
}