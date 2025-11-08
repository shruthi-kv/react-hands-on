import react,{forwardRef} from 'react';

const Input = forwardRef((myref,ref) =>{
    console.log(myref,"myref");

    return(
        <input ref={ref} placeholder="type your name here...."/>
    )

})

export default Input;