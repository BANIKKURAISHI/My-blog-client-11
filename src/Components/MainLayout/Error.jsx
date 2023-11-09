import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="max-w-7xl my-20  mx-auto">
         <img src="https://i.ibb.co/0nFxrfR/404-status-code.png" alt=""  />
         <Link to="/" className="btn btn-info  btn-outline">Back</Link>
        </div>
    );
};

export default Error;