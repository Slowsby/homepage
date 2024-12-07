import { useState, useEffect } from 'react';

type exportDateProps = {
  exportDate: (date: string) => void;
};
const DateDisplay = ({ exportDate }: exportDateProps) => {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState(new Date());

  useEffect(() => {
    // Update the date once on component mount
    setDate(new Date());
    setDay(new Date());
  }, []);

  // Format the date
  const currentDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  exportDate(currentDate);
  // Format the weekday
  const currentDay = day.toLocaleDateString('en-US', {
    weekday: 'long'
  });
  return (
    <div className='mt-4'>
      <p>{currentDay},</p>
      <p>{currentDate}</p>
    </div>
  );
};

export default DateDisplay;
