import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar&&Footer/Navbar";
import Contain from "../Hooks/UI/Contain";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const BlogDetails = () => {
  const loadData = useLoaderData();
  const {user}=useAuth()
  const currentUser=user?.email
  const userName=user?.displayName
  const userPhoto=user?.photoURL
  const [comments,setComments]=useState()
 
  const {
    _id,
    title,
    image,
    short_description,
    category,
    full_description,
    author,
    date_published,
    source,
    userEmail,
  } = loadData;
const commentsButton=(e)=>{
  e.preventDefault()
  const allInform ={userName,userPhoto,comments,title}
 axios.post('http://localhost:5000/comments',allInform)
 .then(res=>{
  if(res.data){
    Swal.fire({
        title: 'Success!',
        text: 'Your blog is success fully added',
        icon: 'success',
        confirmButtonText: 'Thank You '
      })}
 })
}
const [comment,setComment]=useState()


useEffect(()=>{
 axios.get('http://localhost:5000/comments')
 .then(res=>{
  const data=res.data
  const fil= data?.filter(data=>data.title==title)
  setComment(fil)
  console.log(title);
 })
},[title])
  return (
   <Contain>
    <Navbar></Navbar>

   
   <div className="card w-[1200px]  mx-auto my-20  card-side bg-base-100 shadow-md">
    
     <figure>
       <img
         src={image}
         alt="Movie"
         className="w-96 h-full  rounded-s-md"
       />
     </figure>
     <div className="card-body  ">
       <h2 className="text-blue-400 text-xl font-bold ">{category}</h2>
       <h2 className=" text-3xl font-bold ">{title}</h2>
       <p className="text-xl font-semibold">{short_description}</p>
       <div>
         <div className="flex flex-row -mx-2">
             <img className="w-10 h-10  rounded-full" src="https://i.ibb.co/dfKtBR5/a4d5069012f87e153609b338d8b104d4e124e1d6-409x398.png" alt="logo" />
             <h1 className="text-xl ml-2 font-medium">{author}</h1>
             <p className="my-1 ml-2">Published-{date_published}</p>
         </div>
         <h1>{full_description}</h1>

         <div className="card-actions justify-end ">
         <h1> Source:{source}</h1>
         </div>
        {currentUser===userEmail?<><div className="mt-8">
             <Link to={`/update/${_id}`}> <button className="btn btn-outline btn-success ">UPDATE</button></Link>    
        </div></> : ""}
        
       </div>
       
     </div>
    
   </div>
    
    <p className="text-2xl mx-5 my-5">All Comments</p>
    {
    comment?.map(com=><div key={com._id}>
     <div className="flex flex-col mx-5">
      <div className="flex flex-col">
        <div className="flex flex-row  w-1/3">
      <img className="w-10 h-10 rounded-full" src={com.userPhoto} alt="" />
      <h1 className="my-2 mx-2 text-lg font-semibold">{com.userName}</h1>
      </div>
      <h1 className="w-2/3  my-2 mx-12">
      {com.comments}
      </h1>
      </div>
      

    </div>
    
    </div>)
   } 


   {currentUser===userEmail?<>
   <div>
   
   </div>
   </>:<>
   <div className=" card rounded-sm shadow-xl mb-20">
    
    
  <div className="">
  <div>
  </div>
  <form onSubmit={commentsButton} className="flex flex-col">
        <textarea onBlur={(e)=>{setComments(e.target.value)}} className="border-2 " name="comments" id="" cols="60" rows="10"></textarea>
        <button className="btn shadow-2xl btn-sm btn-outline btn-info">Comment</button>
  </form>
   </div>
   </div>
   </>}
   </Contain>
  );
};

export default BlogDetails;
