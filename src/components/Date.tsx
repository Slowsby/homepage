import { useState, useEffect } from 'react';

const DateDisplay = () => {
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
    day: 'numeric',
  });

  // Format the weekday
  const currentDay = day.toLocaleDateString('en-US', {
    weekday: 'long',
  });
  return (
    <div className='mt-4'>
      <p>{currentDay},</p>
      <p>{currentDate}</p>
    </div>
  );
};

export default DateDisplay;
