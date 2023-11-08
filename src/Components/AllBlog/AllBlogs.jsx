import { useLoaderData,  } from "react-router-dom";
import Blogs from "./Blogs";
import Navbar from "../Navbar&&Footer/Navbar";
import Category from "./Category";
import { useEffect, useState } from "react";
import axios from "axios";


const AllBlogs = () => {
    const loadData =useLoaderData()
    const {category}=loadData
    const [cats,setCats]=useState([])
    const [search,setSearch]=useState('')
    useEffect(()=>{
     axios.get(`http://localhost:5000/all/${category}`)
   .then(res=>{setCats(res.data)
    console.log(cats)})
    },[category,cats])
   
    return (
        <div>
        <Navbar></Navbar>
        <Category></Category>
         

         <div className="mx-auto">
            <form  onChange={(e)=>{setSearch(e.target.value)}}>
                <input className="bg-green-400 " type="text" />
            </form>
         </div>

        <div className="grid grid-cols-1 gap-5 mx-auto my-20">
       {
        // loadData.map)
        loadData.filter(data=>{
            return data.title.toLowerCase().includes(search.toLowerCase())
        }).map(load=><Blogs key={load._id} load={load}></Blogs>)
       }  
        </div>
        </div>
    );
};

export default AllBlogs;