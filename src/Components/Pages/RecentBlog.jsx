import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { PropTypes } from 'prop-types';

const RecentBlog = ({load}) => {
    const {user}=useAuth()
    const email=user?.email
    const{title, image,short_description,full_description,category, author,date_published}=load
    console.log(title)
     const wishListButton=()=>{
     const list ={email, title, image,short_description,full_description,category, author,date_published}
      try{ axios.post('http://localhost:5000/popular',list)
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
                    <div className="badge badge-outline">DETAILS</div>
                    <button onClick={wishListButton} className="badge badge-outline">WISHLIST</button>
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