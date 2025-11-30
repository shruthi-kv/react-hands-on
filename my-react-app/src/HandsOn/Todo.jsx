import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleAdd = () => {
    if (!text.trim()) return;
    setTodo([...todo, text]);
    setText("");
  };

  const handleDelete = (index) => {
    setTodo((prev) => prev.filter((item, i) => i !== index));
  };

  return (
    <div style={{padding:"20px"}}>
      <h1>This is todo</h1>
      <label>
        Enter the Todo here
        <input
          type="text"
          placeholder="Enter the todo here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e)=> e.key==='Enter' && handleAdd()}
        />
      </label>
      <button disabled={!text.trim()} onClick={handleAdd}>Add</button>
      {todo.length > 0 && (
        <ul>
          {todo.map((item, index) => {
            return (
              <li key={index}>
                {item} <button style={{ marginLeft:'10'}} onClick={() => handleDelete(index)}>x</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Todo;
