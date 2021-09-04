import "./App.css";
import Header from "./withoutContextApi/Header";
import Home2 from "./withoutContextApi/Home2";

import React, { useState } from "react";

function App() {
  //--Common State for all Components --//
  const [count, setCount] = useState(0);

  //--handleCount --//
  const increment = (e) => setCount(count + 1);
  const decrement = (e) => setCount(count - 1);

  return (
    <div className="App">
      <Header count={count} increment={increment} decrement={decrement}/>
      <Home2 count={count} />
    </div>
  );
}

export default App;
