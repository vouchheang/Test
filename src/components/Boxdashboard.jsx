
import React from 'react';

function Boxdashboard({ totalFarmers }) {
  return (
    <div className="dashboard-stat">
       <p>{totalFarmers}</p>
      <h3>Total Farmers</h3>
    </div>
  );
}

export default Boxdashboard;
