import React from "react";

const Child1 = ({ addEmoji, addBracket }) => {
  let text = "I'm a JavaScript Lover";
  if (addEmoji) {
    text = addEmoji(text, "😘");
  }
  if (addBracket) {
    text = addBracket(text);
  }
  return <div>{text}</div>;
};

export default Child1;
