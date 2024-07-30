import React, { useState } from "react";

const MeanCalculator = () => {
  const [value, setvalue] = useState(0);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.toLowerCase() === "x") {
      alert("Program terminated.");
      setInput("");
      return;
    }

    const newValue = parseFloat(input);
    if (isNaN(newValue)) {
      alert("Please enter a valid number");
      setInput("");
      return;
    }

    const newCount = count + 1;
    const newMean = (value * count + newValue) / newCount;

    setvalue(newMean);
    setCount(newCount);
    setInput("");
  };

  return (
    <div>
      <h1>Mean Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a number or 'x' to exit"
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Current Mean: {value}</h2>
      <h2>Total Count: {count}</h2>
    </div>
  );
};

export default MeanCalculator;
