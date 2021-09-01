import React from "react";
import GrandChild from "./GrandChild";

const Name = (props) => {
  const style = {
    width: "200px",
    height: "200px",
    border: "1px solid red",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0.5rem",
  };
  return (
    <div style={style}>
      <p>Name Component</p>
      <h5>{props.name}</h5>
      <GrandChild name={props.name}></GrandChild>
    </div>
  );
};

export default Name;
