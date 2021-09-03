import React, { useReducer } from "react";

//--creating a template for useReducer --//
const initialState = { counter: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.value };
    case "decrement":
      return { counter: state.counter - action.value };
    default:
      return state;
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>Count - {count.counter}</div>
      <br />
      <button
        type="button"
        onClick={() => dispatch({ type: "increment", value: 1 })}
      >
        Increment By 1
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "increment", value: 5 })}
      >
        Increment By 5
      </button>
      <br />
      <br />
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", value: 1 })}
      >
        Decrement By 1
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", value: 5 })}
      >
        Decrement By 5
      </button>
    </>
  );
};

export default ComplexCounter;
