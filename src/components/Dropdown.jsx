import React, { useState } from 'react';
import '../styles/Dropdown.css'; 

function App() {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <div className="App">
      <div className="dropdown-container">
      <select value={selectedOption1} onChange={handleChange1}>
        <option value="" disabled>Select a province</option>
        <option value="Phnom Penh">Phnom Penh</option>
        <option value="Siem Reap">Siem Reap</option>
        <option value="Sihanoukville">Sihanoukville</option>
        <option value="Battambang">Battambang</option>
        <option value="Kampot">Kampot</option>
        <option value="Kep">Kep</option>
        <option value="Koh Kong">Koh Kong</option>
        <option value="Pursat">Pursat</option>
        <option value="Kampong Cham">Kampong Cham</option>
        <option value="Kampong Chhnang">Kampong Chhnang</option>
        <option value="Kampong Speu">Kampong Speu</option>
        <option value="Kampong Thom">Kampong Thom</option>
        <option value="Preah Vihear">Preah Vihear</option>
        <option value="Stung Treng">Stung Treng</option>
        <option value="Prey Veng">Prey Veng</option>
        <option value="Takeo">Takeo</option>
        <option value="Kandal">Kandal</option>
        <option value="Mondulkiri">Mondulkiri</option>
        <option value="Ratanakiri">Ratanakiri</option>
        <option value="Oddar Meanchey">Oddar Meanchey</option>
        <option value="Pailin">Pailin</option>
        <option value="Banteay Meanchey">Banteay Meanchey</option>
        <option value="Svay Reang">Svay Reang</option>
        <option value="Kratie">Kratie</option>
        <option value="Tbong Kmum">Tbong Kmum</option>
      </select>
        <select value={selectedOption2} onChange={handleChange2}>
          <option value="" disabled>Select Active</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

      </div>

      {/* Optional: Display selected options */}
      {/* {selectedOption1 && <p>Selected Active: {selectedOption1}</p>}
      {selectedOption2 && <p>Selected Type: {selectedOption2}</p>} */}
    </div>
  );
}

export default App;
