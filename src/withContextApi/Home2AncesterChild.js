import React, { useContext } from "react";
import { ContextApi } from "../App";
const Home2AncesterChild = () => {
  //--useContext -//
  const count = useContext(ContextApi);

  return (
    <div>
      <h1>Home's Anchester Child </h1>
      <p>Counter :{count}</p>
    </div>
  );
};

export default Home2AncesterChild;
