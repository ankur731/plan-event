import React from 'react'
import "./CPBanner.css";

function Banner(props) {
  return (
    <div className='CategoryBanner'>
        <h1>{props.heading}</h1>
    </div>
  )
}

export default Banner
