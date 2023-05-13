import React from 'react'
import './header.css'
const Header = ({onYesClick,onNoClick}) => {
  return (
   <div className='header'>
    <h1 className='title'> Would you like to see me in your team?</h1>
    <div className='btn-container'>
    <button className="btn" onClick={onYesClick}>Yes</button>
        <button className="btn-2" onClick={onNoClick}>No</button>
    </div>
    </div>
  )
}

export default Header