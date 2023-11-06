import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Error from "./Error";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import { Home } from "@mui/icons-material";
import AllBlogs from "../AllBlog/AllBlogs";
import AddBlogs from "../AllBlog/AddBlogs";



const myCreateRoute=createBrowserRouter([{
path:"/",
element:<Main></Main>,
errorElement:<Error></Error>,
children:[{
    path:'/',
    element:<Home></Home>
}]

},
{
path:'/login',
element:<Login></Login>
},
{
    path:'/singUp',
    element:<Registration></Registration>
},
{
    path:'/allBlogs',
    element:<AllBlogs></AllBlogs>,
    loader:()=>fetch('http://localhost:5000/blogs')
},
{
    path:'/addBlog',
    element:<AddBlogs></AddBlogs>
},


])



export default myCreateRoute