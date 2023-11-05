import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Banner.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className=" carousel-img"
          src={require("../../images/categoryBanner.jpg")}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" carousel-img"
          src={require("../../images/pexels-czapp-árpád-16945241.jpg")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" carousel-img"
          src={require("../../images/pexels-fabian-wiktor-994605.jpg")}
          alt="Third slide"
        />

      </Carousel.Item>
      
    </Carousel>
  );
}

export default ControlledCarousel;