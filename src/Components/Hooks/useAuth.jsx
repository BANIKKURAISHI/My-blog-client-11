import { useContext } from "react";
import { AuthContext } from "../Firebase/Provider/AuthProvider";

const useAuth = () => {
    const useAuthInfo=useContext(AuthContext)
    return(useAuthInfo)
    
};

export default useAuth;