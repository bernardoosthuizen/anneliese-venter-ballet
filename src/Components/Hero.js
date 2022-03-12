import React from 'react';
import hero from '../images/hero.png';
import '../App.css';

function Hero() {
  return (
      <div className='hero-container'>
            <img src={hero} alt="Ballerinas dancing on pointe " />
            <div className='hero-title'>
                <h1 >Anneliese Venter School of Ballet</h1>
            </div>
      </div>  
  );
}

export default Hero;
