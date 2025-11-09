import React,{useState, useCallback} from 'react';
import CallChild from './CallChild';
const Callback = () =>{
    const[count,setCount] = useState(0)

    const handleClick =useCallback( () =>{
        console.log('function rendered')
    },[])

    console.log('comp rendered')
    return(
        <>
       <button onClick={()=> setCount((prev)=>prev+1)}>{count} +</button>
      <CallChild onClick={handleClick}/>
       
        </>
    )
}

export default Callback;