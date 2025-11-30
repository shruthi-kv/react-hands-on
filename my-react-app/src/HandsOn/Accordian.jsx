import React, { useState } from "react";

const Accordian = () => {
  const [showContent, setShowContnet] = useState(null);

  const data = [
    { title: "What is React?", content: "React is a JavaScript library." },
    { title: "What is a component?", content: "A reusable piece of UI." },
    {
      title: "What is state?",
      content: "State is data that changes over time.",
    },
  ];

  const handleToogle = (idx) => {
    setShowContnet(showContent === idx ? null :idx)
  };

  return (
    <>
      <h1>Below are the FAQs</h1>
      {data.map((item, idx) => {
        return (
          <div key={idx}>
            <h1 onClick={() => handleToogle(idx)} >
              {item.title}
            </h1>
            {showContent===idx && <p>{item.content}</p>}
          </div>
        );
      })}
    </>
  );
};

export default Accordian;
