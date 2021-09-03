import React, { useEffect, useState } from "react";

const GetPost = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  //--Dataload --//
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/1`;
    fetch(url)
      .then((response) => response.json())
      //--if data loaded --//
      .then((data) => {
        setLoading(false);
        setError("");
        setPost(data);
      })
      //--if data is not loaded --//
      .catch((err) => {
        setLoading(false);
        setError("There was a Problem", err);
        setPost({});
      });
  }, []);

  return (
    <div>
      {loading ? "Data is Loading.." : `Title : ${post.title}`}
      {error ? null : error}
    </div>
  );
};

export default GetPost;
