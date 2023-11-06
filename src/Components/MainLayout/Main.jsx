import { Outlet } from "react-router-dom";
import Navbar from "../Navbar&&Footer/Navbar";
import Banner from "../Pages/Banner";
import News from "../Pages/News";
import Contain from "../Hooks/UI/Contain";






const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <News></News>
         
            
           
           <Contain>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
           
           </Contain>
        </div>
    );
};

export default Main;