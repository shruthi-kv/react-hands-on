const withDarkTheme = (WrappedComponent) =>{
    const styles = {
        backgroundColor : 'black',
        color:'white'
    }
    return function(props){
        return<div style={styles}>
             <WrappedComponent {...props}/>
        </div>
        
    }
}

export default withDarkTheme;