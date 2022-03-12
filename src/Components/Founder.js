import React from 'react';
import headshot from '../images/headshot.png';
import '../App.css';

function Founder() {
  return (
     <div className='founder-container'>
         <div className='headshot-container'>
             <img src={headshot} alt="Anneliese Venter" />
         </div>
         <article className='founder-text'>
            <h2>Anneliese Venter</h2>
            <h3>Founder</h3>
            <p>I am a Licenciate (L.I.S.T.D.) of the Imperial Society of Teachers of Dance - CECCHETTI Faculty.</p>
            <p>My passion is working with dancers who would like to improve their technique to help them further their dancing.  </p>
            <p>Having trained dancers to company level and students winning awards, the younger dancer is not forgotten where care is taken to instil correct technique and the love of dance.</p>
         </article>
     </div>
  );
}

export default Founder;
