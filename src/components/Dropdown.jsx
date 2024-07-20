import React, { useState, useEffect } from "react";
import { getProvince, getDistrict } from "../api/province";
import "../styles/Dropdown.css";

const Dropdown = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provincesData = await getProvince();
        console.log("Data: ", provincesData);

        setProvinces(provincesData);
      
      } catch (error) {2023
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = async (event) => {
    console.log("Selected Province: ", event.target.value);
    const districtsData = await getDistrict(event.target.value);
    setDistricts(districtsData)
    console.log(districtsData)
  };

  return (
    <div className="App">
      <div className="dropdown-container">
        <select onChange={handleChange}>
          <option value="">All</option>
          {provinces.map((province) => (
            <option key={province.name} value={province.id}>
              {province.name}
            </option>
          ))}
        </select>

        <select>
          <option>All</option>
          {districts.map((district) => (
            <option key={district.id} value={district.id}>
              {district.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
