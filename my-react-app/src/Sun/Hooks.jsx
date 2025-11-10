import React, { useState } from "react";

function NumberPrinter() {
  const numbers = [10, 20, 30, 40, 50]; // your array
  const [index, setIndex] = useState(0); // track current number
  const [output, setOutput] = useState([]); // store printed numbers

  const handleClick = () => {
    if (index < numbers.length) {
      setOutput([...output, numbers[index]]);
      setIndex(index + 1);
    } else {
      alert("All numbers printed!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={handleClick}>Print Next Number</button>
      <h3>Printed Numbers:</h3>
      <ul>
        {output.map((num, i) => (
          <li key={i}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default NumberPrinter;
