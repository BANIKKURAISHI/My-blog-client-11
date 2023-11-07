import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'; 
import Contain from "../Hooks/UI/Contain";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../Hooks/useAuth";

const Navbar = ({children}) => {
  const {user,logOut}=useAuth()
  const logOutButton=()=>{
    logOut()
    .then(()=>{
      toast('logout successful')
    })
    .catch((error)=>{
      toast(error.code)
    })
  }
 const navItem=<>
   <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn btn-sm btn-secondary btn-outline  mx-2":"btn btn-sm text-white btn-outline  mx-2"
  }
>
  Home
</NavLink>
  <NavLink
  to="/addBlog"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn btn-sm btn-outline   btn-secondary mx-2" : "text-white btn  btn-sm btn-outline   mx-2"
  }
>
  Add Blog
</NavLink>

  <NavLink
  to="/allBlogs"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn btn-sm btn-outline  mx-2  btn-secondary" : "btn text-white btn-sm btn-outline  mx-2"
  }
>
  All Blog
</NavLink>
<NavLink
  to="/wishlist"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn btn-sm btn-outline  mx-2  btn-secondary" : "btn text-white btn-sm btn-outline  mx-2"
  }
>
 Wishlist
</NavLink>
 {user?.email? <div className="">
  <img  src={user.photoURL} className="w-16 h-16 rounded-full mb-2 text-center lg:mr-4"  alt="" />
 <button onClick={logOutButton} className=" btn-secondary btn btn-sm btn-outline  lg:-mx-2">Log out</button>
 </div>:
 <div className="">
  <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " btn-secondary btn btn-sm btn-outline  mx-2" : "btn text-white btn-sm btn-outline  mx-2"
  }
>
  Login
</NavLink>
<NavLink
  to="/singUp"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn  btn-secondary btn-sm btn-outline " : "btn text-white btn-sm btn-outline "
  }
>
  SingUp
</NavLink>
</div>} </>
  return (
    <Contain>
    <div className="drawer ">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-indigo-400">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2 text-4xl font-semibold text-white">AB BLOGS</div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal items-center">
        {navItem}
        </ul>
      </div>
    </div>
    {children}
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80  h-[300px] bg-base-200">
      
      {navItem}
  
     
    </ul>
  </div>
</div>
<ToastContainer />
</Contain>
  )
};
Navbar.propTypes={
  children:PropTypes.node
}

export default Navbar;
