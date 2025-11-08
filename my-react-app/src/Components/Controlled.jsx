import react,{useState} from 'react';

const Controlled = () =>{
    const[name,setName] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name)
    }
    return(
        <>
        <form>
            <input type="text" placeholder="controlled comp data here...." value={name} onChange={(e)=> setName(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Controlled;