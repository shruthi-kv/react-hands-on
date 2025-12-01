import React,{useState} from 'react';

const Radio = () => {
  const[selected,setSelected] = useState(null);
  return (
    <>
    <h1>Select color of you wish:</h1>
      <label style={{marginLeft:"40px"}}>
        Red
        <input type="radio" value="Red" checked={selected==='Red'} onChange={(e)=> setSelected(e.target.value)}/>
      </label>

       <label style={{marginLeft:"40px"}}>
        Yellow
        <input type="radio" value="Yellow" checked={selected==='Yellow'} onChange={(e)=> setSelected(e.target.value)}/>
      </label>


       <label style={{marginLeft:"40px"}}>
        Black
        <input type="radio" value="Black" checked={selected==='Black'} onChange={(e)=> setSelected(e.target.value)}/>
      </label>

      {selected && <p>{selected}</p>}
      <div style={{backgroundColor :`${selected}`}}>This is the Color</div>
    </>
  );
};

export default Radio;
