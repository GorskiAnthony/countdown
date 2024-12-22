import React, { useState } from 'react';
import { FlipCard } from './components/FlipCard';
import { HolidayToggle } from './components/HolidayToggle';
import { CountdownHeader } from './components/CountdownHeader';
import { useCountdown } from './hooks/useCountdown';
import { HolidayType } from './types/countdown';
import { getHolidayTheme } from './styles/themes';

function App() {
  const [holiday, setHoliday] = useState<HolidayType>('newYear');
  const theme = getHolidayTheme(holiday);
  
  const targetDate = new Date(
    new Date().getFullYear(),
    holiday === 'newYear' ? 11 : 11,
    holiday === 'newYear' ? 31 : 25,
    23, 59, 59, 999
  );
  
  const timeLeft = useCountdown(targetDate);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.background} flex flex-col items-center justify-center p-4`}>
      <HolidayToggle holiday={holiday} onToggle={setHoliday} />
      
      <CountdownHeader holiday={holiday} />

      <div className="flex flex-wrap justify-center gap-4">
        <FlipCard digit={timeLeft.days} label="days" holiday={holiday} />
        <FlipCard digit={timeLeft.hours} label="hours" holiday={holiday} />
        <FlipCard digit={timeLeft.minutes} label="minutes" holiday={holiday} />
        <FlipCard digit={timeLeft.seconds} label="seconds" holiday={holiday} />
      </div>

      <div className="mt-12 text-gray-400 text-sm">
        Day D: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
}

export default App;