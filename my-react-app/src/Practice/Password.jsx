import react,{useState} from 'react';


const Password = () =>{
    const[show, setIsShow] = useState(false);

    return(
        <>
        <lable> Enter your Password
               <input type={show ? 'text' :'password'}/>
        </lable>
        <button onClick={()=> setIsShow((prev)=> !prev)}>{show ? 'Hide' : 'Show'}</button>
 
        </>
    )
}

export default Password;


// const PasswordField = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <input type={show ? "text" : "password"} />
//       <button onClick={() => setShow(prev => !prev)}>
//         {show ? "Hide" : "Show"}
//       </button>
//     </div>
//   );
// };
