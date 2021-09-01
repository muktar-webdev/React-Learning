import React from "react";

export default class Parent extends React.Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
  render(override) {
    let text = "I'm Parent Component";
    if(override){
      text = override;
    }
    return <div>{text}</div>;
  }
}
