import React, { useState } from "react";

const ClilckCounter = () => {
  const [count, setCount] = useState(0);
  //--handle Click Counter --//
  //   const handleClickCounter = (e) => setCount(count + 1);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} Times</button>
      {/* higher order function 
      <button onClick={() => setCount(count + 1)}>Click {count} Times</button>   */}
    </div>
  );
};

export default ClilckCounter;
