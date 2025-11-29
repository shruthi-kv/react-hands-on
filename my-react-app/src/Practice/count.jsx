import React,{useState} from 'react';

const Count = () => {
    const[charCount,setcharCount]= useState('');
    console.log(charCount.length)

  return (
    <>
      <label>
        Enter the text here
        <input value ={ charCount} onChange={(e)=>setcharCount(e.target.value)}/>
      </label>
      <p>Char Count is : {charCount.length}</p>
    </>
  );
};

export default Count;
