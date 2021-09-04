import React, { useContext } from "react";
import { ContextApi } from "../App";

const Header = (props) => {
  //--useContextApi --//
  const [count, setCount] = useContext(ContextApi);

  const style = {
    border: "1px solid red",
    width: "100%",
    height: "200px",
    textAlign: "center",
  };
  return (
    <div style={style}>
      <h1>Header Component </h1>
      {/* <p>Counter : {headerContext}</p> */}
      <p>Counter : {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Header;
