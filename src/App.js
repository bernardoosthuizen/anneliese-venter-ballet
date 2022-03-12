import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Components/Header';
import Hero from './Components/Hero';
import Founder from './Components/Founder';
import Academy from './Components/Academy';



import './App.css';

function App() {
  return (
    
      <div className="main-container">
        <Header />
        <Hero />
        <Founder />
        <Academy />
      </div>
    
      
  );
}

export default App;
