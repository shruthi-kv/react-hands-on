import React, {useState,useMemo} from 'react';


const Memo = () =>{
    const[count,setCount] = useState(0);
    const [text,setText] = useState('')
    function calculate(count){
        for(let i=0;i<=1000000000;i++){

        }
        return count*2;
    }

    let value =useMemo(()=> calculate(count),[count]) 

    function handleInput(e){
        setText(e.target.value)
    }

    return(
        <>
        <p>The count is {value}</p>
        <p>{count}</p>
        <button onClick={()=>setCount((prev)=>prev+1) }>Increment</button>
        <input type="text" onChange={handleInput}/>
        </>
        
    )

}

export default Memo;
