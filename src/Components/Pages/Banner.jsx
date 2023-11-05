
import Contain from './../Hooks/UI/Contain';

const Banner = () => {
  return (
    <Contain>
<div className="carousel w-full h-[400px] my-10 md:h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/SxfgTjC/ye-Htn-Hogp-GVN9w1n-RUs-Sy-Xeg79-Cu-O54fb4-B1k3-Tl-Ye-Zx-L9-K1o3-DEalnr-Xt-Ajsbord-Mz-Vfgoc-Gpf-BGtg.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide8" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/mJCpH6g/reading-newspapaer-newspaper-man-street.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/54pWFQt/News-media-standards.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/hgv7frN/620aeab991c512f95c80f3b0-good-news-websites-sources.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/pRLTTyL/Fotolia-104752853-S.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/sw5n7zs/maxresdefault.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide7" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide7" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/jVn2mkj/example-newspaper-dps-top-banner-1600x960.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn btn-circle">❮</a> 
      <a href="#slide8" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide8" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/p3r3bS0/maxresdefault-1.jpg" className="w-full" />
    <div className="absolute flex justify-between   transform -translate-y-1/2  left-5 right-5 top-1/2">
      <a href="#slide7" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </Contain>
  );
};

export default Banner;