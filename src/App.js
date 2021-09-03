import React, { useState, useCallback, useMemo } from "react";
import "./App.css";
import Counter from "./components/USESTATE/Counter";
import DataLoad from "./components/UseEffect/DataLoad";

//--UseCallback & React.memo()--//
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

  // //--Without useMemo --//
  // const isEvenOrOdd = (e) => {
  //   let i = 0;
  //   while (i < 1000000000) i += 1;   //---Costly Operation --//
  //   return count1 % i === 0;
  // };

  //--with useMemo--//
  const isEvenOrOdd = useMemo(
    (e) => {
      let i = 0;
      while (i < 1000000000) i += 1; //---Costly Operation --//
      return count1 % i === 0;
    },
    [count1]
  );

  return (
    <div className="App">
      {/* --useState Hook-- */}
      {/* <Counter /> */}
      {/* --useEffect Hook-- */}
      {/* <DataLoad /> */}

      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <br />
      {/* //--withoutMemo --//
      <span>{isEvenOrOdd() ? "Even" : "Odd"}</span> */}
      <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
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
