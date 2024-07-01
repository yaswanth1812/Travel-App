import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Data } from '../Routing-Components/Packages'; 

const PackageDetail = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  const packageDetail = Data.find(pkg => pkg.id === parseInt(id));

  if (!packageDetail) {
         alert('Package not found')
  }

  const { imgSrc, destTitle, location, Grade, fees, description } = packageDetail;

  const handleBooking = (id) => {
    navigate(`/booking/${id}`);
  };

  return (
    <div style={styles.packageDetailContainer}>
      <h1 style={styles.destTitle}>{destTitle}</h1>
      <img src={imgSrc} alt={destTitle} style={styles.image} />
      <h2 style={styles.location}>Location: {location}</h2>
      <h3 style={styles.grade}>Grade: {Grade}</h3>
      <h4 style={styles.fees}>Fees: {fees}</h4>
      <p style={styles.description}>{description}</p>
   
    <button style={styles.button} onClick={() => handleBooking(id)}>
    BOOK NOW
  </button>
  </div>
  );
};

const styles = {
  packageDetailContainer: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    margin: '20px auto',
  },
  destTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  location: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
  },
  grade: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
  },
  fees: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#00aaff',
    marginBottom: '15px',
    textAlign: 'center',
  },
  description: {
    fontSize: '16px',
    marginBottom: '15px',
    textAlign: 'justify',
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
  }
};

export default PackageDetail;
