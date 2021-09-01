import React from "react";

const Others = (props) => {
  const address = props.user.address;
  const { street, suite, zipcode } = address;
  console.log(address);

  const style = {
    width: "200px",
    height: "200px",
    border: "1px solid red",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0.4rem",
  };
  return (
    <div style={style}>
      <h5>Others Component</h5>
      <p>{street}</p>
      <p>{suite}</p>
      <p>{zipcode}</p>
    </div>
  );
};

export default Others;
