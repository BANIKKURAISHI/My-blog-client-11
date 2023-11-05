import { Link } from "react-router-dom";
import Navbar from "../Navbar&&Footer/Navbar";
import Contain from "../Hooks/UI/Contain";
import { FcGoogle } from 'react-icons/fc'
import useAuth from "../Hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const Login = () => {
  const {googleButton,login}=useAuth()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
///google log in button 
const googleLoginButton=()=>{
  googleButton()
  .then(result=>{
    const user=result.user 
    console.log(user)
    toast('Logged in successful ')
  })
  .catch(error=>{
    const errorMessage = error.message;
    toast(errorMessage)
  })
}
//user log in 
const loginButton=async(e)=>{
  e.preventDefault()
  try{
    await login(email,password)
    toast('Log in successful')
    }
    catch(error){
      const errorMessage=error.code
      toast(errorMessage)

    }

}

    return (
      <Contain>
        <div className="">
          <Navbar></Navbar>
          
          <div className="hero min-h-screen ">
          <div className=" flex flex-col-reverse shadow-2xl  bg-blue-400  lg:flex-row justify-between">
          <div className="hero-content flex-col ">
         

        
          <div className="card flex-shrink-0 font-bold w-96  lg:w-[700px]">
          <div className=" text-white lg:mt-3">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
            <form  onSubmit={loginButton} className="card-body -mx-8 lg:py-10 ">
            
              <div className="form-control text-xl  text-white font-normal">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  onBlur={(e)=>{setEmail(e.target.value)}}
                  required
                />
              </div>
              
              <div className="form-control text-xl  font-normal">
                <label className="label ">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  onBlur={(e)=>setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-row mt-2 text-xl font-normal">
                <input type="checkbox" name="" id="" />
                <h1 className="mx-1 text-white" >Remember me .</h1>
              </div>
              <div className="form-control mt-4 ">
                <button className="btn bg-blue-500 text-xl text-white ">Login</button>
              </div>
              <div className="text-xl font-normal text-white text-center">
                New Here?Create an account.<Link to='/singUp' className="text-white text-2xl">Registration</Link>
              </div>
              <div className="mx-auto grid grid-cols-3 items-center">
                 < hr className="border-white "/>
                 <h1 className="mx-auto text-2xl text-white">OR</h1>
                 < hr className="border-white "/>
              </div>
              
              <button onClick={googleLoginButton}  className="btn btn-primary  border-white bg-blue-500 text-white  w-full mt-3 p-3 rounded-md text-xl flex flex-row"><span className="my-1 lg:ml-4 mr-2"><FcGoogle></FcGoogle></span><span >Login with Google</span></button>
            </form>
            
            
            <ToastContainer />
          </div>
        </div>
        <div className="w-[400px] mx-2 lg:w-[450px] bg-inherit">
           <img className=" h-[580px] w-[390px] lg:w-[450px] mt-4  rounded-2xl" src="https://i.ibb.co/2KXh5Tj/treehouse-built-around-giant-book-generative-ai-208978-1762.jpg" alt=""  />
        </div>
       </div>
      </div>
    
      </div>
      {/* <ToastContainer /> */}
     
    </Contain>  
      
    );
};

export default Login;