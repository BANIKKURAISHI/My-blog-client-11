import { useLoaderData,  } from "react-router-dom";
import Blogs from "./Blogs";
import Navbar from "../Navbar&&Footer/Navbar";

import { useEffect, useState } from "react";
import axios from "axios";
import Contain from "../Hooks/UI/Contain";
import { Helmet } from "react-helmet-async";


const AllBlogs = () => {
    const loadData =useLoaderData()
    const {category}=loadData
    const [cats,setCats]=useState([])
    const [search,setSearch]=useState('')
    const [fil,setFil]=useState(loadData)
    useEffect(()=>{
     axios.get(`https://my-blog-server-side.vercel.app/all/${category}`)
   .then(res=>{setCats(res.data)
    console.log(cats)})
    },[category,cats])

    const filterButton=(Cricket)=>{
        const item=loadData.filter(cri=>cri.category===Cricket)
        setFil(item)
    }
   
    return (
        <div>

           <Helmet>
                <title>News portal | All Blog</title>
            </Helmet>
        <Navbar></Navbar>
       
         
        <Contain >
            <div className="bg-indigo-400 py-10">

            <div className="flex flex-col mx-auto   lg:mx-80 ">
            <h1 className="text-5xl mx-12 text-white font-medium  lg:mx-0">Search Your Favorite Blog!</h1>
           </div>
         <div className="mx-auto text-center my-4 ">
            <form  onChange={(e)=>{setSearch(e.target.value)}}>
                <input placeholder="Enter your title name" className="p-3 text-black bg-white  mr-2 rounded-md w-full max-w-xs" type="text" />
            </form>
         </div>
         <div className="mx-6 my-4 lg:mx-72  ">
         <button className=" btn glass text-white mt-2 mx-2" onClick={()=>filterButton('Technology')}>Technology</button>
         <button className=" btn glass text-white mt-2 mx-2" onClick={()=>filterButton('Nature')}>Nature</button>
         <button  className="btn glass text-white mt-2 mx-2" onClick={()=>filterButton('Travel')}>Travel</button>
         <button  className="btn glass text-white mt-2 mx-2" onClick={()=>filterButton('Cricket')}>Cricket</button>
         <button className="btn glass text-white mt-2 mx-2" onClick={()=>filterButton('Natural Food')}>Natural food</button>
         <button  className="btn glass text-white mt-2 mx-2" onClick={()=>filterButton('Others')}>Others</button>
         </div>
         </div>
         </Contain>

        <div className="grid grid-cols-1 gap-5 mx-auto my-20">
       {
        // loadData.map)
       fil.filter(data=>{
            return data.title.toLowerCase().includes(search.toLowerCase())
        }).map(load=><Blogs key={load._id} load={load}></Blogs>)
       }  
        </div>
        </div>
    );
};

export default AllBlogs;