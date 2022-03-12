import React from 'react';
import contact from '../images/contact.png';

import '../App.css';

function Contact() {
 
 
  return (
   <div className='contact-container'>
     <div className='contact-form'>
     <h4>Get in touch</h4>
     <p>If you would like more information on classes offered, we’d be more than happy to help. Please fill out the form below and we will get back to you as soon as possible.</p>
        <div className='form-box'>
          <form action="">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email'/>
            <select >
                <option value="Beginner"> Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </select> 
            <select >
                <option value="8-10"> 8 - 10 years old</option>
                <option value="11-14">11 - 14 years old</option>
                <option value="15-18">15 - 18 years old</option>
                <option value=">18">Older than 18</option>
            </select> 
            <textarea placeholder='Type your message here...' name="" id="" cols="30" rows="10"></textarea>
            <input className="submit-button" type="submit" value="Send"/>

          </form>
        </div>
        
        
       
      
     </div>
     <div className='contact-image'>
        <img src={contact} alt="Pointe shoes" />
     </div>
       
   </div>
  );
}

export default Contact;
