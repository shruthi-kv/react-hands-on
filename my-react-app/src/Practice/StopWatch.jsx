import React, { useState, useEffect, useRef } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const id = useRef(null);

  const handleStart = () => {
    if (id.current !== null) return;
    id.current = setInterval(() => {
      setTime((i) => i + 1);
    }, 1000);
  };

  const handleStop = ()=>{
    clearInterval(id.current);
    id.current =null
  }

  const handleReset = ()=>{
    handleStop();
    setTime(0)
  }

  useEffect(() => {
    return () => {
      clearInterval(id.current);
    };
  }, []);

  return (
    <>
      <p>StopWatch</p>
      <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};

export default StopWatch;
