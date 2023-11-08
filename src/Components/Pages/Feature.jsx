import axios from "axios";
import MUIDataTable from "mui-datatables";
import { useEffect } from "react";
import { useState } from "react";
//import { useLoaderData } from "react-router-dom";

const Feature = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        // Fetch data from your API or data source
        axios.get('https://your-api-endpoint.com/data')
          .then(response => {
            setData(response.data); // Assuming the data is in an array format
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, [])
    const columns = [
        {
         name: "Title",
         label: "title",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "company",
         label: "Company",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "city",
         label: "City",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "state",
         label: "State",
         options: {
          filter: true,
          sort: false,
         }
        },
       ];
       
      
       
       const options = {
         filterType: 'checkbox',
       };

    return (
        <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />  
    
    );
};

export default Feature;