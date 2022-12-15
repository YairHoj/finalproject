import React, { Component } from "react";
import Post from "./Post";
import postinfo from "./Postinfo";

export class Allpost extends Component {
  render() {
    return (
      <div>
        {postinfo.map(function (text) {
          return <Post {...postinfo} />;
        })}
      </div>
    );
  }
}

export default Allpost;
