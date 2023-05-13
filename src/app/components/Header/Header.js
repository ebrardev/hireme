import React from 'react'
import './header.css'
const Header = ({onYesClick,onNoClick}) => {
  return (
   <div className='header'>
    <h1 className='title'> Beni ekibinizde görmek ister misiniz ?</h1>
    <div className='btn-container'>
    <button className="btn" onClick={onYesClick}>Evet</button>
        <button className="btn-2" onClick={onNoClick}>Hayır</button>
    </div>
    </div>
  )
}

export default Header