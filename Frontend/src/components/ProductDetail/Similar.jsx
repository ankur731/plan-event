import React, { useEffect, useState } from 'react'
import "./Similar.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from '../ProductPage/ProductCard'
import { useParams } from 'react-router-dom';

const responsive = {
    Extralarge: {
      breakpoint: { max: 3000, min: 2001 },
      items: 6,
      slidesToSlide: 1 
    },
    desktop: {
      breakpoint: { max: 2000, min: 1221 },
      items: 3,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1220, min: 911 },
      items: 3,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 910, min: 621 },
      items: 2,
      slidesToSlide: 1 
    },
    small: {
      breakpoint: { max: 620, min: 320 },
      items: 1,
      slidesToSlide: 1 
    }
  };
 
 

function Similar() {

  const [items, setItems] = useState([]);

  const {category, id} = useParams();
  useEffect(() => {

    const getPosts = async()=>{
      const res = await fetch(
        `http://localhost:8000/${category}`
      );
      const data = await res.json();
      setItems(data);
    }
    getPosts();
  }, [category,id])
  return (
    <div className='similar'>
        <h3>Similar</h3>
        <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        keyBoardControl={true}
        partialVisible={true}
        itemClass="carousel-item-padding-40-px"
        dotListClass="custom-dot-list-style"
      >
        {items?.filter((it) => it._id!==id ).map((item,index) => {
          return ( <ProductCard className="slider" key={index} id={item._id}  category={item.categorySelected} name={item.categoryName} />
          );
        })}
      </Carousel>
    </div>
    
  )
}

export default Similar
