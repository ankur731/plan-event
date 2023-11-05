import React from 'react'
import "./How.css"
import SearchIcon from '@mui/icons-material/Search';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import WineBarIcon from '@mui/icons-material/WineBar';

function How() {
  return (
    <div className='how'>
      <h1>How it works ?</h1>
      <p>Its really simple. Follow the steps and get started today!</p>
      <div className='iconSection'>
        <div className='iconSection-row'>
        <div className='iconDiv'>
          <SearchIcon className='icon'/>
          </div>
          <h4>Search List</h4>
          <p>Start by searching for what you want to do today. Choose your city and start exploring!</p>
        </div>
        <div className='iconSection-row'>
        <div className='iconDiv'>
          <AddBusinessIcon className='icon'/>
          </div>
          <h4>Choose a business</h4>
          <p>Search and filter hundreds of listings, read reviews, explore photos and find the perfect spot</p>
        </div>
        <div className='iconSection-row'>
        <div className='iconDiv'>
          <WineBarIcon className='icon'/>
          </div>
          <h4>Enjoy your day</h4>
          <p>Search and filter hundreds of listings, read reviews, explore photos and find the perfect spot</p>
        </div>
      </div>
    </div>
  )
}

export default How
