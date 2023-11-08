import axios from "axios";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useState } from "react";


const Feature = () => {
  const [data, setData] = useState();
    
   // const {user}=useAuth()
    console.log(data)
    useEffect(() => {
      
        axios.get('http://localhost:5000/details')
          .then(response => {
            setData(response.data); 
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, [])
      
    const columns = [
        {
         name: "Id",
         selector:row=>row.id
        },
        {
          name: "Title",
          selector:row=>row.title
         },
         {
          name: "Category",
          selector:row=>row.category
         },
          {
          name: "Name",
          selector:row=>row.name
         },
         {
          name: "Image",
          selector:row=>row.name
         }
      
        ]
    return (
        <DataTable>
            columns={columns}
            data={data}
        </DataTable>
    
    );
};

export default Feature;