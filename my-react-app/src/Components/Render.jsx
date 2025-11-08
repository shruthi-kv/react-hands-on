import DisplayData from './DisplayData'

const Render = () =>{
    return(
        <>
        <DisplayData render={(obj)=> <p>{obj.name}</p>}/>
        </>
    )
}

export default Render;