import React, { useState } from "react";
import "../CompStyle.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h4>You clicked {count} times</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};
export default Counter;
