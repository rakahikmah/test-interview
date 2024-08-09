import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);

  function handleInput(e) {
    
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  }

  function handleSubmit() {
    if (inputValue === "") return;
    

    const reversedValue = inputValue.split("").reverse().join("");
    
    const difference = Math.abs(parseInt(inputValue) - parseInt(reversedValue));
    
    setResult(difference);
  }

  return (
    <div className="App">
      <div>
        Number: <input value={inputValue} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
