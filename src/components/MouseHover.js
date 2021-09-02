import React, { useState } from "react";

const MouseHover = () => {

  const [mouseup, setMouseup] = useState(0);
  //--handle Click Counter --//
  //   const handleClickCounter = (e) => setCount(count + 1);
  return (
    <div>
      <h3
        onMouseOver={() => setMouseup(mouseup + 1)}
        style={{ cursor: "pointer" }}
      >
        Mouse Over {mouseup} Times
      </h3>
    </div>
  );
};

export default MouseHover;
