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




// import { useState } from "react";

// export default function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");

//   const addTodo = () => {
//     if (!text.trim()) return;

//     setTodos([
//       ...todos,
//       { id: Date.now(), text, completed: false }
//     ]);

//     setText("");
//   };

//   const toggleTodo = (id) => {
//     setTodos(prev =>
//       prev.map(todo =>
//         todo.id === id
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(prev => prev.filter(todo => todo.id !== id));
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Todo List</h2>

//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter task..."
//       />

//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id} style={{
//             textDecoration: todo.completed ? "line-through" : "none",
//             cursor: "pointer"
//           }}>
//             <span onClick={() => toggleTodo(todo.id)}>
//               {todo.text}
//             </span>

//             <button onClick={() => deleteTodo(todo.id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
