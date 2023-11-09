import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoInstagram } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";

import RecentBlog from "./RecentBlog";
import FramerMotion from "./FramerMotion";



const Home = () => {
  const loads = useLoaderData();
  
  


  //title, image, short description, category, details button and wishlist button
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-2/3 ">
        <div className="grid mx-5 grid-cols-1 lg:grid-cols-2">
          {loads.map((load) => (
            <RecentBlog key={load._id} load={load}>
             
            </RecentBlog>
          ))}
        </div>
        <div className="h-[254px]  bg-slate-700 mx-6 my-2 -mr-20 lg:mr-10">
          <FramerMotion></FramerMotion>
        </div>
      </div>
      
      {/* right site */}
      <div className="w-96  flex flex-col lg:my-10">
        <div className="mx-2 p-4  lg:mx-0">
        <div className="card shadow-2xl  rounded-sm ">
          <div className="mx-center">
            <h1 className="text-2xl ml-20 font-bold lg:ml-24">FOLLOW US</h1>
          </div>
          <div className="grid grid-cols-1  ml-16 mb-10 lg:grid-cols-1 gap-1 my-3">
            <Link
              to="https://www.facebook.com"
              className="w-48 btn btn-sm btn-outline btn-success"
            >
              <span>
                <BsFacebook></BsFacebook>
              </span>
              Facebook
            </Link>
            <Link
              to="https://www.twitter.com"
              className="w-48 btn btn-sm btn-outline "
            >
              <span>
                <AiFillTwitterCircle></AiFillTwitterCircle>
              </span>
              Twitter
            </Link>
            <Link
              to="https://www.youtube.com"
              className="w-48 btn btn-sm btn-outline btn-error"
            >
              <span>
                <BsYoutube></BsYoutube>
              </span>
              Youtube
            </Link>
            <Link
              to="https://www.instagram.com"
              className="w-48 btn btn-sm btn-outline btn-secondary"
            >
              <span>
                <BiLogoInstagram></BiLogoInstagram>
              </span>
              Instagram
            </Link>
          </div>
        </div>
        </div>
        <div className="w-[350px] flex flex-col my-8  mx-3  lg:flex-col shadow-2xl text-center">
          <h1 className="text-3xl mt-4 lg:text-4xl my-4 ">Lets Start Make A Good World </h1>
          <div className="my-5 mx-1 ml-1 mr-1 text-justify  lg:mx-16 ">
         {loads.slice(0,3).map((load) => (
            <div className="card gap-5" key={load._id} >
              <div >
              <h1>{load.title}</h1>
              <p>{load.full_description}</p>
              </div>
            
           
            </div>
            
          ))}
          <h1 className="text-end">-Mr.Rahman</h1>
          </div>
        </div>
        
      </div>
    

      </div>
   
  );
};

export default Home;
