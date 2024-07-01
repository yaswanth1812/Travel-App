import React, { useState } from 'react';
import './navbar.scss';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const showNav = () => {
        setActive(true);
    };

    const removeNavbar = () => {
        setActive(false);
    };

    const handleContactClick = () => {
        removeNavbar();
        navigate('/about');
        setTimeout(() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }, 0);
    };

    return (
        <section className='navBarSection'>
            <header className='header flex'>
                <div className='logoDiv'>
                    <Link to="/" className='logo flex' onClick={removeNavbar}>
                        <h1><MdOutlineTravelExplore className="icon"/> A1 Travel.</h1>
                    </Link>
                </div>

                <div className={`navBar ${active ? 'activeNavbar' : ''}`}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <Link to="/" className='navLink' onClick={removeNavbar}>Home</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/packages" className='navLink' onClick={removeNavbar}>Packages</Link>
                        </li>
                       
                        <li className="navItem">
                            <Link to="/about" className='navLink' onClick={removeNavbar}>About</Link>
                        </li>
                       
                        <li className="navItem">
                            <Link to="/news" className='navLink' onClick={removeNavbar}>News</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/about#contact" className='navLink' onClick={handleContactClick}>Contact</Link>
                        </li>
                        <button className='btn'>
                            <Link to="/login" onClick={removeNavbar}>LogIn</Link>
                        </button>
                    </ul>
                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className='icon'/>
                    </div>
                </div>

                <div onClick={showNav} className='toggleNavbar'>
                    <TbGridDots className='icon'/>
                </div>
            </header>
        </section>
    );
};

export default Navbar;
