import React from 'react'
import Sidebar from './sidebar'
import Header from './header'
import './layout.css'
const Layout = ({children}) => {
  return (
    <div>

        <Header/>
    <div className='layoutContainer'>
        <Sidebar />
        <div className='content'>{children}</div>
    </div>
    </div>
  )
}

export default Layout