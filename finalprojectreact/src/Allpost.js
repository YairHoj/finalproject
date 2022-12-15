import React, { useState, useEffect } from "react";
import Post from "./Post";
import postinfo from "./Postinfo";

function Allpost() {
  // const [post, setPost] = useState();
  // const getPostsDb = async () => {
  //   const response = await fetch("url", {
  //     method: "GET",
  //   });
  //   const data = response.json();
  //   return setPost(data);
  // };

  // useEffect(() => {
  //   getPostsDb();
  // }, []);

  return (
    <div>
      {postinfo.map((item, index) => {
        console.log(item.text);
        return (
          <div key={index}>
            <Post text={item.text} id={item.id} />
          </div>
        );
      })}
    </div>
  );
}

export default Allpost;
