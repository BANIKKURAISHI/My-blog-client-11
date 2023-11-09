import { useState } from "react";
import Contain from "../Hooks/UI/Contain";
import Navbar from "../Navbar&&Footer/Navbar";

import axios from "axios";
import Swal from "sweetalert2";
import {useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AddBlogs = () => {
  const data=useLoaderData()
//title,image,short_description,category,full_description,author,date_published,source
 const [title,setTitle]=useState()
 const [image,setImage]=useState()
 const [short_description,setShort_description]=useState()
 const [category,setCategory]=useState()
 const [full_description,setFull_description]=useState()
 const [author,setAuthor]=useState()
 const [date_published,setDate_published]=useState()
 const [source,setSource]=useState()
 const [clickTime, setClickTime] = useState();
 //console.log(clickTime)
 const {user}=useAuth()
 const userName=user?.displayName
 const userEmail=user?.email 
 const userPhoto=user?.photoURL
 
//displayName:name, photoURL:photo

 const addBlogButton=(e)=>{
   const currentTime = new Date().toLocaleTimeString();
   setClickTime(currentTime);
   const time =clickTime
  
      e.preventDefault()
   
     const add={time,title,image,short_description,category,full_description,author,date_published,source,userName,userEmail,userPhoto}
     console.log(add)
     try {
    axios.post('https://my-blog-server-side.vercel.app/blogs',add)
    .then(res=>{
       if(res.data){
        Swal.fire({
            title: 'Success!',
            text: 'Your blog is success fully added',
            icon: 'success',
            confirmButtonText: 'Thank You '
          })}
    })
    } catch (error) {
    console.log(error)
    }
 }

    return (
        <Contain>
        <Navbar></Navbar>
        <div>
        <div className="hero min-h-screen bg-blue-500 ">
        <div className="hero-content flex-col ">
         
         <div className="card flex-shrink-0 w-96   font-bold lg:w-[800px] ">
        <div className="mx-6 lg:mt-8">
            <h1 className="text-5xl text-white font-bold">ADD YOUR BLOG</h1>
          </div>
         <form onSubmit={addBlogButton} className="card-body text-xl font-normal">
             <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter your name"
                  className="input input-bordered "
                  onBlur={(e)=>{setTitle(e.target.value)}}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Image</span>
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="Enter your image"
                  className="input input-bordered"
                  onBlur={(e)=>{setImage(e.target.value)}}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Short Description</span>
                </label>
                <input
                  type="text"
                  name="short_description"
                  placeholder="Enter your short_description"
                 
                  className="input input-bordered"
                  onBlur={(e)=>{setShort_description(e.target.value)}}
                  required
                />
              </div>
             <label className="label">
            <span className="label-text text-white">Category</span>
            </label>
            {/*<input name="category"  required onBlur={(e)=>{setCategory(e.target.value)}} type="text" className="input input-bordered" /> */}
             
             <select  className="input input-bordered"
             onBlur={(e)=>{setCategory(e.target.value)}}
             required
             name="" id="">
              {
                data.map(category=><option defaultValue={category.category} key={category._id}>
                  {category.category}
                </option>)
              }
            </select>  
             <div className="form-control text-xl font-normal">
                <label className="label">
                  <span className="label-text text-white">Full Description</span>
                </label>
                <input
                  type="text"
                  name="full_description"
                  placeholder="Enter your full_description"
                
                  className="input input-bordered"
                  onBlur={(e)=>{setFull_description(e.target.value)}}
                  required
                />
              </div>
              <div className="form-control text-xl font-normal">
                <label className="label">
                  <span className="label-text text-white">Author</span>
                </label>
                <input
                  type="text"
                  name="author"
                  placeholder="Enter your author"
                  defaultValue={author}
                  className="input input-bordered"
                  onBlur={(e)=>{setAuthor(e.target.value)}}
                  required
                />
              </div>
              <div className="form-control text-xl font-normal">
                <label className="label">
                  <span className="label-text text-white">Published Date</span>
                </label>
                <input
                  type="date"
                  name="date_published"
                  placeholder="Enter your date_published"
               
                  className="input input-bordered"
                  onBlur={(e)=>{setDate_published(e.target.value)}}
                  required
                />
              </div>
              <div className="form-control text-xl font-normal">
                <label className="label">
                  <span className="label-text text-white">Source</span>
                </label>
                <input
                  type="text"
                  name="source"
                  placeholder="Enter your source"
                  
                  className="input input-bordered"
                  onBlur={(e)=>{setSource(e.target.value)}}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-500 text-white">ADD BLOG</button>
              </div>
             
            </form>  
              
        </div>
        </div>
        </div>
        </div>
        </Contain>
    );
};

export default AddBlogs;


//title,image,short_description,category,full_description,author,date_published,source