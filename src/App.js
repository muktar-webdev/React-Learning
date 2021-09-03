import React, { useState, useCallback } from "react";
import "./App.css";
import Counter from "./components/USESTATE/Counter";
import DataLoad from "./components/UseEffect/DataLoad";

//--Others component for UseMemo & UseCallback --//
import Title from "./components/UseCallback/Title";
import ShowCount from "./components/UseCallback/ShowCount";
import Button from "./components/UseCallback/Button";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //--handler --//
  const incrementByOne = useCallback((e) => {
    setCount1((preCount) => preCount + 1);
  }, []);

  const incrementByFive = useCallback((e) => {
    setCount2((preCount) => preCount + 5);
  }, []);
  return (
    <div className="App">
      {/* --useState Hook-- */}
      {/* <Counter /> */}
      {/* --useEffect Hook-- */}
      {/* <DataLoad /> */}

      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <br />
      <Button handleClick={incrementByOne}>Increment By One</Button>
      <br />
      <hr />
      <br />
      <ShowCount count={count2} title="Counter 2" />
      <br />
      <Button handleClick={incrementByFive}>Increment By Fice</Button>
    </div>
  );
}

export default App;
