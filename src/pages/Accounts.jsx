import Table from "../components/Table";
import { useState, useEffect } from "react";
import { getAccounts } from "../api/accounts";
import "../styles/Table.css";

const Accounts = () => {
  const  [Accounts, setAccounts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await getAccounts();
        console.log("Data fetched:", data);

        const data1 = data.map(item => {
          return {
            "ID": item.id,
            "Firts_name": item.first_name,
            "Last_name": item.last_name,
            "Email": item.email,
            "Password": item.password,
            "District_id": item.district_id,
            "Province_id": item.province_id
          }
        })
        console.log(data1);

        setAccounts(data1);
      }catch(error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return(
    <>
    <Table 
      headers={[
        "ID",
        "Firts_name",
        "Last_name",
        "Email",
        "Password",
        "District_id",
        "Province_id"
      ]}
      data={Accounts}
    />
    </>
  );
};

export default Accounts;
      
