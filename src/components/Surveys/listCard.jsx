import React from 'react'
import './surveys.css'
import {FaEllipsisV} from 'react-icons/fa'
const ListCard = () => {
  return (
    <div className='listCard'>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
            <h1 className='listheading'>Study Material</h1>
            <FaEllipsisV />
        </div>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
            <h1 className='listheading'>Date</h1>
            <button className='responseButton'>VIEW RESPONSE</button>
        </div>
    </div>
  )
}

export default ListCard