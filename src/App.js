import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [input, setInput] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(e) {
    setInput(e.target.value);
    setPrint(false);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" onChange={getData} />
      <br />
      <br />
      <button onClick={() => setPrint(true)}>Print Name</button>
      {print ? <h1>{input}</h1> : null}
    </div>
  );
}
