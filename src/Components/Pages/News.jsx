import Contain from "../Hooks/UI/Contain";


const News = () => {
    return (
        <Contain>
        <div className="bg-indigo-400 h-10 text-white ">
          <div className="flex flex-row">
          <h1 className="text-2xl w-1/5">Breaking News :</h1>
          <marquee className="text-xl">Stay up-to-date with the latest cricket news and updates from ESPN info. Get breaking news, analysis, match reports, and more on cricket from around the  </marquee>  
          </div>
          
        </div>
        </Contain>
    );
};

export default News;