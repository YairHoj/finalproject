import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import NewPost from "./NewPost";
import Post from "./Post";
import Search from "./Search";
import Oops from "./Oops";
import Allpost from "./Allpost";

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route
            path="/"
            element={
              <>
                <Allpost />
              </>
            }
          />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/profile" element={<Oops />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
