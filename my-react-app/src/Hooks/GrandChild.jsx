import React,{useContext} from 'react';
import {myContext} from './Parent';

const GrandChild = ({name}) =>{

     const value = useContext(myContext);

    return(
        <p>The name is {value}</p>
    )
}

export default GrandChild;