import React, {useRef} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
const Model = ({onClose}) => {
    let dialogStyles = {
        width: '500px',
        maxWidth: '100%',
        margin: '0 auto',
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: '999',
        backgroundColor: '#ffffff',
        padding: '10px 20px 40px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column'
    };
    let dialogOverlay ={
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }
      const dialogRef = useRef();
      const handleOverlayClick = (event) => {
        if (event.target === dialogRef.current) {
          onClose(null);
        }
      }
  return (
    <div style={dialogOverlay} onClick={handleOverlayClick}>

    <div style={dialogStyles} >
      <div className='dialogHeadingContainer'>
    <h1 style={{fontSize:'17px'}}>Share survey form with</h1>
    <button style={{border:'none', background:'none'}} onClick={onClose}>
             <AiFillCloseCircle  className='closeIcon'/>
            </button>
      </div>
      <hr className='bottomLine' />
      <div style={{display:'flex', flexDirection:'column', marginTop:'1rem', marginBottom:'1rem'}}>
        <label htmlFor='email' style={{textAlign:'left', paddingBottom:'5px'}} >People</label>
        <input id='email' placeholder='Enter name or email address...' type='text' style={{border:'1px solid #f6c309', padding:'8px', fontSize:'15px', borderRadius:'4px'}} />
      </div>
      <hr className='bottomLine' />
      <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
        <button style={{backgroundColor:'transparent', border:'1px solid #2196f3', width:'100px',color:"#2196f3", padding:'10px', borderRadius:'4px', margin:'5px'}} onClick={onClose}>CANCEL</button>
        <button style={{backgroundColor:'#2196F3', border:'none',color:'#ffffff',width:'100px', padding:'10px', borderRadius:'4px', margin:'5px'}}>SHARE</button>
      </div>
  </div>
    </div>
  )
}

export default Model