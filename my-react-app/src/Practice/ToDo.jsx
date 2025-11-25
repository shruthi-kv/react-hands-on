import React, { useState } from "react";

const ToDo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (!text.trim()) return;

    setTodo([...todo, { id: Date.now(), text, completed: false }]);

    setText("");
  };
  console.log(todo, "todo");

  const handleDeleteTodo = (did)=>{
    setTodo((prev)=>
        prev.filter((i)=> i.id !== did)
    )

  }


  return (
    <>
      <label>
        Enter the Task
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button onClick={handleAddTodo}>Add</button>
      <div>
        <ul>
          {todo.map((item) => {
            return (
   
                <li key={item.id}>
                  <span>{item.text}</span>
                  <button onClick={()=> handleDeleteTodo(item.id)}>Delete</button>
                </li>
  
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ToDo;
