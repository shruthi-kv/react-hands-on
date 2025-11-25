import React,{useState} from 'react';

const Checkbox1 = () => {

  let names = ["Shruthi", "Rahul", "Amit"];
  const [selected,setSelected] = useState([])

  const handleOnChange = (item)=>{
    console.log(item)
    setSelected((prev)=> 
      prev.includes(item) ? 
        prev.filter((i)=> i!=item) :
        [...prev,item]
    )
  }
  return <>{
    names.map((item)=>{
        return(
            <div key={item}>
                <label>
                    <input type='checkbox'  onChange={()=>handleOnChange(item)}/>
                     {item}
                </label>
            </div>
        )
    })
  }
  {
    selected.length>0 && selected.map((item)=>{
        return(
            <p key={item}>{item}</p>
        )
    })
  }
  
  </>;
};

export default Checkbox1;
