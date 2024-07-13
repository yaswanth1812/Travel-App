import React, { useEffect, useState } from 'react';
import './home.scss'; 
import Bgvideo from '../../Assets/Bgvideo.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import { SiTripadvisor } from 'react-icons/si';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Data } from '../Routing-Components/Packages';  
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    Aos.init({ duration: 2000 });
    if (location.pathname === '/') {
      navigate('/');
    }
  }, [location.pathname, navigate]);

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      const selectedPackage = Data.find(pkg => pkg.destTitle.toLowerCase() === searchQuery.toLowerCase());
      if (selectedPackage) {
        navigate(`/packageDetail/${selectedPackage.id}`);
      }
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value) {
      const filteredSuggestions = Data.filter(pkg => pkg.destTitle.toLowerCase().includes(value.toLowerCase()));
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.destTitle);
    setSuggestions([]);
  };

  return (
    <div>
      <Navbar />
    <section className='home'>
      <div className="overlay"></div>
      <video src={Bgvideo} muted autoPlay loop type="video/mp4"></video>
      <div className='homeContent container'>
        <div className='textDiv'>
          <span data-aos="fade-up" className='smalltext'>
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holiday
          </h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className='input flex'>
              <input 
                type="text" 
                placeholder='Enter your destination here....'
                value={searchQuery}
                onChange={handleInputChange}
              />
              <GrLocation className="icon"/>
            </div>
            {suggestions.length > 0 && (
              <ul className="suggestions">
                {suggestions.map((suggestion) => (
                  <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion.destTitle}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className='input flex'>
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className='label_total flex'>
              <label htmlFor="price">Max price:</label>
              <h3 className='total'>50000</h3>
            </div>
            <div className='input flex'>
              <input type="range" max="50000" min="10000"/>
            </div>
          </div>

          <div className='searchOptions flex'>
            <HiFilter className='icon'/>
            <button onClick={handleSearch} className='bt'>Search</button>
          </div>
        </div>

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <SiTripadvisor className='icon'/>
          </div>
          <div className="leftIcons">
           <BsListTask className='icon'/>
           <TbApps className='icon'/>
          </div>
        </div>
      </div>
    </section>
    <Main />
    </div>
  );
}

export default Home;
