import React, { useRef, useState } from "react";

function Timer() {
    
  const [count, setCount] = useState(0);
  const Ref = useRef(null);
  const Start = () => {
    console.log("Start button clicked");

   Ref.current =  setInterval(() => {
      setCount((c)=>c+1);
    }, 100);
  };
  const Pause = () => {
    console.log("Pause button clicked");
    clearInterval(Ref.current)
  };
  const Reset = () => {
    console.log("Reset button clicked");
    clearInterval(Ref.current)
    Ref.current = null
    setCount(0)
  };

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={Start}>Start</button>
      <button onClick={Pause}>Pause</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Timer;
