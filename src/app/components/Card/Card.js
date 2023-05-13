import React from 'react';
import './card.css';
import {BsLinkedin} from 'react-icons/bs'
import Link from 'next/link';
const Card = () => {
  return (
    <div className="card">
      <h1>Good choice! you can contact me here.🙂 </h1>
      <Link className='cont' href="/contact" >
                  Click here
        
                </Link>

      
    </div>
  );
}

export default Card;
