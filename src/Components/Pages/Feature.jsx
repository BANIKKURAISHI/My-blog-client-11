import axios from "axios";
import { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
import MUIDataTable from "mui-datatables";
import Contain from "../Hooks/UI/Contain";
import Navbar from "../Navbar&&Footer/Navbar";
import { Helmet } from "react-helmet-async";
import Footer from "../Navbar&&Footer/Footer";
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
   name:"title",
   label: "Title",
   options: {
    filter: true,
    sort: false,
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
      <Contain>
        <Helmet>
                <title>News portal | Features page</title>
            </Helmet>
      <Navbar></Navbar>
      <MUIDataTable
      
      title={"Top 10 Post in our website"}
      data={records}
      columns={columns} />
     <Footer></Footer>
      </Contain>
   
    
    );
};

export default Feature;