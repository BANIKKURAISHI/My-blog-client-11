import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'; 
import Contain from "../Hooks/UI/Contain";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";

const Navbar = ({children}) => {
  const {user,logOut}=useAuth()
  const [theme,setTheme]=useState(localStorage.getItem('theme')?localStorage.getItem('theme'):"light")

  const themeButton =(e)=>{
    if(e.target.checked){
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
  }

  useEffect(()=>{
    localStorage.setItem("theme",theme)
    const localTheme =localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme",localTheme)

  },[theme])


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
    isPending ? "pending" : isActive ? "btn btn-sm btn-secondary btn-outline  mx-2 my-2 lg:my-0":"btn btn-sm text-white btn-outline  mx-2 my-2 lg:my-0"
  }
>
  Home
</NavLink>
  <NavLink
  to="/addBlog"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn btn-sm btn-outline   btn-secondary mx-2 my-2 lg:my-0" : "text-white btn  btn-sm btn-outline   mx-2 my-2 lg:my-0"
  }
>
  Add Blog
</NavLink>

  <NavLink
  to="/allBlogs"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn btn-sm btn-outline  mx-2  btn-secondary my-2 lg:my-0" : "btn text-white btn-sm btn-outline  mx-2 my-2 lg:my-0"
  }
>
  All Blog
</NavLink>
<NavLink
  to="/wishlist"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn btn-sm btn-outline  mx-2  btn-secondary my-2 lg:my-0" : "btn text-white btn-sm btn-outline  mx-2 my-2 lg:my-0"
  }
>
 Wishlist
</NavLink>
<NavLink
  to="/featuredBlogs"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn btn-sm btn-outline  mx-2  btn-secondary mr-2 my-2 lg:my-0" : "btn text-white btn-sm btn-outline  mx-2 mr-2 my-2 lg:my-0"
  }
>
Featured Blogs
</NavLink>

 {user?.email? <div className="">
  <img  src={user.photoURL} className="w-16 h-16 rounded-full mb-2 text-center  lg:mr-4"  alt="" />
 <button onClick={logOutButton} className=" btn-secondary btn btn-sm btn-outline  lg:-mx-2">Log out</button>
 </div>:
 <div className="flex flex-col lg:flex-row">
  <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " btn-secondary btn btn-sm btn-outline  mx-2 my-2 lg:my-0" : "btn text-white btn-sm btn-outline  mx-2 my-2 lg:my-0"
  }
>
  Login
</NavLink>
<NavLink
  to="/singUp"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn  btn-secondary btn-sm btn-outline my-2 lg:my-0" : "btn text-white btn-sm btn-outline my-2 lg:my-0"
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
    <div className="w-full  navbar bg-indigo-400">
      <div className="flex-none mb-52  lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <label className="swap swap-rotate  text-white ml-1   md:ml-2 lg:ml-8">
      <input 
       onChange={themeButton}
       checked={theme==="light"?false:true}
      type="checkbox" />
   
     <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
     <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
     </label> 
      <div className="flex-1 px-0 mx-2 text-4xl font-semibold text-white lg:px-2 ">NEWS PORTAL </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal items-center ">
        {navItem}
        </ul>
      </div>
    </div>
    {children}
    
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80  h-[300px] bg-blue-400 ">
      
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
