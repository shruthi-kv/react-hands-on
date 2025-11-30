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
  const handleSelectAll = () =>{
    if(selected.length === names.length){
      setSelected([])
    }else{
      setSelected([...names])
    }
  }

  return <>{
    names.map((item)=>{
        return(
            <div key={item}>
                <label>
                    <input type='checkbox' checked={selected.includes(item)} onChange={()=>handleOnChange(item)}/>
                     {item}
                </label>
            </div>
        )
    })
  }
  <label>Select All
    <input type='checkbox' checked={selected.length === names.length} onChange={handleSelectAll}/>
  </label>

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
