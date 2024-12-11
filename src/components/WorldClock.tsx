import { getCurrentDate } from '../utils/getCurrentDate';

const timeZones: { timezone: string; place: string }[] = [
  { timezone: 'America/Anchorage', place: 'Alaska' },
  { timezone: 'America/Los_Angeles', place: 'California' },
  { timezone: 'America/Chicago', place: 'Texas' },
  { timezone: 'America/New_York', place: 'New York' },
  { timezone: 'Europe/London', place: 'London' },
  { timezone: 'Europe/Amsterdam', place: 'Amsterdam' },
  { timezone: 'Asia/Oral', place: 'Kazakhstan' },
  { timezone: 'Asia/Tokyo', place: 'Tokyo' },
  { timezone: 'Australia/Sydney', place: 'Sydney' }
];

export default function WorldClock() {
  const getTimezone = (s: string) => {
    const date: Date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: s,
      timeZoneName: 'short',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div className={`${getCurrentDate()} bg-cover absolute w-full h-full`}>
      <div className='flex flex-wrap gap-1 justify-center items-center min-h-screen'>
        {timeZones.map((el, key) => {
          return (
            <p key={key} className='text-white text-center w-1/4'>
              <span className='text-5xl'>{el.place}</span>
              <br />
              <span className='text-lg'>{getTimezone(el.timezone)}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
