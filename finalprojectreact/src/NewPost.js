import React from "react";
import "./Posting.css";
import { useRef } from "react";

function NewPost() {
  const ref = useRef(null);

  const handleClick = (event) => {
    // 👇️ access textarea value
    console.log(ref.current.value);
  };
  return (
    <div id="allp">
      <div id="new-post">
        <p id="new-post-text">New Post</p>
        <div id="exit-button-div">
          <button id="exit-button">X</button>
        </div>
        <div id="new-post-div">
          <textarea
            placeholder="Type your new post... (max. 300 chars)"
            id="new-post-input"
            maxLength={300}
            ref={ref}
            name="message"
          ></textarea>
        </div>
        <div id="submit-div">
          <button id="submit-button" onClick={handleClick}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
