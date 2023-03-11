import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Intro from "./components/intro.js";
import AboutMe from "./components/aboutme.js";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutMe />
    </div>
  );
}

export default App;
