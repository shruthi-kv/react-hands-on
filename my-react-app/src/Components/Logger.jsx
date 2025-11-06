

function HigerOrderComponent(WrappedComp){
    return function enhancedCom(props){
        console.log('props recieved',props)
        return <WrappedComp {...props}/>
    }
}



function Greet({name}){
    return `Welcome ${name}`
}

export const EnhancedComponent = HigerOrderComponent(Greet)