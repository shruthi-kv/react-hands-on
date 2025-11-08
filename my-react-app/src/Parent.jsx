import React, { useState, useEffect } from "react";
import PureComp from "./Components/Pure";
import RegularComp from "./Components/Regular";

const Parent = () => {
  const [name, setName] = useState("Shruthi");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("---- Interval Triggered ----");
      setName("Shruthi"); // 👈 same value each time
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  console.log("******** Parent Component Rendered ********");

  return (
    <>
      <h3>Parent Component</h3>
      <PureComp name={name} />
      <RegularComp name={name} />
    </>
  );
};

export default Parent;
