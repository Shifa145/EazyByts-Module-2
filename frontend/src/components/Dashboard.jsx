import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Chart from './Chart';
import StockList from './StockList';
import Portfolio from './Portfolio';
import Widget from './Widget';
import Footer from './Footer';
import '../assets/styles.css'; // Ensure styles are imported

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Hamburger Icon for Mobile */}
      <button className={`sidebar-toggle ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
        &#9776; {/* Hamburger icon */}
      </button>

      <div className="main-content">
        {/* Sidebar for Navigation */}
        <Sidebar isOpen={isSidebarOpen} />

        {/* Main Dashboard Content */}
        <div className="dashboard-content">
          <section className="chart-section" aria-labelledby="stock-performance">
            <h2 id="stock-performance" className="section-heading">
              Stock Performance
            </h2>
            <Chart
              endpoint="http://localhost:3000/api/stocks/performance" // Update with your backend URL
              title="Stock Performance Over Time"
            />
          </section>

          <section className="stock-list-section" aria-labelledby="stock-list">
            <h2 id="stock-list" className="section-heading">
              Stocks List
            </h2>
            <StockList />
          </section>

          <section className="portfolio-section" aria-labelledby="portfolio">
            <h2 id="portfolio" className="section-heading">
              Portfolio Overview
            </h2>
            <Portfolio />
          </section>

          <section className="widget-section" aria-labelledby="widgets">
            <h2 id="widgets" className="section-heading">
              Widgets
            </h2>
            <Widget />
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
