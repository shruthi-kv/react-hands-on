
const EventBubble = () =>{
    return(
        <>
        <div style={{backgroundColor :'beige' ,height:'300px', width:'300px'}} onClick={()=> console.log('propagated to outter most parent')}>
            <div style={{backgroundColor:'skyblue', height:'100px', width:'100px', margin:'40px'}} onClick={()=> console.log('propagated to parent')}>
                <button style={{ height:'50px', width:'50px' , margin:'40px'}} onClick={(e)=> { e.stopPropagation();console.log("Button Clicked..")}}>Click Me</button>
            </div>
        </div>
        </>
    )

}

export default EventBubble;
