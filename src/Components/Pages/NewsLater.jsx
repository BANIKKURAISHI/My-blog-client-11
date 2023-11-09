import Swal from "sweetalert2";


const NewsLater = () => {


    const thankYou=(e)=>{
        e.preventDefault()
        Swal.fire(
            'Success!',
            'Thank you for subscribing to our newsletter .',
            'success'
          )

    }
    return (
        <div className="max-w-7xl border items-center text-center text-white bg-indigo-400 py-5">
        <div className="flex flex-col  lg:mx-80 ">
        <h1 className="text-5xl font-medium ">Subscribe For More!</h1>
        <p className="text-2xl">If you want to be the first to find out more about our News
        please subscribe to our newsletter</p>
        </div>
        <form onSubmit={thankYou} className="text-center my-4">
        <input type="text" placeholder="Type here your email" className="p-3 text-black  mr-2 rounded-md w-full max-w-xs" />   
        <input type="submit" className="btn btn-outline text-white my-2 lg:my-0" value="Subscribe" />
        </form>
        </div>
    );
};

export default NewsLater;