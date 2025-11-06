
function WelcomeWithLogger(WrapperComp){
    return function EnhancedComp(props){
        console.log('Props recieved ......');
        return <WrapperComp {...props}/>
    }
}


const Welcome = ({name}) =>{
    return `Welcome ${name}}`
}

export const WelcomeComp = WelcomeWithLogger(Welcome)

