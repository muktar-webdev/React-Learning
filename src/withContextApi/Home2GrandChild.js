import React, { useContext } from "react";
import Home2AncesterChild from "./Home2AncesterChild";

import { ContextApi } from "../App";
const Home2GrandChild = () => {
  //--useContext -//
  const count = useContext(ContextApi);
  return (
    <div>
      <h1>Home's GrandChild</h1>
      <p>Counter : {count}</p>
      <Home2AncesterChild />
    </div>
  );
};

export default Home2GrandChild;
