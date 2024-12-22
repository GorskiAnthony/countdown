import React from 'react';
import { HolidayType } from '../types/countdown';

interface HolidayToggleProps {
  holiday: HolidayType;
  onToggle: (holiday: HolidayType) => void;
}

export function HolidayToggle({ holiday, onToggle }: HolidayToggleProps) {
  return (
    <div className="flex items-center space-x-4 bg-white/10 rounded-full p-1">
      <button
        onClick={() => onToggle('newYear')}
        className={`px-4 py-2 rounded-full transition-all ${
          holiday === 'newYear'
            ? 'bg-purple-500 text-white'
            : 'text-gray-300 hover:text-white'
        }`}
      >
        New Year
      </button>
      <button
        onClick={() => onToggle('christmas')}
        className={`px-4 py-2 rounded-full transition-all ${
          holiday === 'christmas'
            ? 'bg-red-500 text-white'
            : 'text-gray-300 hover:text-white'
        }`}
      >
        Christmas
      </button>
    </div>
  );
}