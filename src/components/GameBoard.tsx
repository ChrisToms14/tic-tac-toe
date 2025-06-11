import React from 'react';
import Square from './Square';

interface GameBoardProps {
  squares: ('X' | 'O' | null)[];
  onSquareClick: (index: number) => void;
  winningLine?: number[];
  gameOver: boolean;
}

export default function GameBoard({ squares, onSquareClick, winningLine = [], gameOver }: GameBoardProps) {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
      
      {/* Main board */}
      <div className="relative grid grid-cols-3 gap-3 p-6 bg-white/15 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onClick={() => onSquareClick(index)}
            isWinning={winningLine.includes(index)}
            disabled={gameOver}
          />
        ))}
      </div>
    </div>
  );
}