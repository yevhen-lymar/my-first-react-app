import React, { useState } from "react";
import Products from "./Products";
import MyButtonCounter from "./MyButtonCounter";
import MyButton from "./MyButton";
// import logo from "./logo.svg";
import "./App.css";

const userDimon = { name: "Dimon", age: 33, sex: "male" };
const userYevhen = { name: "Yevhen", age: 32, sex: "male" };
const userArray = [userDimon, userYevhen];

function MyButtonClick() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}



function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br /> How do you do?</p>
    </>
  );
}

function InfoPage() {
  return (
    <>
      <h1>Info</h1>
      <p>Hello {userArray[1].name}..<br /> How do you do?</p>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <MyButtonCounter count={count} setCount={setCount} />
        <MyButtonCounter count={count} setCount={setCount} />
        <AboutPage />
        <MyButtonClick />
        <InfoPage />
        <Products />
        <MyButton user={userDimon.name} condition={false} />
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
