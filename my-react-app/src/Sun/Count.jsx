import React from 'react'
const Count = ({handleClick,text}) =>{

    console.log('showing now is ', text)
    return(
        <button onClick={handleClick}>Increment</button>
    )
}

export default React.memo(Count);