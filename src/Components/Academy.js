import React from 'react';
import academy from '../images/academy.png';
import '../App.css';

function Founder() {
  return (
     <div className='academy-container'>
         <article className='academy-text'>
            <h4>The Academy</h4>
            <p>Join Anneliese Venter School of Ballet to take advantage of our professional instruction and welcoming community of dancers. Whether you’re a beginner or an experienced dancer looking to improve your technique, you can find it all here. Reach out today to learn more!</p>
         </article>
         <div className='academy-image-container'>
             <img src={academy} alt="Anneliese Venter" />
         </div>
     </div>
  );
}

export default Founder;
