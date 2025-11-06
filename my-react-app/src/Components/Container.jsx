import React,{useState,useEffect} from 'react';
import Card from './Card';

export default function Container(){
    const [user, setUser] = useState({name:'', role:''})
    useEffect(()=>{
        setTimeout(()=>{
            setUser({name:"Shruthi", role:"MERN"})
        },3000)
    })

    return(
        <Card name={user.name} role={user.role}/>
    )

}