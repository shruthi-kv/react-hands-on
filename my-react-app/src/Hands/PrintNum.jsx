import React,{useState} from 'react';

const PrintNum = () =>{
    let arr = [1,6,9,4,6,2,2];

    const[output,setOutput] = useState([]);
    const[index,setIndex] = useState(0);

    const PrintNextNumber = () =>{
        if(index < arr.length){
            setOutput([...output,arr[index]]);
            setIndex((prev)=>prev+1)

        }else{
            alert('All numbers printed')
        }
    }



    return(
     <>
     <button onClick={PrintNextNumber}>Next Number</button>
     <p>The numbers are :</p>
     <ul>
        {
            output.map((val,i)=> <li>{val}</li>)
        }
     </ul>
     </>
    )
}

export default PrintNum;