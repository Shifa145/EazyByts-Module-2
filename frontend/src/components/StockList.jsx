import React, { useEffect, useState } from 'react';
import StockCard from './StockCard';
import '../assets/styles.css'; // Ensure global styles are imported

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data (this is just an example, you should replace it with actual API calls)
  useEffect(() => {
    const fetchStocks = async () => {
      try {
        // Example: Replace with actual API URL
        const response = await fetch('http://localhost:3000/api/stocks'); 
        const data = await response.json();
        setStocks(data);
      } catch (err) {
        setError('Error fetching stocks');
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  if (loading) {
    return <p>Loading stocks...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="stock-list">
      <h2 className="stock-list-heading" aria-label="Stock List">
        Stock List
      </h2>
      <div className="stock-list-container">
        {stocks.length > 0 ? (
          stocks.map((stock, index) => <StockCard key={index} stock={stock} />)
        ) : (
          <p>No stocks available</p>
        )}
      </div>
    </div>
  );
};

export default StockList;
