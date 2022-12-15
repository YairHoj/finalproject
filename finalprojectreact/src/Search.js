import "./Search.css";
import React from "react";
import { useRef } from "react";

function Search() {
  const ref = useRef(null);

  const handleClick = (event) => {
    // 👇️ access textarea value
    console.log(ref.current.value);
  };

  return (
    <div id="allz">
      <div id="new-post">
        <p id="new-post-text">Search</p>
        <div id="exit-button-div">
          <button id="exit-button">X</button>
        </div>
        <div id="new-post-div">
          <textarea
            placeholder="Search Here..."
            id="new-post-input"
            maxLength={300}
            ref={ref}
            name="message"
          ></textarea>
        </div>
        <div id="submit-div">
          <button id="submit-button" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
