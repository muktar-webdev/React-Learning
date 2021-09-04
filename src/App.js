import React, { createContext, useState } from "react";
import "./App.css";
/* // --WithoutContext Api --//
import Header from "./withoutContextApi/Header";
import Home2 from "./withoutContextApi/Home2"; */

//--withContext Api --//
import Header from "./withContextApi/Header";
import Home2 from "./withContextApi/Home2";

//--crating context api --//
export const ContextApi = createContext();

function App() {
  const [count, setCount] = useState(0);

  //--hanldeClick --//
  const increment = (e) => setCount(count + 1);
  const decrement = (e) => setCount(count - 1);

  return (
    <ContextApi.Provider value={count}>
      {/* --Without Conext Api -- */}
      {/* <Header count={count} increment={increment} decrement={decrement}/>
      <Home2 count={count} /> */}

      {/* --With Conext Api -- */}
      <Header increment={increment} decrement={decrement}/>
      <Home2 />
    </ContextApi.Provider>
  );
}

export default App;
