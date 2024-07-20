import React, { useState, useEffect } from "react";
import ActiveDropdown from "../components/ActiveDropdown";
import { getCropcycles } from "../api/crop-cycle";
import "../styles/Dropdown.css";
import Table from "../components/Table";

const Cropcycles = () => {
  const [Cropcycles, setCropcycles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const CropcyclesData = await getCropcycles();
        console.log("Data Cropcycles: ", {
          CropcyclesData,
        });

        setCropcycles(CropcyclesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return  <><ActiveDropdown/>
  <Table headers={["id","crop_id","farm_land_id","close_date", "open_date", "status"]} 
  data={Cropcycles} /></>;
  
};

export default Cropcycles;
