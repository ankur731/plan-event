import React from 'react'
import "./CPCategoryCard.css";
import { useNavigate } from 'react-router-dom';

function CPCategoryCard(props) {

        const navigate = useNavigate();
      
        function handleClick() {
          navigate(`/${props.category.toLowerCase()}`);
        }
  return (
    <div className='cpCategoryCard' onClick={handleClick}>
      <div className='categoryImg'>
        <img src={require("../../images/pexels-czapp-árpád-16945241.jpg")} alt='category'/>
      </div>
      <h4>{props.category}</h4>
    </div>
  )
}

export default CPCategoryCard
