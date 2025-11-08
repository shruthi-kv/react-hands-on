// import WithAuthDashboard from './Dashboard'
import PureComp from "./utils/pureComp";
import React,{useState,useEffect} from 'react';

const App = () => {
    const[name, setName] = useState('');

    useEffect(()=>{
        const interval = setInterval(()=>{
            setName('Shruthi')
        },1000)
        return ()=> clearInterval(interval)
    })

    console.log('APP rendered')
  return (
    // <WithAuthDashboard />
    <>
      <PureComp name={name} />
      <PureComp name={name} />
    </>
  );
};

export default App;
