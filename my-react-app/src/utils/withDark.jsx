const withDarkTheme = (WrappedComponent) =>{
    const styles = {
        backgroundColor : '#212529',
        color: '#eee'
    }
    return function(props){
        return<div style={styles}>
             <WrappedComponent {...props}/>
        </div>
        
    }
}

export default withDarkTheme;