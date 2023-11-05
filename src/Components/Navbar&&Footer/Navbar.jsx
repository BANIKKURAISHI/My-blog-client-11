import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'; 
import Contain from "../Hooks/UI/Contain";


const Navbar = ({children}) => {
  const navItem=<>
  <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn btn-sm btn-outline btn-warning" : "btn btn-sm btn-outline btn-info"
  }
>
  Login
</NavLink>
<NavLink
  to="/singUp"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn btn-sm btn-outline btn-warning" : "btn btn-sm btn-outline btn-info"
  }
>
  SingUp
</NavLink>
<button className="btn btn-sm btn-outline btn-info">Log out</button>



  </>
  return (
    <Contain>
    <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">Navbar Title</div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
        {navItem}
        </ul>
      </div>
    </div>
    {children}
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
     {navItem}
    </ul>
  </div>
</div>
</Contain>
  )
};
Navbar.propTypes={
  children:PropTypes.node
}

export default Navbar;
