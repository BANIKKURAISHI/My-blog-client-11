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
    loader:()=>fetch('https://my-blog-server-side.vercel.app/blog')
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
    loader:()=>fetch('https://my-blog-server-side.vercel.app/blogs')
},
{
    path:'/addBlog',
    element:<AddBlogs></AddBlogs>,
    loader:()=>fetch('https://my-blog-server-side.vercel.app/blogs')
},
{
    path:'/blogs/:id',
    element:<BlogDetails></BlogDetails>,
    loader:({params})=>fetch(`https://my-blog-server-side.vercel.app/blogs/${params.id}`)
},
 {
    path:'/all/:category',
    element:<Category></Category>,
    loader:({params})=>fetch(`https://my-blog-server-side.vercel.app/all/${params.category}`)
},
{
    path:'/wishlist',
    element:<Privet><WishList></WishList></Privet>,
    loader:()=>fetch('https://my-blog-server-side.vercel.app/popular')
},
{
    path:'/update/:id',
    element:<Privet><Update></Update></Privet>,
    loader:({params})=>fetch(`https://my-blog-server-side.vercel.app/blogs/${params.id}`)
},

 {
     path:'/featuredBlogs',
     element:<Feature></Feature>,
     
}

   



])



export default myCreateRoute