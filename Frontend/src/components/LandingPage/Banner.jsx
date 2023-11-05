import React, { useEffect, useState } from 'react'
import "./Banner.css"
import ControlledCarousel from './Carousel'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const [popup, setPopup] = useState(true);
  const [reload, setReload] = useState(false);
  useEffect(()=>{
    // const hasWebsiteLoaded = localStorage.getItem('hasWebsiteLoaded');

    // if (!hasWebsiteLoaded) {
    //   // Website is loaded for the first time
    //   setReload(true);
    //   localStorage.setItem('hasWebsiteLoaded', true);
    // }
    setReload(true);
   
  },[])
  const navigate = useNavigate();

  function sendToUser(){
    navigate("/userlogin");
 }
  function sendToVendor(){
    navigate("/vendorregistration");
  }
  function closePopup() {
    console.log("clicked")
        setPopup(!popup)
  }
  return (
    <div className='banner'>
        {/* <Carousel /> */}
        <h1>What's your plan <span>today</span> ?</h1>
        <p>Find out perfect place to hangout in your city from over 1258 listings</p>
        <form className='landingPage-form'>
            <input type='text' id='what' placeholder='What ?'/>
            <input type='text' placeholder='Where ? '/>
            <button type='submit' >Search</button>
        </form>
        {reload&& <> 
<div id="popup"  className={popup?"visable":""}>
    {/* <Carouse />    */}
  <ControlledCarousel />
  <CloseIcon onClick={closePopup} style={{ fontSize: '40px',opacity:"0" }} className='closebutton'/>
 <div className='askDiv' >
      <div className='userDiv'>
          <img src={require("../../images/person.jpg")} alt='person'/>
          <h5>Are you a User ?</h5>
          <button onClick={sendToUser}>Go</button>
      </div>
      <div className='vendorDiv'>
      <img src={require("../../images/person.jpg")} alt='person'/>  
          <h5>Are you a Vendor ?</h5>
          <button onClick={sendToVendor}>Go</button>
      </div>
  </div>
  </div>
  <div id="blackout"className={popup?"visable":""}></div>
</>

  }

    </div>
  )
}

export default Banner
