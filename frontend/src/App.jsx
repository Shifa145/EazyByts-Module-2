import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth';
import StockList from './components/StockList';
import Portfolio from './components/Portfolio';
import Chart from './components/Chart';
import Widget from './components/Widget';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard'; // A combined layout for key features
import './assets/styles.css'; // Ensure styles are included for layout fixes

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/stocks" element={<StockList />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/widget" element={<Widget />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
