import React, { useContext } from "react";
import Home2Child from "./Home2Child";
import { ContextApi } from "../App";

const Home2 = () => {
  //--useContext -//
  const count = useContext(ContextApi);

  const style = {
    border: "1px solid red",
    width: "100%",
    textAlign: "center",
  };
  return (
    <div style={style}>
      <h1>Home Component</h1>
      <p>Counter : {count}</p>
      <Home2Child />
    </div>
  );
};

export default Home2;
