// Dashboard.js
import React, { useState, useEffect } from 'react';
import { getTotalFarmers } from '../api/summary';
import '../styles/Dashboard.css';
import Boxdashboard from '../components/Boxdashboard';



const Dashboard = () => {
  const [totalFarmers, setTotalFarmers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const farmersData = await getTotalFarmers();
        setTotalFarmers(farmersData.totalFarmers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Overview</h2>
      <div className="dashboard-stats">
        <Boxdashboard totalFarmers={totalFarmers} />
        <Boxdashboard totalFarmers={totalFarmers} />
        <Boxdashboard totalFarmers={totalFarmers} />
        <Boxdashboard totalFarmers={totalFarmers} />
      </div>
    </div>
  );
};

export default Dashboard;
