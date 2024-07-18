import React, { useState } from "react";

// import logo from "./logo.svg";
import "./App.css";

function MyButton() {
  return (
    <button>Click for ME</button>
  );
}

function AboutPage(){
  return (
    <>
    <h1>About</h1>
    <p>Hello there.<br /> How do you do?</p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AboutPage />
        <MyButton />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
