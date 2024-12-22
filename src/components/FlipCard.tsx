import React from 'react';
import { HolidayType } from '../types/countdown';
import { getHolidayTheme } from '../styles/themes';

interface FlipCardProps {
  digit: number;
  label: string;
  holiday: HolidayType;
}

export function FlipCard({ digit, label, holiday }: FlipCardProps) {
  const theme = getHolidayTheme(holiday);
  const formattedDigit = digit.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center mx-2">
      <div className={`relative w-20 h-24 bg-gradient-to-b ${theme.cardFrom} ${theme.cardTo} rounded-lg shadow-lg perspective`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-white">{formattedDigit}</span>
        </div>
        <div className="absolute inset-x-0 h-px top-1/2 bg-black/30"></div>
        <div className="absolute inset-0 rounded-lg">
          <div className="absolute inset-0 border-t border-white/10 rounded-t-lg"></div>
          <div className="absolute inset-0 border-b border-black/20 rounded-b-lg"></div>
        </div>
      </div>
      <span className={`mt-2 text-sm font-medium ${theme.accent} uppercase tracking-wider`}>
        {label}
      </span>
    </div>
  );
}