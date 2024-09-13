import React, { useState, useRef } from 'react';
import { Router } from 'react-router-dom';
import './App.css'; // Assuming your styles are in App.css
import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


const App = () => {

  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  return (
      <div>
       <Navbar />
          <Router>
              <Router path="/" element={<Home />} />
              <Router path="/about" element={<About />} />
              <Router path="/api/services" element={<Services />} />
              <Router path="/signup" element={<SignUp />} />
              <Router path="/signin" element={<SignIn />} />
          </Router>
      </div>
  );
};
export default App;
