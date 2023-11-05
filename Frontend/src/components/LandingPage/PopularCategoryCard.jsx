import React from 'react'
import "./PopularCategoryCard.css";
import { useNavigate } from 'react-router-dom';

function PopularCategoryCard(props) {

  const navigate = useNavigate();

  function handleClick() {
    if (props.text === 'HOME SERVICE') {
      navigate(`/service`);
    }
    else {
      var words = props.text.toLowerCase();
      // for (var i = 0; i < words.length; i++) {
      //   words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
      // }

      navigate(`/${words}`);
    }
  }


  return (
    <div onClick={handleClick} className='popularCategoryCard'>
      {/* <RestaurantMenuIcon className='icon' fontSize='large'/> */}
      {props.icon}
      {/* <p>Restaurant</p> */}
      <p>{props.text}</p>
    </div>
  )
}

export default PopularCategoryCard
