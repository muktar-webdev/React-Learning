import React from "react";

const Photo = (props) => {
  const { title, url } = props.photo;
  return (
    <>
      <div>
        <h1>{title}</h1>
        <img src={url} alt="" />
      </div>
    </>
  );
};

export default Photo;
