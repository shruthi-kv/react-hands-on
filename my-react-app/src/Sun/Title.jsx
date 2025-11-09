import React,{useMemo} from 'react';

const Title = ({title}) =>{

    console.log('Title comp is rendered')
    return(
        <p>{title}</p>
    )
}

export default React.memo(Title);