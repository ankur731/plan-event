import React from 'react'
import "./PopularCategory.css"
import PopularCategoryCard from './PopularCategoryCard'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SellIcon from '@mui/icons-material/Sell';
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BackpackIcon from '@mui/icons-material/Backpack';

function PopularCategory() {
    const vals = [['RESTAURANT', <RestaurantMenuIcon className='icon'/>], ['NIGHT LIFE', <RestaurantIcon className='icon'/>], ["SHOPPING", <SellIcon className='icon'/>], ["HOME SERVICE", <ConstructionIcon className='icon'/> ], ["DELIVERY", <LocalShippingIcon className='icon'/>], ["TRAVEL", <BackpackIcon className='icon'/>]]
  return (
    <div className='popularCategory'>
        <h3>Browse Popular In Your City</h3>
        <div className='popularCategory-section'>
            {
                vals.map((e, index) => {
                    return (
                        <PopularCategoryCard key={index} text={e[0]} icon={e[1]} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default PopularCategory
