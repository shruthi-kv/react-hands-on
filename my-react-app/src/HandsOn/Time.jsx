import React, { useState, useRef, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState(0);
  const interval = useRef(null);

  const handleStart = () => {
    if (interval.current != null) return;
    interval.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handleReset = () =>{
    setTime(0)
  }

  const handleStop = () =>{
    clearInterval(interval.current)
    interval.current = null
  }

  useEffect(() => {
    return () => clearInterval(interval.current);
  }, []);
  return (
    <div>
      <h1>Timer Watch</h1>
      <h1 style={{ marginLeft: "20px" }}>{time}</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleReset}> Reset</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default Time;
