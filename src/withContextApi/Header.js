import React, { useContext } from "react";
import { ContextApi } from "../App";

const Header = (props) => {
  //--useContextApi --//
  const header = useContext(ContextApi);
  //--destructuring props --//
  const { increment, decrement } = props;
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
      <p>Counter : {header}</p>
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
