import { useLoaderData } from "react-router-dom";



const Category = () => {
    const load =useLoaderData()
    console.log(load)
    return (
        <div>
            
                 
                <select >
                        <option value="category">{load.category}</option>
                </select>
            
            
        </div>
    );
};

export default Category;