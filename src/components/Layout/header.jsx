import React from 'react'
import { NavbarContainer } from './styledComponents'
import './layout.css'
import managerImage from '../Assets/manager-5.png'
import dollarImage from '../Assets/group-16.png'
import calenderImage from '../Assets/group-2-copy-4@2x.png'
import notificationImage from '../Assets/notification-2@2x.png'
const Header = () => {
  return (
    <NavbarContainer>
      <div className='dropdownContainer'>
        <select name="cars" id="cars" className='selectContainer'>
          <option value="volvo">Learn</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <select name="cars" id="cars" className='selectContainer'>
          <option value="volvo">Network</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <select name="cars" id="cars" className='selectContainer'>
          <option value="volvo">Evaluate</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className='jobsContainer'>
        <h1 className='jobHeading'>Jobs</h1>
        <div className='profileScoreContainer'>
          <img src={managerImage} alt='manager' style={{marginRight:'5px'}}/>
          <div style={{display:'flex', justifyContent:"flex-start",flexDirection:'column', alignItems:'flex-start',borderRight:'2px solid #8ca9ed', paddingRight:'20px'}}>
            <h1 className='profileScore'>1305</h1>
            <p className='scoreHeading'>Profile Score</p>
          </div>
        </div>
        <div className='profileScoreContainer'>
          <img src={dollarImage} alt='dollar' style={{marginRight:'5px'}}/>
          <div style={{display:'flex', justifyContent:"flex-start",flexDirection:'column', alignItems:'flex-start', borderRight:'2px solid #8ca9ed', paddingRight:'20px'}}>
            <h1 className='profileScore'>400</h1>
            <p className='scoreHeading'>Tokens</p>
          </div>
        </div>
        <img src={calenderImage} alt='calender' height={30} width={30} style={{borderRight:'2px solid #8ca9ed', paddingRight:'20px'}}/>
        <img src={notificationImage} alt='notification' height={30} width={30} style={{borderRight:'2px solid #8ca9ed', paddingRight:'20px'}}/>
      </div>
    </NavbarContainer>
  )
}

export default Header