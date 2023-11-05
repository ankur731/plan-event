import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
import { Link, useNavigate } from "react-router-dom";


const responsive = {
  Extralarge: {
    breakpoint: { max: 3000, min: 2001 },
    items: 6,
    slidesToSlide: 1 // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 2000, min: 1221 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1220, min: 621 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 620, min: 521 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  small: {
    breakpoint: { max: 520, min: 320 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Slider = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // const getPosts = async()=>{
    //   const res = await fetch(
    //     'http://localhost:8000/getcategory'
    //   );
    //   const data = await res.json();
    //   setItems(data);
    //   console.log(data)
    // }
    // getPosts();
  },[])

  function handleClick(e) {
    navigate(`/category`);
  }
  return (
    <div className="parent">
     <h2>Search by Category</h2>
     <hr />
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={true}
        dotListClass="custom-dot-list-style"
      >
        {items.map((item, index) => {
          return (
            <Link style={{textDecoration:'none', color:'black'}} to={item.categoryName}>
            <div className="slider"  key={index}>
              <img src={require("../../images/categorybg.jpg")} alt="movie" />
              <p>{item.categoryName}</p>
            </div>
            </Link>
          );
        })}
      </Carousel>
      <div className='bottombar'>
            <button onClick={handleClick} type='button'>See all</button>
     </div>
    </div>
  );
};
export default Slider;
