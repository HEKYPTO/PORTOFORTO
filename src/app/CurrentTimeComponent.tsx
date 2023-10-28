import React, { useState, useEffect } from "react";

const CurrentTimeComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="text-xs font-semibold mb-1">
      {currentTime.toLocaleDateString()}
      <br />
      {currentTime.toLocaleTimeString()}
    </div>
  );
};

export default CurrentTimeComponent;
