import React,{useState} from 'react';

const Toggle = () =>{

    const[isShow,setIsShow] = useState(false);


    const HandleToggle = ()=>{
        console.log(isShow,"isShow")
        setIsShow((prev)=>!prev)
    }

    return(
        <>
        <button onClick={HandleToggle}>{isShow ? 'Hide' : 'Show'}</button>
        {
           isShow && <p>Hello How are you ?</p>
        }

        </>
    )
}

export default Toggle;