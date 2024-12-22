import { HolidayType } from '../types/countdown';

export const getHolidayTheme = (holiday: HolidayType) => {
  return {
    newYear: {
      background: 'from-gray-900 via-gray-800 to-gray-900',
      cardFrom: 'from-gray-800',
      cardTo: 'to-gray-900',
      accent: 'text-purple-400',
    },
    christmas: {
      background: 'from-red-900 via-green-900 to-red-900',
      cardFrom: 'from-red-800',
      cardTo: 'to-green-900',
      accent: 'text-red-400',
    },
  }[holiday];
};