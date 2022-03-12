import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Components/Header';
import Hero from './Components/Hero';
import Founder from './Components/Founder';
import Academy from './Components/Academy';
import Contact from './Components/Contact';



import './App.css';

function App() {
  return (
    
      <div className="main-container">
        <Header />
        <Hero />
        <Founder />
        <Academy />
        {/* <ClassOffering /> */}
        <Contact />
      </div>
    
      
  );
}

export default App;
