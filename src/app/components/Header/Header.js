import React from 'react'
import './header.css'
const Header = () => {
  return (
   <div className='header'>
    <h1 className='title'> Beni ekibinizde görmek ister misiniz ?</h1>
    <div className='btn-container'>
    <button className='btn'>Evet</button>
    <button  className='btn-2'>Hayır</button>
    </div>
    </div>
  )
}

export default Header