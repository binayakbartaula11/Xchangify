import React from 'react';
import { ConversionHistory as ConversionHistoryType } from '../types/currency';
import { Clock, ArrowRight, Trash2 } from 'lucide-react';

interface ConversionHistoryProps {
  history: ConversionHistoryType[];
  onClear: () => void;
}

export const ConversionHistory: React.FC<ConversionHistoryProps> = ({ history, onClear }) => {
  return (
    <div className="mt-6 md:mt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
        <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Conversion History
        </h2>
        <button
          onClick={onClear}
          disabled={history.length === 0}
          className="group relative flex items-center gap-2 px-3 py-1.5 text-red-500 hover:text-red-600 dark:hover:text-red-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-red-500/10 group-hover:bg-red-500/20 dark:group-hover:bg-red-500/5 transition-colors rounded-lg" />
          
          <span className="flex items-center gap-2 relative">
            <Trash2 className="w-4 h-4 group-hover:animate-shake transition-transform group-hover:-translate-y-0.5" />
            <span className="text-sm font-medium relative">
            Boom! All gone
              <span className="absolute bottom-0 left-0 w-0 h-px bg-red-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </span>
          
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </button>
      </div>
      
      {history.length === 0 ? (
        <div className="p-6 text-center text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 rounded-lg animate-pulse">
          Still no conversions? Either you're loyal to your currency or just avoiding exchange rates!
        </div>
      ) : (
        <div className="space-y-3 md:space-y-4">
          {history.map((item) => (
            <div
              key={item.id}
              className="group p-4 md:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg md:rounded-xl shadow-sm hover:shadow-md border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4">
                <div className="flex items-center flex-wrap gap-2 md:gap-4">
                  <span className="font-medium text-base md:text-lg dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {item.amount.toLocaleString()} {item.fromCurrency}
                  </span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-blue-500 dark:text-blue-400 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                  <span className="font-medium text-base md:text-lg dark:text-white transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    {item.result.toLocaleString(undefined, {
                      minimumFractionDigits: 4,
                      maximumFractionDigits: 4
                    })} {item.toCurrency}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  <Clock className="w-4 h-4 mr-2 flex-shrink-0 animate-tick" />
                  <span className="text-xs md:text-sm">
                    {new Date(item.timestamp).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};