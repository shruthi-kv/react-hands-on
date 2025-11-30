import React, { useState } from "react";

const Check = () => {
  const names = ["Shruthi", "Nancy", "Katerine"];
  const [select, setSelected] = useState([]);

  const handleSelection = (it) => {
    setSelected((prev) =>
      prev.includes(it) ? prev.filter((item) => item !== it) : [...prev, it]
    );
  };

  const handelSelectall = ()=>{
    setSelected((prev)=> prev.length !==names.length ? [...names] : [])
  }

 
  return (
    <div>
      <h1>Select any of the below:</h1>
      {names.length > 0 &&
        names.map((item, i) => {
          return (
            <label key={i}>
              {item}
              <input type="checkbox" checked={select.includes(item)} onChange={() => handleSelection(item)} />
            </label>
          );
        })}
        <label htmlFor="select-all">Select all</label>
        <input id="select-all" type='checkbox' checked={names.length ===select.length} onChange={()=> handelSelectall()}/>
      <ul>
        {select.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Check;
