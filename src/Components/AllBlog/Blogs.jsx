import { PropTypes } from "prop-types";
import Contain from "../Hooks/UI/Contain";


const Blogs = ({ load }) => {
  const {
    title,
    image,
    short_description,
    category,
    author,
    date_published,
 
  } = load;
  return (
  <Contain>
   
      <div className="card w-[1200px]  card-side bg-base-100 shadow-md">
       
        <figure>
          <img
            src={image}
            alt="Movie"
            className="w-72 h-full  rounded-s-md"
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
            
            
           
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-info">DETAILS</button>
            <button className="btn btn-outline btn-info">WISHLIST</button>
          
          </div>
        </div>
      </div>
      </Contain>
  );
};
Blogs.propTypes = {
  load: PropTypes.object,
};
export default Blogs;