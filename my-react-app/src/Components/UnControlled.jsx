import react,{useRef} from 'react';

const UnControlled = () =>{
    const name = useRef(null)


    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(name.current.value)
    }
    return(
        <form>
            <input type="text" placeholder = "This is unctrolled component" ref={name}/>
            <button onClick ={handleSubmit}>Submit</button>
        </form>
    )
}

export default UnControlled;