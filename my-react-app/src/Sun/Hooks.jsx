import React, {useRef,useState,useCallback} from 'react';
import ShowCount from './ShowCount';
import Count from './Count';
import Title from './Title';


const Hooks = () =>{
    const[age,setAge] = useState(0);
    const[salary,setSalary] = useState(0);

    const incrementAge = useCallback(() =>{
        console.log('increment age is called')
        setAge((prev)=>prev+1)
    },[age])

    const incrementSalary =useCallback(() =>{
        console.log('increment salary is called')
        setSalary((prev)=>prev+1000)
    },[salary]) 


    return(
        <>
      
        <Title title={"Age and Salary are below"} />
        <ShowCount count ={age}/>
        <Count text={'Age'} handleClick = {incrementAge}/>
        <ShowCount count ={salary}/>
        <Count text={'Salary'} handleClick = {incrementSalary}/>
        </>
    )

}

export default Hooks;

