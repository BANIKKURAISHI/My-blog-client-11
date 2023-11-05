import { Outlet } from "react-router-dom";
import Navbar from "../Navbar&&Footer/Navbar";
import Banner from "../Pages/Banner";
import News from "../Pages/News";




const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <News></News>
            
            
           <h1>This is my main Route</h1> 
           <Outlet></Outlet>
        </div>
    );
};

export default Main;