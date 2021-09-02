import React, { useState } from "react";
import '../../Style/Style.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count Me</button>
    </>
  );
};

export default Counter;
