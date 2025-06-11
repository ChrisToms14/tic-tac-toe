import React from 'react';
import { Trophy, Zap, RotateCcw, Sparkles } from 'lucide-react';

interface GameStatusProps {
  winner: 'X' | 'O' | 'draw' | null;
  currentPlayer: 'X' | 'O';
  onRestart: () => void;
}

export default function GameStatus({ winner, currentPlayer, onRestart }: GameStatusProps) {
  const getStatusMessage = () => {
    if (winner === 'draw') {
      return (
        <div className="flex items-center gap-3 text-white">
          <div className="p-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full">
            <Zap size={24} />
          </div>
          <div>
            <span className="text-2xl font-bold">Epic Draw!</span>
            <p className="text-white/80 text-sm">Both players fought well</p>
          </div>
        </div>
      );
    }
    
    if (winner) {
      return (
        <div className="flex items-center gap-3 text-white">
          <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-spin">
            <Trophy size={24} />
          </div>
          <div>
            <span className="text-2xl font-bold">
              Player {winner} Wins! 🎉
            </span>
            <p className="text-white/80 text-sm">Congratulations champion!</p>
          </div>
        </div>
      );
    }
    
    return (
      <div className="flex items-center gap-3 text-white">
        <div className={`p-3 rounded-full flex items-center justify-center text-white text-lg font-black shadow-lg ${
          currentPlayer === 'X' 
            ? 'bg-gradient-to-r from-emerald-500 to-teal-500' 
            : 'bg-gradient-to-r from-pink-500 to-rose-500'
        }`}>
          {currentPlayer}
        </div>
        <div>
          <span className="text-2xl font-bold">
            Player {currentPlayer}'s Turn
          </span>
          <p className="text-white/80 text-sm">Make your move!</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6">
        <div className="transition-all duration-500 ease-in-out">
          {getStatusMessage()}
        </div>
        
        <button
          onClick={onRestart}
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600
                   text-white rounded-xl font-bold shadow-lg hover:shadow-2xl
                   hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 
                   transition-all duration-300 transform hover:scale-105 active:scale-95
                   border border-white/20 backdrop-blur-sm"
        >
          <RotateCcw size={20} />
          <span>New Game</span>
          <Sparkles size={16} className="animate-pulse" />
        </button>
      </div>
    </div>
  );
}