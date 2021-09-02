import React, { useState, useEffect } from "react";
import Photo from "./Photo";

const DataLoad = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let first20Data = data.slice(0, 20);
        setPhotos(first20Data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {photos.map((photo) => (
        <Photo photo={photo} key={photo.id} />
      ))}
    </>
  );
};

export default DataLoad;
