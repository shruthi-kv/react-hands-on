import React,{useReducer} from 'react';


const CountReducer = (state,action)=>{
    switch(action.type){
        case 'Increment' : return state+1;
        case 'Decrement' : return state-1;
        case 'Reset'     : return 0;
        default : return state;
    }
}

const Counter = () => {
  let initialState = 0;
  const[count,dispatch] = useReducer(CountReducer,initialState)

  return (
    <>
      <p>{count}</p>

      <button onClick={() => dispatch({type:'Decrement'})}>Decrement</button>
      <button onClick={() => dispatch({type:'Reset'})}>Reset</button>
      <button onClick={() => dispatch({type:'Increment'})}>Increment</button>
    </>
  );
};

export default Counter;
