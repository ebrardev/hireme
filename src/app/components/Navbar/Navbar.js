import React from 'react'
import './navbar.css'
import Link from 'next/link'
import {BsGithub,BsTwitter} from 'react-icons/bs'
import {AiFillMediumSquare} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className="navbar">
      
         <ul className="navbar-list">
            <div className='navbar-left'>
            <li className='navbar-item'>
                <a href="/" className="navbar-link"><BsGithub size={30} /></a>
            </li>
            <li className='navbar-item'>
                <a href="/" className="navbar-link"><BsTwitter size={30} /></a>
            </li>
            <li className='navbar-item'>
                <a href="/" className="navbar-link"><AiFillMediumSquare size={30}/></a>
            </li>
            </div>
            <div className='navbar-right'>
            <li className='navbar-item'>
                <Link href="/contact" legacyBehavior>
                    <a className="navbar-link">Contact</a>
              
                </Link>
            </li>
            </div>

        </ul>
        
    </nav>
  )
}

export default Navbar