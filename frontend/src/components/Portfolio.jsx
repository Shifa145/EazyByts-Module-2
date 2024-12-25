// src/components/Portfolio.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Add PropTypes for data validation
import '../assets/styles.css'; // Ensure styles are imported

const Portfolio = ({ portfolioData = [] }) => {
  // Format currency function
  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  return (
    <div className="portfolio">
      <h2 className="portfolio-heading" aria-label="My Portfolio">
        My Portfolio
      </h2>
      <table className="portfolio-table" aria-label="Portfolio Table" aria-describedby="portfolio-table-description">
        <caption id="portfolio-table-description" className="sr-only">
          A table displaying the list of stocks, their shares, and the value.
        </caption>
        <thead>
          <tr>
            <th scope="col">Stock</th>
            <th scope="col">Shares</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {portfolioData.length > 0 ? (
            portfolioData.map((stock, index) => (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.shares}</td>
                <td>{formatCurrency(stock.value)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="no-data">
                No portfolio data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// PropTypes for data validation
Portfolio.propTypes = {
  portfolioData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      shares: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

export default Portfolio;
