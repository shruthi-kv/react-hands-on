import React from 'react';

const CallChild = ({onClick}) =>{

    console.log('child rendered')
    return(
        <button onClick={onClick}>Click</button>
    )
}

export default React.memo(CallChild) ;
