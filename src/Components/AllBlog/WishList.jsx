
import {  useLoaderData } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useEffect, useState } from 'react';
import Contain from '../Hooks/UI/Contain';
import Navbar from '../Navbar&&Footer/Navbar';
import axios from 'axios';
import Swal from 'sweetalert2';
import { PropTypes } from 'prop-types';


const WishList = () => {
   
    const load =useLoaderData()
    const [blogs,setBlogs]=useState([])
   
    const {user}=useAuth()
    const email =user?.email
    useEffect(()=>{
    const wishList =load.filter(wish=>wish.email===email)
    setBlogs(wishList)
    },[email,load])

  const deleteWishListButton=(id)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to Delete this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed){
        axios.delete(`https://my-blog-server-side.vercel.app/popular/${id}`)
        .then(res=>{
            console.log(res.data)
            if(res?.data?.deletedCount>0){
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  const deleteItem=load.filter(item=>item._id!==id)
                  setBlogs(deleteItem)
                
            }
        })
        }
    })

  }


    return (
        <div>
            <Navbar></Navbar>
        <div className='mx-auto my-20 '>

           
        {
            blogs.map(blog=><div key={blog._id}>
           <Contain>
            <div className="card w-80 flex flex-col mx-auto  my-10  card-side bg-base-100 shadow-md lg:w-[1270px]">
           <figure className=''>
          <img
            src={blog.image}
            alt="Movie"
            className="w-80 h-80  rounded-md"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-blue-400 text-xl font-bold ">{blog.category}</h2>
          <h2 className=" text-3xl font-bold ">{blog.title}</h2>
          <p className="text-xl font-semibold">{blog.short_description}</p>
          <div>
            <div>
            <p>{blog.full_description}</p>
            </div>
            <div className='flex flex-row'>
            <img className="w-10 h-10  rounded-full" src="https://i.ibb.co/dfKtBR5/a4d5069012f87e153609b338d8b104d4e124e1d6-409x398.png" alt="logo" />
            <h1 className="text-xl ml-2 font-medium">{blog.author}</h1>
            <p className="my-1 ml-2">Published-{blog.date_published}</p>
            </div>
            
             </div>
           <div className="card-actions justify-end">
           <button className="btn btn-outline btn-info">DETAILS</button> 
           <button onClick={()=>deleteWishListButton(blog._id)} className="btn btn-outline btn-info">REMOVE</button> 
          
          </div>
        </div>
      </div>
     
      </Contain>
     
            </div>)

            
        } 
         </div> 
        </div>
    );
};
WishList.propTypes={
    refetch:PropTypes.hooks
}
export default WishList;
//Each blog should have a title, image, short description, category, details button and
//remove wishlist button