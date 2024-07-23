import React, { useState, useEffect } from "react";
import { getCropcycles } from "../api/crop-cycle";
import "../styles/Dropdown.css";

const Cropcycles = () => {
  const [cropcycles, setCropcycles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cropcyclesData = await getCropcycles();
        console.log("Data Cropcycles: ", {
          cropcyclesData
        });

        setCropcycles(cropcyclesData);
      
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  
  const onChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
    
    if (selectedValue === "active") {
      console.log("Active selected");
    } else if (selectedValue === "inactive") {
      console.log("Inactive selected");
    }
  };

  return (
    <div className="App">
      <div className="dropdown-container">
        <select onChange={onChange}>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
    </div>
  );
};

export default Cropcycles;

