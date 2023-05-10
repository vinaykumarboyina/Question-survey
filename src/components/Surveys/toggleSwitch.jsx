import React from 'react'
import './surveys.css'
const ToggleSwitch = ({ label }) => {
    return (
      <div className="togglecontainer">
        <h1 style={{paddingRight:"20px", fontSize:"18px"}}>{label}</h1>
        <label className="switch">
            <input type="checkbox"  />
            <span className="slider round"></span>
        </label>
      </div>
    );
  };

export default ToggleSwitch