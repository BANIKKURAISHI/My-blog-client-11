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
import Category from "../AllBlog/Category";

import Privet from "../Firebase/Provider/Privet";
import Feature from "../Pages/Feature";






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
    path:'/all/:category',
    element:<Category></Category>,
    loader:({params})=>fetch(`http://localhost:5000/all/${params.category}`)
},
{
    path:'/wishlist',
    element:<Privet><WishList></WishList></Privet>,
    loader:()=>fetch('http://localhost:5000/popular')
},
{
    path:'/update/:id',
    element:<Privet><Update></Update></Privet>,
    loader:({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
},

 {
     path:'/featuredBlogs',
     element:<Feature></Feature>,
     
}


])



export default myCreateRoute