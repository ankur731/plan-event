import React from 'react'
import "./Why.css"

function Why() {
  return (
    <div className='why'>
      <h2>Why Directory</h2>
      <hr />
      <div className='whySection'>
        <img src={require("../../images/pexels-czapp-árpád-16945241.jpg")} alt='why-img' />
        <div className='whySection-text'>
            <h4>Are You Looking For Clothes</h4>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc ex, maximus vel felis ut, vestibulumtristique enim. Proin nulla est. Maecenas tempor euismod suscipit. Sed at libero ante. Vestibulum nec odio lacus.</h6>
            <button>Explore</button>
        </div>
      </div>
    </div>
  )
}

export default Why
