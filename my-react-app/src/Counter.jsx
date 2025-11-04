import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
 const handleIncrement = ()=>{
   setCount((prev)=> prev+1)
 }

  const handleDecrement =()=>{
    setCount((prev)=>prev-1)
  }

  const handleReset = () =>{
    setCount(0)
  }
  return (
   <>
     <button onClick={handleDecrement}>Decrement</button>
     <p>{count}</p>
     <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleReset}>Reset</button>
   </>
    
  )
}

export default App
