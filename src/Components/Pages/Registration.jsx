import { Link } from "react-router-dom";
import Contain from "../Hooks/UI/Contain";
import Navbar from "../Navbar&&Footer/Navbar";


const Registration = () => {
    return (
        <Contain>
        <Navbar></Navbar>
        <div className="flex ">
        <div className="hero min-h-screen ">
        <div className=" flex flex-col-reverse shadow-2xl  bg-blue-400  lg:flex-row justify-between">
        <div className="hero-content flex-col ">
         
          <div className="card flex-shrink-0 w-96   font-bold lg:w-[800px] ">
          <div className="mx-6 lg:mt-8">
            <h1 className="text-5xl text-white font-bold">Create An Account</h1>
          </div>
            <form className="card-body text-xl font-normal">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                //   onBlur={(e)=>{setName(e.target.value)}}
                  required
                />
              </div>
              <div className="form-control text-xl font-normal">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                //   onBlur={(e)=>{setEmail(e.target.value)}}
                  required
                />
              </div>
              <div className="form-control text-xl font-normal">
                <label className="label">
                  <span className="label-text text-white">Photo</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Enter your photo"
                  className="input input-bordered"
                //   onBlur={(e)=>{setPhoto(e.target.value)}}
                  required
                />
              </div>
              <div className="form-control text-xl font-normal">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                //   onBlur={(e)=>{setPassword(e.target.value)}}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-500 text-white">Registration</button>
              </div>
              <div className="text-white">
                Already have an account ?<Link to='/login' className="text-white text-2xl">Log in </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[400px] mx-3 lg:w-[450px]">
           <img className=" h-[580px] w-[390px] lg:w-[450px] mt-4  rounded-2xl" src="https://i.ibb.co/2KXh5Tj/treehouse-built-around-giant-book-generative-ai-208978-1762.jpg" alt=""  />
        </div>
      </div>
      </div>
      </div>
      </Contain>
   
   
    );
};

export default Registration;