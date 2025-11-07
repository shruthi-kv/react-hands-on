
const WithAuth = (WrappedComponent) =>{
    const isAuth = true;
    return  function(props){
        if(isAuth){
             return <WrappedComponent  {...props}/>
        }else{
            return <p>Pls login to the app</p>
        }
       
    }
}

export default WithAuth;