import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles.css';

const StockCard = ({ stock }) => {
  if (!stock || !stock.name || !stock.price || !stock.change) {
    return <p>Invalid stock data</p>; // Error handling for missing data
  }

  const priceChangeStyle = stock.change > 0 ? 'positive-change' : 'negative-change';

  return (
    <div className="stock-card">
      <h3>{stock.name}</h3>
      <p>Price: ${stock.price.toFixed(2)}</p>
      <p className={priceChangeStyle}>Change: {stock.change.toFixed(2)}%</p>
    </div>
  );
};

// Prop validation to ensure correct data structure
StockCard.propTypes = {
  stock: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    change: PropTypes.number.isRequired,
  }).isRequired,
};

export default StockCard;
