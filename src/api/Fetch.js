const getTotalFarmers = async () => {
    const response = await fetch('http://localhost:3000/api/summary/total-farmers');
    const data = await response.json();
    return data.totalFarmers;
  };
  
  const getTotalFarmlands = async () => {
    const response = await fetch('/api/totalFarmlands');
    const data = await response.json();
    return data.totalFarmlands;
  };
  
  const getTotalActiveCropCycle = async () => {
    const response = await fetch('/api/totalActiveCropCycle');
    const data = await response.json();
    return data.totalActiveCropCycle;
  };
  
  const getTotalFarmlandSize = async () => {
    const response = await fetch('/api/totalFarmlandSize');
    const data = await response.json();
    return data.totalFarmlandSize;
  };