import React from "react";

const Child = ({ addEmoji }) => {
  const text = "I'm React Lover.";
  return <div>{addEmoji ? addEmoji(text, "💋") : text};</div>;
};

export default Child;
