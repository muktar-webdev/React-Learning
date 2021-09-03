import React, { useReducer, useEffect } from "react";

//--userReducer template --//
const initialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.result,
      };
    case "FAILURE":
      return {
        loading: false,
        error: "There was a Problem for Fetching!",
        post: {},
      };
    default:
      return state;
  }
};

const GetPost2 = () => {
  //--state --//
  const [state, dispatch] = useReducer(reducer, initialState);

  //--Dataload --//
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/post/1`;
    fetch(url)
      .then((response) => response.json())
      //--if data loaded --//
      .then((data) => {
        dispatch({ type: "SUCCESS", result: data });
      })
      //--if data is not loaded --//
      .catch((err) => {
        dispatch({ type: "FAILURE" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Data is Loading.." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default GetPost2;
