import "./App.css";
import Header from "./Header";
import React, { useState } from "react";
import Post from "./Post";
import Menu from "./Menu";
function App() {
  const [visiblePosts, setVisiblePosts] = useState({
    post1: true,
    post2: true,
    post3: true,
    post4: true,
  });

  const toggleVisibility = (postKey) => {
    setVisiblePosts((prevState) => ({
      ...prevState,
      [postKey]: !prevState[postKey],
    }));
  };
  return (
    <div className="App">
      <Header />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ background: "", display: "flex", width: "60%" }}>
          <div style={{ width: "70%" }}>
            <div>
              <Post isVisible={visiblePosts.post1} postKey="post1" />
              <Post isVisible={visiblePosts.post2} postKey="post2" />
              <Post isVisible={visiblePosts.post3} postKey="post3" />
              <Post isVisible={visiblePosts.post4} postKey="post4" />
            </div>
          </div>

          <div style={{ width: "30%" }}>
            <Menu toggleVisibility={toggleVisibility} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
