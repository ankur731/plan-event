import React, { useState } from 'react'
import "./UserContainer.css"

function UserContainer() {
   const [active, setActive] = useState("account");

   function handleActive(name) {
      setActive(name);
   }

   return (
      <div className='userContainer'>
         <div className='leftMenu'>
            <button className={active === 'account' ? 'activeButton' : ""} onClick={() => handleActive('account')}>Account</button>
            <button className={active === 'address' ? 'activeButton' : ""} onClick={() => handleActive('address')}>Address</button>
            <button className={active === 'order' ? 'activeButton' : ""} onClick={() => handleActive('order')}>Orders</button>
            <button>Logout</button>
         </div>
         <div style={active === 'account' ? { display: 'block' } : { display: 'none' }} className='rightContainer account'>
            <h3>Account Details</h3>
            <hr />
            <form>
               <div className='inputFieldFirstName'>
                  <label htmlFor='firstName'>First Name</label>
                  <input type='text' id='firstName' />

               </div>
               <div className='inputFieldLastName'>
                  <label htmlFor='lastName'>Last Name</label>
                  <input type='text' id='lastName' />

               </div>
               <div className='inputFieldPhone'>
                  <label htmlFor='phone'>Phone </label>
                  <input type='number' max={9999999999} id='phone' />

               </div>
               <div className='inputFieldEmail'>
                  <label htmlFor='email'>Email</label>
                  <input type='email' id='email' />

               </div>

               <h3>Change Password</h3>

               <div className='inputFieldCurrPass'>
                  <label htmlFor='currPassword'>Current Password</label>
                  <input type='password' id='currPassword' />
               </div>
               <div className='inputFieldNewPass'>
                  <label htmlFor='newPassword'>New Password</label>
                  <input type='password' id='newPassword' />
               </div>
               <div className='inputFieldConfirmNewPass'>
                  <label htmlFor='ConfirmewPassword'>Confirm New Password</label>
                  <input type='password' id='ConfirmewPassword' />
               </div>

               <button className='saveChanges' type='submit'>Save Changes</button>
            </form>
         </div>
         <div style={active === 'address' ? { display: 'block' } : { display: 'none' }} className='rightContainer address'>
            <h3 >Address Details</h3>
            <hr />
            <form autoComplete='off'>
               <div className='inputFieldPlot'>
                  <label htmlFor='plot'>Plot </label>
                  <input type='text' id='plot' />
               </div>
               <div className='inputFieldStreet'>
                  <label htmlFor='street'>Street </label>
                  <input type='text' id='street' />
               </div>
               <div className='inputFieldLandmark'>
                  <label htmlFor='landmark'>Landmark </label>
                  <input type='text' id='landmark' />
               </div>
               <div className='inputFieldState'>
                  <label htmlFor='state'>State </label>
                  <input type='text' id='state' />
               </div>
               <div className='inputFieldCity'>
                  <label htmlFor='city'>City </label>
                  <input type='text' id='city' />
               </div>
               <div className='inputFieldZipCode'>
                  <label htmlFor='zipCode'>Zipcode </label>
                  <input type='number' id='zipCode' />
               </div>
               <button className='saveChanges' type='submit'>Save Changes</button>
            </form>
         </div>
      </div>
   )
}

export default UserContainer
