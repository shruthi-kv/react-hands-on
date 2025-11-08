import React,{useRef} from 'react';
import Input from './Input';

const Form = () =>{
    const inp = useRef(null)

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inp.current.value)
    }

    return(
        <>
        <Input ref={inp}/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Form;