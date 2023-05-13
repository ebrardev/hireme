"use client"
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react';
import './global.css'

export default function Home() {
  const [showCard, setShowCard] = useState(false);

  const handleYesClick = () => {
    setShowCard(true);
  }

  const handleNoClick = () => {
    // Hayır düğmesine tıklanırsa yapılacak işlemler buraya yazılabilir
  }
  return (
   <div>
    <Navbar/>
    <Header onYesClick={handleYesClick} onNoClick={handleNoClick} />
      {showCard && <Card />}
   </div>
  )
}
