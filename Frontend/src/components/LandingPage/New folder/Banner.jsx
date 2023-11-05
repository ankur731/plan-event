import React from 'react'
import "./Banner.css"
import ControlledCarousel from './Carousel'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


function Banner() {
  const [popup, setPopup] = useState(true);

  function closePopup() {
    console.log("clicked")
        setPopup(!popup)
  }
  return (
    <div className='banner'>
        <h1>What's your plan <span>today</span> ?</h1>
        <p>Find out perfect place to hangout in your city from over 1258 listings</p>
        <form className='landingPage-form'>
            <input type='text' id='what' placeholder='What ?'/>
            <input type='text' placeholder='Where ? '/>
            <button type='submit' >Search</button>
        </form>
        <div id="blackout"className={popup?"visable":""}></div>
<div id="popup"  className={popup?"visable":""}>
    {/* <Carouse />    */}
  <ControlledCarousel />
  <CloseIcon onClick={closePopup} style={{ fontSize: '40px' }} className='closebutton'/>
</div>
    </div>
  )
}

export default Banner
