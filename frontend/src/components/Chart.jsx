import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import '../assets/styles.css';

const Chart = ({ endpoint, title }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state to handle the fetch process
  const [error, setError] = useState(''); // Error state to handle failed fetches

  useEffect(() => {
    // Fetching data from the backend API
    axios.get(endpoint)
      .then(response => {
        // Assuming response.data is in the format needed for Chart.js
        setChartData(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(err => {
        console.error('There was an error fetching the data!', err);
        setError('Failed to fetch chart data');
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [endpoint]);

  if (loading) {
    return <p>Loading chart...</p>; // Improved loading message
  }

  if (error) {
    return <p>{error}</p>; // Display error message if fetch fails
  }

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day'
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value'
        }
      }
    },
    plugins: {
      tooltip: {
        enabled: true, // Enabling tooltips for better interaction
      }
    }
  };

  return (
    <div className="chart-container">
      <h3>{title}</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
