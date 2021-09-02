import React, { useState } from "react";

const withCounter = (OriginalComponet) => {
  // --New Component --//
  const NewComponent = () => {
    const [count, setCount] = useState(0);
    const incrementCount = (e) => setCount(count + 1);
    return (
      <div>
        <OriginalComponet count = {count} incrementCount = {incrementCount}></OriginalComponet>
      </div>
    );
  };
 
  return NewComponent;
};

export default withCounter;
