import React from "react";
import Home2Child from "./Home2Child";

const Home2 = ({ count }) => {
  const style = {
    border: "1px solid red",
    width: "100%",
    textAlign: "center",
  };
  return (
    <div style={style}>
      <h1>Home Component</h1>
      <p>Counter : {count}</p>
      <Home2Child count ={count}/>
    </div>
  );
};

export default Home2;
