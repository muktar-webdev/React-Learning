import React, { useState, useCallback, useMemo } from "react";
import "./App.css";
/* import Counter from "./components/USESTATE/Counter";
import DataLoad from "./components/UseEffect/DataLoad"; */

//--UseCallback & React.memo()--//
/* import Title from "./components/UseCallback/Title";
import ShowCount from "./components/UseCallback/ShowCount";
import Button from "./components/UseCallback/Button"; */

//--useRef & forwardRef --//
// import Form from "./components/UseRef/Form";

//--useReducer hook --//
// import Counter from "./components/UseReducer/Counter";
// import ComplexCounter from "./components/UseReducer/ComplexCounter.js";
import GetPost from "./components/UseReducer/GetPost";
import GetPost2 from "./components/UseReducer/GetPost2";

function App() {
  /*  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //--handler --//
  const incrementByOne = useCallback((e) => {
    setCount1((preCount) => preCount + 1);
  }, []);

  const incrementByFive = useCallback((e) => {
    setCount2((preCount) => preCount + 5);
  }, []); */

  // //--Without useMemo --//
  // const isEvenOrOdd = (e) => {
  //   let i = 0;
  //   while (i < 1000000000) i += 1;   //---Costly Operation --//
  //   return count1 % i === 0;
  // };

  //--with useMemo--//
  /*  const isEvenOrOdd = useMemo(
    (e) => {
      let i = 0;
      while (i < 1000000000) i += 1; //---Costly Operation --//
      return count1 % 2 === 0;
    },
    [count1]
  ); */

  return (
    <div className="App">
      {/* --useState Hook-- */}
      {/* <Counter /> */}
      {/* --useEffect Hook-- */}
      {/* <DataLoad /> */}

      {/*  //--useCallback & useMemo & React.memo() --
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <br />
      {/* //--withoutMemo --//
      <span>{isEvenOrOdd() ? "Even" : "Odd"}</span> --}
      <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
      <Button handleClick={incrementByOne}>Increment By One</Button>
      <br />
      <hr />
      <br />
      <ShowCount count={count2} title="Counter 2" />
      <br />
      <Button handleClick={incrementByFive}>Increment By Fice</Button> */}

      {/* {/* --useRef hook -- }
    <Form></Form> */}

      {/* --useReducer -- */}
      {/* <Counter /> */}
      {/* <ComplexCounter /> */}

      {/* <GetPost></GetPost> */}
      <GetPost2></GetPost2>
    </div>
  );
}

export default App;
