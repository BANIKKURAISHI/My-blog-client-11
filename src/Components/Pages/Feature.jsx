import axios from "axios";
import { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
import MUIDataTable from "mui-datatables";
const Feature = () => {

useEffect(()=>{
   const fetData=async()=> {
    axios.get('https://my-blog-server-side.vercel.app/details')
    .then(res=>setRecords(res.data))
    .catch(err=>console.log(err))
   }
fetData()

},[])
const columns = [
  {
    name: "_id",
    label: "Serial No",
    options: {
     filter: true,
     sort: true,
    }
   },

  {
   name: "title",
   label: "Title",
   options: {
    filter: true,
    sort: true,
   }
  },
  
  {
   name: "userName",
   label: "Name",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "userPhoto",
   label: "Image",
   options: {
    customBodyRender: (userPhoto) => {
     
      return <img src={userPhoto} alt="Article Image" style={{ width: "50px" }} />;
    },
    filter: true,
    sort: false,
   }
  },
  
 ];




const [records,setRecords]=useState() 
   
    
      
    
    return (
      <MUIDataTable
      title={"Top 10 Post in our website"}
      data={records}
      columns={columns}
     
    />
    
    );
};

export default Feature;