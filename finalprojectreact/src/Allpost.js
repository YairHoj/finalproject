import React, { useState, useEffect } from "react";
import Post from "./Post";

function Allpost() {
  const [text, setText] = useState([]);
  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:3001/postdata/", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      return setText(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {text.map((item, index) => {
        return (
          <div key={index}>
            <Post text={item.posttext} id={item.postid} />
          </div>
        );
      })}
    </div>
  );
}

export default Allpost;
