import React from "react";

const Button = (props) => {
  const { handleClick, children } = props;
  console.log(`Rendering ${children}`);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default React.memo(Button);
