
import React from 'react';

const Boxdashboard = ({ title, value }) => {
  return (
    <div className="dashboard-stat">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default Boxdashboard;
