import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom";

const RecentBlog = ({load}) => {
    const {user}=useAuth()
    const email=user?.email
    const{ _id,title, image,short_description,full_description,category, author,date_published}=load
  
     const wishListButton=()=>{
     const list ={email, title, image,short_description,full_description,category, author,date_published}
      try{ axios.post('https://my-blog-server-side.vercel.app/popular',list)
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
        <div>
            <div className="card w-80  h-96 my-10 bg-base-100 shadow-xl lg:w-96">
                <figure>
                  <img
                    src={image}
                    alt="Shoes"
                    className="h-40 w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{short_description}</p>
                
                  <div className="badge badge-outline">{category}</div>
                  <div className="card-actions justify-end">
                  <Link to={`/blogs/${_id}`}><button className="btn btn-sm btn-outline btn-info ">DETAILS</button></Link> 
                    <button onClick={wishListButton} className="btn btn-sm btn-outline btn-info">WISHLIST</button>
                  </div>
                </div>
              </div> 
        </div>
    );
};
RecentBlog.propTypes={
    load:PropTypes.object
}

export default RecentBlog;