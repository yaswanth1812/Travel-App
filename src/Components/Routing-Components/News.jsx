import React from 'react';

const newsData = [
  {
    type: 'news',
    title: 'New Packages Launched',
    date: '2024-06-30',
    content: 'We are excited to announce new tour packages to Maldives, Kerala, and Goa with exclusive discounts for early bookings.',
  },
  {
    type: 'news',
    title: 'A1 Tourism Achieves Milestone',
    date: '2024-06-25',
    content: 'A1 Tourism has successfully completed 10,000 bookings this year, thanks to our loyal customers and dedicated team.',
  },
  {
    type: 'news',
    title: 'Customer Satisfaction',
    date: '2024-06-20',
    content: 'We are proud to have a 95% customer satisfaction rate. Your feedback helps us improve our services.',
  },
  {
    type: 'review',
    name: 'Yaswanth',
    date: '2024-06-15',
    rating: 5,
    review: 'Amazing experience! The tour was well organized and the guide was very knowledgeable. Highly recommend A1 Tourism!',
  },
  {
    type: 'review',
    name: 'Anupama',
    date: '2024-06-10',
    rating: 4,
    review: 'Great service and beautiful destinations. The only downside was the hotel food, but overall a fantastic trip.',
  },
  {
    type: 'review',
    name: 'Naidu',
    date: '2024-06-05',
    rating: 3,
    review: 'The tour was good but could have been better organized. Some of the places we visited were too crowded.',
  },
];

const News = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>A1 Tourism News and Reviews</h2>
      {newsData.map((item, index) => (
        <div key={index} style={styles.newsItem}>
          {item.type === 'news' ? (
            <>
              <h3 style={styles.newsTitle}>{item.title}</h3>
              <p style={styles.newsDate}>{item.date}</p>
              <p style={styles.newsContent}>{item.content}</p>
            </>
          ) : (
            <>
              <h3 style={styles.reviewName}>{item.name}</h3>
              <p style={styles.reviewDate}>{item.date}</p>
              <p style={styles.reviewRating}>{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</p>
              <p style={styles.reviewContent}>{item.review}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  newsItem: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  newsTitle: {
    marginBottom: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  newsDate: {
    marginBottom: '10px',
    fontSize: '14px',
    color: '#888',
  },
  newsContent: {
    fontSize: '16px',
  },
  reviewName: {
    marginBottom: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  reviewDate: {
    marginBottom: '5px',
    fontSize: '14px',
    color: '#888',
  },
  reviewRating: {
    marginBottom: '10px',
    fontSize: '16px',
    color: '#FFD700',
  },
  reviewContent: {
    fontSize: '16px',
  },
};

export default News;
