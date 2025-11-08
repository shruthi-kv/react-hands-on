const ErrorBoundary = ({name}) =>{

    if(name){
        throw new Error('Something went wrong...')
    }

    return(
        <p>This is Buggy Component</p>
    )
}

export default ErrorBoundary;