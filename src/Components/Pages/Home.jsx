import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoInstagram } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const loads = useLoaderData();
  console.log(loads);
  //title, image, short description, category, details button and wishlist button
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-2/3 ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {loads.map((load) => (
            <div key={load._id}>
              <div className="card w-80  h-96 my-10 bg-base-100 shadow-xl lg:w-96">
                <figure>
                  <img
                    src={load.image}
                    alt="Shoes"
                    className="h-40 w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {load.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{load.short_description}</p>
                
                  <div className="badge badge-outline">{load.category}</div>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">DETAILS</div>
                    <button  className="badge badge-outline">WISHLIST</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* right site */}
      <div className="w-1/3 my-10">
        <div className="card  shadow-2xl rounded-sm ">
          <div>
            <h1 className="text-3xl text-center font-bold">FOLLOW US</h1>
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-1 ml-2 my-3">
            <Link
              to="https://www.facebook.com"
              className="w-48 btn btn-sm btn-outline btn-success"
            >
              <span>
                <BsFacebook></BsFacebook>
              </span>
              Facebook
            </Link>
            <Link
              to="https://www.twitter.com"
              className="w-48 btn btn-sm btn-outline "
            >
              <span>
                <AiFillTwitterCircle></AiFillTwitterCircle>
              </span>
              Twitter
            </Link>
            <Link
              to="https://www.youtube.com"
              className="w-48 btn btn-sm btn-outline btn-error"
            >
              <span>
                <BsYoutube></BsYoutube>
              </span>
              Youtube
            </Link>
            <Link
              to="https://www.instagram.com"
              className="w-48 btn btn-sm btn-outline btn-secondary"
            >
              <span>
                <BiLogoInstagram></BiLogoInstagram>
              </span>
              Instagram
            </Link>
          </div>
        </div>
        {/* right */}
      </div>
    </div>
  );
};

export default Home;
