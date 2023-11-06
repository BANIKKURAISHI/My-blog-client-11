
import { Link, useLoaderData } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useEffect, useState } from 'react';
import Contain from '../Hooks/UI/Contain';
import Navbar from '../Navbar&&Footer/Navbar';

const WishList = () => {
    const load =useLoaderData()
    const [blogs,setBlogs]=useState([])
    const {user}=useAuth()
    const email =user?.email
    useEffect(()=>{
    const wishList =load.filter(wish=>wish.email===email)
    setBlogs(wishList)
    },[email,load])

  const deleteWishListButton=()=>{

  }


    return (
        <div>
            <Navbar></Navbar>
        <div className='mx-auto my-20'>

           
        {
            blogs.map(blog=><div key={blog._id}>
           <Contain>
            <div className="card w-[1270px]  card-side bg-base-100 shadow-md">
           <figure>
          <img
            src={blog.image}
            alt="Movie"
            className="w-96 h-full  rounded-s-md"
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
           <Link to={`/popular/${blog._id}`}><button className="btn btn-outline btn-info">DETAILS</button></Link>  
           <button onClick={deleteWishListButton} className="btn btn-outline btn-info">REMOVE</button> 
          
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

export default WishList;
//Each blog should have a title, image, short description, category, details button and
//remove wishlist button