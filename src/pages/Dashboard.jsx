// Dashboard.js
import React, { useState, useEffect } from 'react';
import { getTotalFarmers } from '../api/summary';
import '../styles/Dashboard.css';
import Boxdashboard from '../components/Boxdashboard';


import React, { useState, useEffect } from "react";
import {
  getTotalFarmers,
  getTotalFarmlands,
  getactiveCropCycles,
  getTotalFarmlandSize,
} from "../api/summary";
import "../styles/Dashboard.css";
import Boxdashboard from "../components/Boxdashboard";

const Dashboard = () => {
  const [totalFarmers, setTotalFarmers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const farmersData = await getTotalFarmers();
        setTotalFarmers(farmersData.totalFarmers);
        const farmlandsData = await getTotalFarmlands();
        const cropcyclesData = await getactiveCropCycles();
        const farmlandSizeData = await getTotalFarmlandSize();

        console.log("Data fetched: ", {
          farmersData,
          farmlandsData,
          cropcyclesData,
          farmlandSizeData,
        });

        setTotalFarmers(farmersData.totalFarmers);
        setTotalFarmlands(farmlandsData.totalFarmlands);
        setActiveCropcycles(cropcyclesData.activeCropCycles);
        setTotalFarmlandSize(farmlandSizeData.totalFarmlandSize);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
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


