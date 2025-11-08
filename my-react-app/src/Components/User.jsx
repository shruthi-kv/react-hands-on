const User = ({children}) =>{
    let styles ={
        backgroundColor : 'black',
        color:'#f0f0f0'
    }
    return(
        <div style={styles}>
            {children}
        </div>
    )
}

export default User;