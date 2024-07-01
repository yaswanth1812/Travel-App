import React, { useEffect } from 'react'
import './main.scss'
import { GrAed } from 'react-icons/gr'
import kerala from '../../Assets/kerala.jpg'
import kedarnath from '../../Assets/kedarnath.jpg'
import goabeach from '../../Assets/beach.jpg'
import maldives from '../../Assets/maldives.jpg'
import aruku from '../../Assets/aruku.jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Data =[


  {
    id:1,
    imgSrc:kerala,
    destTitle:'Kerala',
    location:'Kerala',
    Grade:'Nature RELAX',
    fees: '15000',
    description:'The city of God, Kerala is one of the best travel destinations in the World.This place is known for its nature stays and adventurous activities. '

  },

  {
    id:2,
    imgSrc:aruku,
    destTitle:'Aruku',
    location:'Andhra Pradesh',
    Grade:'Nature RELAX',
    fees: '10000',
    description:'The city of Nature, Aruku is one of the best travel destinations in India.This place is known for its nature stays and adventurous activities. '

  },

  {
    id:3,
    imgSrc:goabeach,
    destTitle:'Goa',
    location:'Maharastra',
    Grade:'CULTURAL RELAX',
    fees: '25000',
    description:'The place to vibe , Goa is one of the best travel destinations in the World.This place is known for its culture and vibes stays and adventurous activities. '

  },

  {
    id:4,
    imgSrc:maldives,
    destTitle:'Maldivies',
    location:'Maldivies',
    Grade:'CULTURAL RELAX',
    fees: '45000',
    description:'The place to vibe , Maldivies is one of the best travel destinations in the World.This place is known for its culture and vibes stays and adventurous activities. '

  },

  {
    id:5,
    imgSrc:kedarnath,
    destTitle:'Kedarnath',
    location:'Kedarnath',
    Grade:'DEVOTIONAL RELAX',
    fees: '35000',
    description:'The place of lord shiva , Kedarnath is one of the best travel destinations in the World.This place is known for lord shiva which is located in the middle of himalayas and devotess stays and adventurous activities. '

  },



]

const Main = () => {

  // react hook to create a scroll animation

useEffect(()=>{
  Aos.init({duration:2000})
  },[])
  return (
        <section className='main container section'>
          <div className='secTitle'>
            <h3  data-aos="fade-right" className='title'>
              Most visited destinations
            </h3>
          </div>

          <div className="seeContent grid">
            {
              Data.map(
                ({id,imgSrc,destTitle,location,grade,fees,description})=>{
                return(
                  <div key={id} data-aos="fade-up" className="singleDestination">

                    <div className='imageDiv'>

                      <img src={imgSrc} alt={destTitle}/>
                      </div>
                         
                         <div className='cardInfo'>
                          <h4 className="destATitle">{destTitle}</h4>

                          <span className='continent flex'>
                            <HiOutlineLocationMarker className='icon'/>
                          <span className='name'>{location}</span>
                          </span>

                           <div className='fees flex'>
                            <div className='grade'> 
                              <span>{grade}<small>+1</small></span>
                            </div>
                            <div className="price">
                              <h5>{fees}</h5>
                            </div>
                            
                             </div>
                             <div className="desc">
                              <p>{description}</p>
                             </div>

                             <button className='btn flex'>
                              DETAILS <HiOutlineClipboardCheck className='icon'/>
                             </button>
                          
                           </div>

                  </div>
                )

              })
            }
          </div>
        </section>
  )
}

export default Main