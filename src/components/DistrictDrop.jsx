// import React, { useState, useEffect } from "react";
// import { getDistrict } from "../api/province";
// import '../styles/Dropdown.css'; 

// const Dropdown = () => {
//   const [districts, setdistricts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const districtsData = await getDistrict();
//         console.log("Data districts: ", {
//           districtsData,
//         });

//         setdistricts(districtsData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <div className="dropdown-container">
//         <select>
//           <option>All</option>
//           {districts.map((district) => (
//             <option key={district.province_id} value={district.id}>{district.name}</option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;
