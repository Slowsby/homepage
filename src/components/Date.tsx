import { useState, useEffect } from "react";

const DateDisplay = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Update the date once on component mount
    setDate(new Date());
  }, []);

  // Format the date
  const currentDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <p>{currentDate}</p>;
};

export default DateDisplay;
