import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  function sendToExplore() {
    navigate("/explore");
  }
  function sendToHome() {
    navigate("/");
  }
  function sendToLogin() {
    navigate("/userlogin")
  }
  function sendToVendor() {
    navigate("/vendor")
  }
  function sendToVendorLogin(){
    navigate("/vendorlogin")
  }
  // const sendToUser = () => {
  //   console.log("Clicked")
  // }

  const handleClick = () => {
    setNavbar(!navbar);
    setSidebar(!sidebar);
  }

  const MouseOver = () => {
    setOpen(true);
  };

  const MouseOut = () => {
    setOpen(false);
  };

  function toggleSearchBar() {
    setSearchBar(!searchBar);
  }
 


  return (
    <div className='navbar'>
      <div className='navbar-top'>
       
        {sidebar?
        <CloseIcon fontSize='large' className='menuIcon'  onClick={handleClick}/>
        : <MenuIcon fontSize='large' className='menuIcon' onClick={handleClick} />}
        <h2>LOGO</h2>
       
        <div className='dropdown' onMouseEnter={MouseOver} onMouseLeave={MouseOut}>
          <button type='button' className=' login-btn'>Login</button>
          {open ? (
            <ul className="menu" >
              <li className="menu-item">
                <button onClick={sendToLogin}><LoginIcon fontSize='small' /> Login as User</button>
              </li>
              <li className="menu-item">
                <button onClick={sendToVendorLogin}><LoginIcon fontSize='small' /> Login as Vendor</button>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
      {/* <div className={navbar ? "navbar-bottom mobile" : "navbar-bottom "} style={navbar ? { display: "flex" } : {}}  >
        <div className={navbar ? "navbar-bottomItems mobile" : "navbar-bottomItems "} >
         
        </div>
        <div className='dropdown' onMouseEnter={MouseOver} onMouseLeave={MouseOut}>
          <button type='button' className='btn  login-btn'>Login</button>
          {open ? (
            <ul className="menu" >
              <li className="menu-item">
                <button onClick={sendToLogin}><LoginIcon fontSize='small' /> Login as User</button>
              </li>
              <li className="menu-item">
                <button onClick={sendToVendorLogin}><LoginIcon fontSize='small' /> Login as Vendor</button>
              </li>
            </ul>
          ) : null}
        </div>
      </div> */}
      <div className='navbarBottom' style={sidebar?{visibility:"visible"}:{}}>
          <h4 onClick={sendToHome}>Home</h4>
          <h4 onClick={sendToExplore}>Explore</h4>
          <h4 onClick={sendToVendor}>Vendor</h4>
          <h4 onClick={sendToHome}>About</h4>
          <div className={searchBar?"input-box open":"input-box"}>
          <input type="text" placeholder="Search..." />
          <span className="search" onClick={toggleSearchBar}>
            <SearchIcon className='search-icon' />
          </span>
          <CloseIcon className='close-icon' onClick={toggleSearchBar}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
