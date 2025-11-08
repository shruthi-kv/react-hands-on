import react,{createContext} from 'react';
import Child from './Child';

export const myContext = createContext();

const Parent = () =>{

    return(
        <myContext.Provider value="Shruthi">
            <Child />
        </myContext.Provider>
        
    )
}

export default Parent;
