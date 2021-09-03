import React, { useReducer } from "react";

//--creating a template for useReducer --//
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>Count - {count}</div>
      <br />
      <button type="button" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
    </>
  );
};

export default Counter;
