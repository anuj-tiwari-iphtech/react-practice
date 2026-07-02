

import { useState, useRef } from "react";

function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  function start() {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  }

  function stop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  return (
    <>
      <h2>{seconds}</h2>

      <button onClick={start}>
        Start
      </button>

      <button onClick={stop}>
        Stop
      </button>
    </>
  );
}

export default StopWatch;