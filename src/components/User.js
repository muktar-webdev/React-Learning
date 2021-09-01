import React from "react";

const User = (props) => {
  const user = props.user;
  const { id, email } = user;

  const style = {
    width: "200px",
    height: "200px",
    border: "1px solid red",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom:"0.4rem"
  };
  return (
    <div style={style}>
        <h5>User Component</h5>
      <p>ID : {id}</p>
      <p> Email : {email}</p>
    </div>
  );
};

export default User;
