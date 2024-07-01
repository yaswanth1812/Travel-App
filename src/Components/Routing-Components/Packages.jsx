import React, { useEffect } from 'react';
import kerala from '../../Assets/kerala.jpg';
import kedarnath from '../../Assets/kedarnath.jpg';
import goabeach from '../../Assets/beach.jpg';
import kanyakumari from '../../Assets/kanyakumari.jpeg'
import maldives from '../../Assets/maldives.jpg';
import aruku from '../../Assets/aruku.jpg';
import Adiyogi from '../../Assets/Adiyogi.jpg'
import kashmir from '../../Assets/kashmir.jpg'
import Ooty from '../../Assets/Ooty.jpg'
import Tirupati from '../../Assets/tirupati.jpg'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

export const Data = [


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
  {
    id:6,
    imgSrc:kanyakumari,
    destTitle:'Kanyakumari',
    location:'Rameshwaram',
    Grade:'Devotional & Nature Relax',
    fees: '20000',
    description:'The city of Ddevotional and the beauty of Ocean, Kanyakumari is one of the best travel destinations in India.This place is known for its nature stays and devotional activities mainly for rameshwaram. '

  },

  {
    id:7,
    imgSrc:Adiyogi,
    destTitle:'Adiyogi',
    location:'Coimbatore',
    Grade:'Devotional Relax',
    fees: '10000',
    description:'The Isha Yoga Center is situated 30 kilometers (20 miles) west of Coimbatore, Tamil Nadu. Coimbatore, a major industrial city in southern India, is well connected by air, rail and road. Major airlines operate regular flights to Coimbatore from Chennai, Delhi, Mumbai and Bengaluru. Train services are available from all major cities in India. There are direct buses between Coimbatore and the Isha Yoga Center (View the timetable).'
  },
  {
    id:8,
    imgSrc:kashmir,
    destTitle:'Kashmir',
    location:'Jammu & Kasmir',
    Grade:'Nature Relax',
    fees: '40000',
    description:'Kashmir (/ˈkæʃˌmɪər/; Kashmiri: Kạšīr, Kashmiri pronunciation: [kəˈʃiːr]) is the northernmost geographical region of the Indian subcontinent. Until the mid-19th century, the term "Kashmir" denoted only the Kashmir Valley between the Great Himalayas and the Pir Panjal Range.'
  },
  {
    id:9,
    imgSrc:Ooty,
    destTitle:'Ooty',
    location:'Banglore',
    Grade:'Nature Relax',
    fees: '30000',
    description:'Ooty is a town and municipality in the Nilgiris district of the Indian state of Tamil Nadu. It is located 86 km (53 mi) northwest of Coimbatore, and is the headquarters of Nilgiris district. Situated in the Nilgiri hills, it is known by the epithet "Queen of Hill Stations", and is a popular tourist destination.Originally occupied by the Toda people, the area came under the rule of the East India Company in the 18th century.'

  },
  {
    id:10,
    imgSrc:Tirupati,
    destTitle:'Tirumula',
    location:'Tirupati',
    Grade:'Devotional Relax',
    fees: '10000',
    description:'Tirumala is a spiritual place in Tirupati district of the Indian state of Andhra Pradesh. It is one of the neighbourhoods of the Tirupati city. The town is a part of Tirupati Urban Development Authority and located in Tirupati (urban) mandal of Tirupati revenue division.[4] It is a hill town where Tirumala Venkateswara Temple is located, a popular shrine of Vishnu. The town is strictly vegetarian.'

  },


]

const Packages = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    Aos.init({ duration: 2000 });
    if (location.pathname === '/') {
      navigate('/');
    }
  }, [location.pathname, navigate]);

  const handleBooking = (id) => {
    navigate(`/booking/${id}`);
  };

  return (
    <section style={styles.packageContainer}>
     
      <div style={styles.packageTitle}>
        <h3  data-aos="fade-right" style={styles.title}>OUR PACKAGES</h3>
      </div>
      <div style={styles.packageContent}>
        {Data.map(({ id, imgSrc, destTitle, location, Grade, fees, description }) => (
          <div key={id} data-aos="fade-up" style={styles.singleDestination}>
            <div style={styles.imageDiv}>
              <img src={imgSrc} alt={destTitle} style={styles.image} />
            </div>
            <div style={styles.cardInfo}>
              <h4 style={styles.destTitle}>{destTitle}</h4>
              <span style={styles.locationContainer}>
                <HiOutlineLocationMarker style={styles.icon} />
                <span style={styles.locationName}>{location}</span>
              </span>
              <div style={styles.feesContainer}>
                <div style={styles.grade}>
                  <span>{Grade}<small>+1</small></span>
                </div>
                <div style={styles.price}>
                  <h5>{fees}</h5>
                </div>
              </div>
              <div style={styles.description}>
                <p>{description}</p>
              </div>
              <button style={styles.button} onClick={() => handleBooking(id)}>
                BOOK NOW
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/')} style={styles.goBackButton}>
        Go Back to Home
      </button>
    </section>
  );
};

const styles = {
  packageContainer: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
  },
  packageTitle: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  packageContent: {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  },
  singleDestination: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  imageDiv: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardInfo: {
    padding: '15px',
  },
  destTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  icon: {
    marginRight: '5px',
  },
  locationName: {
    fontSize: '14px',
  },
  feesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  grade: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#00aaff',
  },
  description: {
    fontSize: '14px',
    marginBottom: '15px',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#00aaff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  goBackButton: {
    padding: '10px 20px',
    marginTop: '20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Packages;
