// src/components/Widget.jsx
import React from 'react';
import '../assets/styles.css'; // Ensure global styles are imported

const Widget = () => {
  const news = [
    "Market rallies after positive earnings reports",
    "Tech stocks lead the charge",
    "Crypto sees renewed interest",
    "Energy sector outperforms expectations",
    "Interest rates remain unchanged by the Fed",
  ];

  return (
    <div className="widget">
      <h3 className="widget-heading">Latest News</h3>
      <ul className="widget-news-list">
        {news.map((item, index) => (
          <li key={index} className="widget-news-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Widget;
