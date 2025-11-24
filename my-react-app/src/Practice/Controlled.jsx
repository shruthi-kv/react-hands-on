import React,{useState} from 'react';

const Controlled = () =>{
    const[name, setName] = useState('');
    const[number,setNumber] = useState(null)
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name,number)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name
                 <input type='text' onChange={(e)=> setName(e.target.value)}/>
            </label>

            <label>
                Phone
                  <input type='number' onChange={(e)=> setNumber(e.target.value)}/>
            </label>
            {name.length < 4 &&
                <p>Name should be more than 5 characters</p>
            }
           
          
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Controlled;