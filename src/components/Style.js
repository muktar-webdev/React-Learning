import React from "react";
import "./Style.css";

const Style = () => {
  const img1 = `https://picsum.photos/200/300`;
  const img2 = `https://picsum.photos/350/300`;
  const img3 = `https://picsum.photos/300/300`;
  const link = `https://www.google.com/`;
  const style = { width: "300px", height: "300px" };
  return (
    <div className="styleContainer">
      <h1>Text Shadow Introduction</h1>
      <div className="img_div">
        <img style={style} src={img1} alt="randomImage" />
        <img style={style} src={img2} alt="randomImages" />
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img style={style} src={img3} alt="randomImages" />
        </a>
      </div>
    </div>
  );
};

export default Style;
