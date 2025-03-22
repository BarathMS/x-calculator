import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const handleButtonClick = (value) => {
    if (value === "c") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(input));
        // The eval() [evaluate] function in JavaScript is a built-in function that evaluates a string as JavaScript code
        // (using try-catch is a better option) when using eval() function 
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
        <input style={{color:"grey", borderColor:"transparent"}} type="text" value={result} readOnly />
      </div>
      <div className="button-container">
        <button onClick={() => handleButtonClick(7)}>7</button>
        <button onClick={() => handleButtonClick(8)}>8</button>
        <button onClick={() => handleButtonClick(9)}>9</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick(4)}>4</button>
        <button onClick={() => handleButtonClick(5)}>5</button>
        <button onClick={() => handleButtonClick(6)}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick(1)}>1</button>
        <button onClick={() => handleButtonClick(2)}>2</button>
        <button onClick={() => handleButtonClick(3)}>3</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("c")}>c</button>
        <button onClick={() => handleButtonClick(0)}>0</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
    </div>
  );
}

export default App;
