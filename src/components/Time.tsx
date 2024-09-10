import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString([], {
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
    }),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour12: true,
          hour: "numeric",
          minute: "2-digit",
        }),
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return <p>{time}</p>;
};
export default Time;
