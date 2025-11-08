import ReactDom from 'react-dom';



const MyModal = ({setIsShowModal})=>{
    return ReactDom.createPortal(
        <>
        <p>This is new Modal</p>
        <button onClick={()=>setIsShowModal(false)}>Close</button>
        </>,
        document.getElementById('myModal')
    )
}

export default MyModal;
