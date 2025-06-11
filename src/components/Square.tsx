import React from 'react';
import { X, Circle } from 'lucide-react';

interface SquareProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
  isWinning?: boolean;
  disabled?: boolean;
}

export default function Square({ value, onClick, isWinning = false, disabled = false }: SquareProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || value !== null}
      className={`
        aspect-square w-full rounded-2xl border-2 border-white/30
        flex items-center justify-center text-4xl font-bold
        transition-all duration-300 ease-out
        transform hover:scale-110 active:scale-95
        disabled:cursor-not-allowed
        ${isWinning 
          ? 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 border-yellow-300 shadow-2xl animate-bounce' 
          : 'bg-white/20 backdrop-blur-md hover:bg-white/30 hover:border-white/50'
        }
        ${!disabled && value === null ? 'hover:shadow-xl hover:shadow-white/20' : ''}
      `}
    >
      {value === 'X' && (
        <X 
          size={52} 
          className={`${isWinning ? 'text-white drop-shadow-lg' : 'text-emerald-400'} transition-all duration-300`}
          strokeWidth={4}
        />
      )}
      {value === 'O' && (
        <Circle 
          size={52} 
          className={`${isWinning ? 'text-white drop-shadow-lg' : 'text-pink-400'} transition-all duration-300`}
          strokeWidth={4}
        />
      )}
      
      {/* Empty square hover effect */}
      {!value && !disabled && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
      )}
    </button>
  );
}