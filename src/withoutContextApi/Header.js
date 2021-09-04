import React from "react";

const Header = (props) => {
  const { count, increment, decrement } = props;
  const style = {
    border: "1px solid red",
    width: "100%",
    height: "200px",
    textAlign: "center",
  };
  return (
    <div style={style}>
      <h1>Header Component </h1>
      <p>Counter : {count}</p>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Header;
