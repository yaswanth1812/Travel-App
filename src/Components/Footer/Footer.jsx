import React, { useEffect } from 'react'
import './footer.scss'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import Mountain from '../../Assets/Mountain .mp4'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
    },[]);

  return (
    <section className='footer'>
        <div className='videoDiv'>


        </div>
        <div className='seeContent container'>
          <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                      <small>KEEP IN TOUCH</small>
                      <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                      <input type="text" placeholder='Enter Email Address'/>
                      <button data-aos="fade-up" className='btn flex' type='submit'>
                          SEND <FiSend className='icon'/>
                      </button>
                    </div>
          </div>
          <div className='footerCard flex'>
            <div className="footerIntro flex">
              <div  data-aos="fade-up" className='logoDiv'>
              <a href="#" className='logo flex'>
                 <MdOutlineTravelExplore className='icon'/> A1 Travel.
              </a>
              <p>
              The Ministry of Tourism is running ... given to Travel Agents and Tour Operators including best Adventure Tour Operator, best Domestic Tour Operator, most Innovative Tour Operator ,Best Mice Operator, Tourist Transport Operator, best Hotels in the different categories, Outstanding performers in Publishing, etc.
              </p>
            </div>

            <div data-aos="fade-up" className="footerPragraph">

            </div>
            <div  data-aos="fade-up" className='footerSocials'>
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
        
            </div>

            <div data-aos="fade-up" className='footerLinks grid'>
                   <div data-aos="fade-up" 
                   data-aos-duration="4000" className='linkGroup'>
                      <span className='groupTitle'>
                          OUR AGENCY
                      </span>
        
                      <div>
                      <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Services
                      </li>

                      <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Insurance
                      </li>

                      <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Agency
                      </li>

                      <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Tourism
                      </li>

                      <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Payment
                      </li>
                      </div>
                            

                            {/* Gropu Two */}
                            <div data-aos="fade-up"
                            data-aos-duration="3000" className='linkGroup'>
                            <span className="groupTitle">
                          PARTNERS
                      </span>

                      <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Bookings
                      </li>

                      <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Rentcars
                      </li>

                      <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        HostelWorld
                      </li>

                      <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Trivago
                      </li>

                      <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Payment
                      </li>
                      </div>

                      {/* group three */}
                      {/* <div data-aos="fade-up"
                            data-aos-duration="5000" className='linkGroup'>
                       <span className="groupTitle">
                          LAST MINUTE
                      </span>

                      <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Delhi
                      </li>

                      <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Mumbai
                      </li>

                      <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Karnataka
                      </li>

                      <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Maharastra
                      </li>

                      <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Kashmir
                      </li>
                      </div> */}
                    </div>
            </div>

            <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE THEME</small>
              <small>COPY RESREVED - YASWANTH</small>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Footer;