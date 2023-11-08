import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { PropTypes } from 'prop-types';


const Privet = ({ children}) => {
   const {user,isLoading}=useAuth()
   if(isLoading){
     return <span className="loading loading-ring loading-lg"></span>
   }
    if (! user?.email) {
       return <Navigate to="/login" />;   
   }
   return children ;
    
    }
    Privet.propTypes={
     children :PropTypes.node
    }
 
    

export default Privet;