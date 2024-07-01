import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Data = [
  {
    id: 1,
    destTitle: 'Kerala',
    fees: 15000,
  },
    {
      id:2,
      destTitle:'Aruku',
      fees: '10000'
    },
    {
      id:3,
      destTitle:'Goa',
      fees: '25000'
    },
    {
      id:4,
      destTitle:'Maldivies',
      fees: '45000'
    },
    {
      id:5,
      destTitle:'kedarnath',
      fees: '35000'
    }
  
];

const Booking = () => {
  const { id } = useParams(); // Correct usage of useParams
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [days, setDays] = useState(1);
  const [passengers, setPassengers] = useState(1);
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('male');
  const [price, setPrice] = useState(0);
  const [paymentMethod,setPaymentMethod] =useState('credit-card');
  const [paymentStep,setPaymentStep] =useState(1);

  useEffect(() => {
    const packageData = Data.find(pkg => pkg.id === parseInt(id));
    if (packageData) {
      setDestination(packageData.destTitle);
      setPrice(packageData.fees);
    }
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();
    alert('Booking has been confirmed!');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Booking Form</h2>
      <form onSubmit={handleBooking} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Destination</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
            style={styles.input}
            readOnly 
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Date of Travel</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Number of Days</label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            min="1"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Number of Passengers</label>
          <input
            type="number"
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            min="1"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Total Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Contact Details</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required style={styles.input}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {paymentStep === 1 ? (
          <>
        <div style={styles.formGroup}>
          <label style={styles.label}>Payment Method</label>
          <select value={paymentMethod}
          onChange={(e)=>setPaymentMethod(e.target.value)}
          required
          style={styles.input}>
            <option value="credit-card">Credit Card</option>
            <option value="UPI">UPI</option>
            <option value="PayPal">PayPal</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="button" onClick={()=> setPaymentStep(2)} style={styles.button}>Continue Payment</button>
        </>
        ) : (
          <>
          <div style={styles.formGroup}>
          <label style={styles.label}>{`Enter ${paymentMethod} Details`}</label>
          <input type="text" placeholder={`${paymentMethod} Details`} required style={styles.input} />
          </div>
          <button type='submit' style={styles.button}>Confirm Booking</button>
          </>
        )}
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  },
};

export default Booking;
