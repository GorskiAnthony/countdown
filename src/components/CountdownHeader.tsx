import React from 'react';
import { Timer, Gift } from 'lucide-react';
import { HolidayType } from '../types/countdown';

interface CountdownHeaderProps {
  holiday: HolidayType;
}

export function CountdownHeader({ holiday }: CountdownHeaderProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        {holiday === 'newYear' ? (
          <Timer className="w-8 h-8 text-purple-400 mr-2" />
        ) : (
          <Gift className="w-8 h-8 text-red-400 mr-2" />
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Time Until {holiday === 'newYear' ? 'New Year' : 'Christmas'}
        </h1>
      </div>
      <p className="text-gray-400">
        Counting down to{' '}
        {holiday === 'newYear' 
          ? `December 31st, ${currentYear}` 
          : `December 25th, ${currentYear}`}
      </p>
    </div>
  );
}