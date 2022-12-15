import React, { Component } from "react";
import { render } from "react-dom";
import "./Navbar.css";

const HoverableDiv = React.memo(({ handleMouseOver, handleMouseOut }) => {
  return (
    <div
      id="username"
      className="buttoninput"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      Username
    </div>
  );
});

const HoverText = () => {
  return <div>Sign Out</div>;
};

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseOver() {
    this.setState(() => ({
      isHovering: true,
    }));
  }

  handleMouseOut() {
    this.setState(() => ({
      isHovering: false,
    }));
  }
  render() {
    return (
      <div id="alldiv">
        <div id="navbar-container">
          <a id="appnamediv" href="/">
            <p id="appname">AppName</p>
          </a>
          <div id="icons">
            <a id="feed-div" className="buttoninput" title="Feed" href="/">
              <svg
                width="35"
                height="35"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.75 9.938V21a.75.75 0 0 0 .75.75H9v-6.375a1.125 1.125 0 0 1 1.125-1.125h3.75A1.125 1.125 0 0 1 15 15.375v6.375h4.5a.75.75 0 0 0 .75-.75V9.937"></path>
                <path d="m22.5 12-9.99-9.563c-.234-.248-.782-.25-1.02 0L1.5 11.999"></path>
                <path d="M18.75 8.39V3H16.5v3.234"></path>
              </svg>
            </a>
            <a
              id="search-div"
              className="buttoninput"
              title="Search"
              href="/search"
            >
              <svg
                width="35"
                height="35"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m21.407 19.753-4.41-4.41a8.148 8.148 0 0 0 1.633-4.903c0-4.516-3.674-8.19-8.19-8.19s-8.19 3.674-8.19 8.19 3.674 8.19 8.19 8.19a8.148 8.148 0 0 0 4.902-1.633l4.41 4.41a1.171 1.171 0 0 0 1.655-1.654ZM4.59 10.44a5.85 5.85 0 1 1 5.85 5.85 5.857 5.857 0 0 1-5.85-5.85Z"></path>
              </svg>
            </a>
            <a
              id="post-div"
              className="buttoninput"
              title="New Post"
              href="/new-post"
            >
              <svg
                width="35"
                height="35"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
                <path d="M12 8.25v7.5"></path>
                <path d="M15.75 12h-7.5"></path>
              </svg>
            </a>
            <a
              id="profile-div"
              className="buttoninput"
              title="Profile"
              href="/profile"
            >
              <svg
                width="35"
                height="35"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.125 6.75c-.184 2.478-2.063 4.5-4.125 4.5-2.063 0-3.945-2.021-4.125-4.5-.188-2.578 1.64-4.5 4.125-4.5 2.484 0 4.312 1.969 4.125 4.5Z"></path>
                <path d="M12 14.25c-4.078 0-8.217 2.25-8.983 6.497-.092.512.197 1.003.733 1.003h16.5c.536 0 .826-.491.734-1.003C20.217 16.5 16.078 14.25 12 14.25Z"></path>
              </svg>
            </a>
            {/* <HoverableDiv
              handleMouseOver={this.handleMouseOver}
              handleMouseOut={this.handleMouseOut}
            /> */}
            {/* {this.state.isHovering && <HoverText />} */}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
