import React, { useState } from "react";

const ToggleFax = () => {
  const [index, setIndex] = useState(null);

  const faqs = [
    { q: "What is React?", a: "React is a UI library." },
    { q: "What is a component?", a: "Reusable UI piece." },
  ];

  const handleAnswer = (idex) => {
    setIndex(index === idex ? null : idex);
  };

  return (
    <>
      <p>Toggle faw</p>
      <ul>
        {faqs.map((item, i) => {
          return (
            <div key={i}>
              <div onClick={(item) => handleAnswer(i)}>{item.q}</div>
              {index === i && <p>{item.a}</p>}
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default ToggleFax;



// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     { q: "What is React?", a: "React is a UI library." },
//     { q: "What is a component?", a: "Reusable UI piece." },
//   ];

//   const toggle = (i) => {
//     setOpenIndex(openIndex === i ? null : i);
//   };

//   return (
//     <div>
//       {faqs.map((faq, i) => (
//         <div key={i}>
//           <h3 onClick={() => toggle(i)}>{faq.q}</h3>
//           {openIndex === i && <p>{faq.a}</p>}
//         </div>
//       ))}
//     </div>
//   );
// };
