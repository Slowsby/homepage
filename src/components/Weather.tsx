import { useEffect, useState } from 'react';

const Weather = () => {
  const [temp, setTemp] = useState<string>('');
  const [currentLatitude, setCurrentLatitude] = useState<number>(0);
  const [currentLongitude, setCurrentLongitude] = useState<number>(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLatitude(position.coords.latitude);
      setCurrentLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (currentLatitude || currentLongitude) {
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${currentLatitude.toFixed(2)}&longitude=${currentLongitude.toFixed(2)}&current=temperature_2m`,
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const {
            current: { temperature_2m },
          } = data;
          setTemp(temperature_2m);
        });
    }
  }, [currentLatitude, currentLongitude]);
  return (
    <div className='absolute flex flex-row text-white text-xl p-5'>
      <p>{temp ? `${temp}°C` : ''}</p>
    </div>
  );
};

export default Weather;
