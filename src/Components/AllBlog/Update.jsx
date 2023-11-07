//import axios from "axios";
import axios from "axios";
import Contain from "../Hooks/UI/Contain";
import Navbar from "../Navbar&&Footer/Navbar";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();

  const {
    _id,
    title,
    image,
    short_description,
    category,
    full_description,
    author,
    date_published,
    source,
  } = data;

  const updateBlogButton = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const short_description = form.short_description.value;
    const category = form.category.value;
    const full_description = form.full_description.value;
    const author = form.author.value;
    const date_published = form.date_published.value;
    const source = form.source.value;
    const add = {
      title,
      image,
      short_description,
      category,
      full_description,
      author,
      date_published,
      source,
    };
    axios.patch(`http://localhost:5000/blogs/${_id}`, add).then((res) => {
      console.log(res.data);
      if (res?.data?.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Update Product successful !",
          footer: "Thanks",
        });
      }
    });
  };
  return (
    <div>
      <Contain>
        <Navbar></Navbar>
        <div>
          <div className="hero min-h-screen bg-blue-500 ">
            <div className="hero-content flex-col ">
              <div className="card flex-shrink-0 w-96   font-bold lg:w-[800px] ">
                <div className="mx-6 lg:mt-8">
                  <h1 className="text-5xl text-white font-bold">
                    UPDATE YOUR BLOG
                  </h1>
                </div>
                <form
                  onSubmit={updateBlogButton}
                  className="card-body text-xl font-normal"
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Title</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      defaultValue={title}
                      className="input input-bordered "
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Image</span>
                    </label>
                    <input
                      type="url"
                      name="image"
                      defaultValue={image}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">
                        Short Description
                      </span>
                    </label>
                    <input
                      type="text"
                      name="short_description"
                      defaultValue={short_description}
                      className="input input-bordered"
                      required
                    />
                  </div>
                   <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Category</span>
                    </label>
                    <input
                      type="text"
                      name="category"
                      defaultValue={category}
                      className="input input-bordered"
                        
                      required
                    />
                  </div> 
                  <div className="form-control text-xl font-normal">
                    <label className="label">
                      <span className="label-text text-white">
                        Full Description
                      </span>
                    </label>
                    <input
                      type="text"
                      name="full_description"
                      defaultValue={full_description}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control text-xl font-normal">
                    <label className="label">
                      <span className="label-text text-white">Author</span>
                    </label>
                    <input
                      type="text"
                      name="author"
                      defaultValue={author}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control text-xl font-normal">
                    <label className="label">
                      <span className="label-text text-white">
                        Published Date
                      </span>
                    </label>
                    <input
                      type="date"
                      name="date_published"
                      defaultValue={date_published}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control text-xl font-normal">
                    <label className="label">
                      <span className="label-text text-white">Source</span>
                    </label>
                    <input
                      type="text"
                      name="source"
                      defaultValue={source}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-blue-500 text-white">
                      UPDATE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Contain>
    </div>
  );
};

export default Update;
