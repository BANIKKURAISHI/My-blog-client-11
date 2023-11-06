import { useLoaderData } from "react-router-dom";
import Blogs from "./Blogs";
import Navbar from "../Navbar&&Footer/Navbar";


const AllBlogs = () => {
    const loadData =useLoaderData()
   
    return (
        <div>
        <Navbar></Navbar>
        <div className="grid grid-cols-1 gap-5 mx-auto my-20">
       {
        loadData.map(load=><Blogs key={load._id} load={load}></Blogs>)
       }  
        </div>
        </div>
    );
};

export default AllBlogs;