import { Outlet } from "react-router-dom";
import Navbar from "../Navbar&&Footer/Navbar";
import Banner from "../Pages/Banner";
import News from "../Pages/News";
import Contain from "../Hooks/UI/Contain";
import NewsLater from "../Pages/NewsLater";
import Footer from "../Navbar&&Footer/Footer";
import { Helmet } from "react-helmet-async";







const Main = () => {
    return (
        <div>
            <Helmet>
                <title>News portal | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <News></News>
            
            
           
           <Contain>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <NewsLater></NewsLater>

            <Footer></Footer>
           </Contain>
         
        </div>
    );
};

export default Main;