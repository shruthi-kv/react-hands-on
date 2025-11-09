import React from 'react'

const ShowCount = ({count}) =>{
    console.log('show count is rendered')

    return(
        <>
        <p>It is {count}</p>
        </>
    )

}

export default React.memo(ShowCount);
