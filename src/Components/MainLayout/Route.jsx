import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Error from "./Error";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

import AllBlogs from "../AllBlog/AllBlogs";
import AddBlogs from "../AllBlog/AddBlogs";
import BlogDetails from "../AllBlog/BlogDetails";
import Home from "../Pages/Home";
import WishList from "../AllBlog/WishList";
import Update from "../AllBlog/Update";



const myCreateRoute=createBrowserRouter([{
path:"/",
element:<Main></Main>,
errorElement:<Error></Error>,
children:[{
    index:true,
    element:<Home></Home>,
    loader:()=>fetch('http://localhost:5000/blog')
},


]


},
{
    path:'/',
    element:<Home></Home>
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
    element:<AddBlogs></AddBlogs>,
    loader:()=>fetch('http://localhost:5000/blogs')
},
{
    path:'/blogs/:id',
    element:<BlogDetails></BlogDetails>,
    loader:({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
},
{
    path:'/wishlist',
    element:<WishList></WishList>,
    loader:()=>fetch('http://localhost:5000/popular')
},
{
    path:'/update/:id',
    element:<Update></Update>,
    loader:({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
},



])



export default myCreateRoute