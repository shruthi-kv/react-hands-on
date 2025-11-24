import React from 'react';

const Button = ({buttonProps, varient}) =>{
    console.log(varient,"varient")
    return(
        <button disabled={buttonProps?.isDisabled} style={varient?.primary}>Click Here</button>
    )
}

export default Button;

// Create a reusable <Button /> with variant, size, disabled.