import React, { useContext } from "react";
import { ContextApi } from "../App";
const Home2AncesterChild = () => {
  //--useContext -//
  const [count, setCount] = useContext(ContextApi);

  return (
    <div>
      <h1>Home's Anchester Child </h1>
      <p>Counter :{count}</p>
      <button type="button" onClick={() => setCount(count + 5)}>
        Update State From AnchesterChildren with Increment by 5
      </button>
    </div>
  );
};

export default Home2AncesterChild;
