import Table from "../components/Table";
import '../api/famrlands';
import { useEffect, useState } from "react";
import { getFarmlands } from "../api/famrlands";
import "../styles/Table.css";

const Farmlands = () => {
  const [Farmlads, setFarmland] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await getFarmlands();

        console.log("Data fetched: ", {data});

        const data1 = data.map(item => {
          return {
            "ID": item.id,
            "Size": item.size,
            "Latitude": item.latitude,
            "Longitude": item.longitude,
            "Farmer_id": item.farmer_id,
            "Status": item.status,
          }
        })

        console.log(data1);

        setFarmland(data1);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);
  return(
    <>
    <Table 
      headers={[
        "ID",
        "Size",
        "Latitude",
        "Longitude",
        "Farmer_id",
        "Status"
      ]}
      data={Farmlads}
    />
    </>
  );
};

export default Farmlands;

