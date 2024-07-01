import React, { useState } from 'react';
import './app.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Packages from './Components/Routing-Components/Packages';
import About from './Components/Routing-Components/About';
import News from './Components/Routing-Components/News';
import Contact from './Components/Routing-Components/contact';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Booking from './Components/Routing-Components/Booking';
import PackageDetail from './Components/Routing-Components/PackageDetail';


const App = () => {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/packages" element={<Packages />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packageDetail/:id" element={<PackageDetail />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
};

export default App;
