import React, { useEffect, useRef } from "react";

const Form = () => {
  //--crating a container whehre jsx element will be show --//
  const inputRef = useRef(null);

  //--loaded the component --//
  useEffect(() => {
    //--For selecting specific input element or current element which we crate connection with useRef--//
    inputRef.current.focus();
  }, []);
  return (
    <>
      <input ref={inputRef} type="text" placeholder=" Enter Something..." />
    </>
  );
};

export default Form;
