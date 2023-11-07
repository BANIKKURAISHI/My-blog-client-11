import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar&&Footer/Navbar";
import Contain from "../Hooks/UI/Contain";

const BlogDetails = () => {
  const loadData = useLoaderData();
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
  } = loadData;
  return (
   <Contain>
    <Navbar></Navbar>

   
   <div className="card w-[1200px] mx-auto my-20  card-side bg-base-100 shadow-md">
    
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
         <div className="mt-8">
             <Link to={`/update/${_id}`}> <button className="btn btn-outline btn-success ">UPDATE</button></Link>    
        </div>
        
       </div>
       
     </div>
    
   </div>
   <div>
    <h1>Comment Section</h1>
    <p>Comment here What you want to say </p>
    <div className="flex flex-row justify-between">
  <div>
  </div>
  <form >
        <textarea className="border-2 mx-20 border-emerald-200" name="" id="" cols="40" rows="10"></textarea>
        <button className="btn btn-sm btn-outline btn-info">Comment</button>
    </form>
   </div>
   </div>
   
   </Contain>
  );
};

export default BlogDetails;
