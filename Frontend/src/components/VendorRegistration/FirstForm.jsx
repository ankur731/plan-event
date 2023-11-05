import React from 'react'
import "./FirstForm.css"


function FirstForm() {
  return (
    <div className='vendorRegistration'>
      <h2>Bussiness Details</h2>
    <hr />
      <form>
      <div className='firstForm'>
            <div className='inputBox'>
                <label htmlFor='nameOfThePartner'>Name of the Partner</label>
                <input type='text' id='nameOfThePartner' />
            </div>
            <div className='inputBox'>
                <label htmlFor='nameOfTheCompany'>Name of the Company</label>
                <input type='text' id='nameOfTheCompany' />
            </div>
            <div className='inputBox'>
                <label htmlFor='fullAddress'>Full Address</label>
                <input type='text' id='fullAddress' />
            </div>
            <div className='inputBox'>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' />
            </div>
           <div className='inputBox'>
                <label htmlFor='pinCode'>Pin Code</label>
                <input type='number' id='pinCode' />
            </div>
            <div className='inputBox'>
                <label htmlFor='serviceOffered'>Service Offered</label>
                <input type='text' id='serviceOffered' />
            </div>
            <div className='inputBox'>
                <label htmlFor='sub Category'>Sub Category</label>
                <input type='text' id='sub Category' />
            </div>
            <div className='inputBox'>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' />
            </div>
            <div className='inputBox'>
                <label htmlFor='Mobile Number'>Mobile Number</label>
                <input type='number' id='Mobile Number' />
            </div>
            <div className='inputBox'>
                <label htmlFor='whatsapp Number'>Whatsapp Number</label>
                <input type='number' id='whatsapp Number' />
            </div>
            <div className='inputBox'>
                <label htmlFor='website url'>WebSite Url</label>
                <input type='text' id='website url' />
            </div>
            <div className='inputBox'>
                <label htmlFor='Facebook page link'>Facebook page link</label>
                <input type='text' id='Facebook page link' />
            </div>
            <div className='inputBox'>
                <label htmlFor='Facebook page link'>Instagram page link</label>
                <input type='text' id='Facebook page link' />
            </div>
            <div className='inputBox'>
                <label htmlFor='GST Number'>GST Number</label>
                <input type='number' id='GST Number' />
            </div> 
            <div className='inputBox'>
                <label htmlFor='password'>Password</label>
                <input type='text' id='password' />
            </div>
            <div className='inputBox'>
                <label htmlFor='password'>Confirm Password</label>
                <input type='text' id='password' />
            </div>
           </div>
           <h2 className='inputBox'>Upload contents</h2>
           <hr />
           <div className='secondForm'>
           <div className='inputBox'>
                <label htmlFor='startingPrice'>Starting price</label>
                <input type='number' id='startingPrice' />
            </div>
           <div className='inputBox'>
                <label htmlFor='maximumPrice'>Maximum price</label>
                <input type='number' id='maximumPrice' />
            </div>
           <div className='inputBox'>
                <label htmlFor='landscapeImage'>Upload landscape Image</label>
                <input type='file' className='fileInput' id='landscapeImage' />
            </div>
           <div className='inputBox'>
                <label htmlFor='firstImage'>Upload small Image</label>
                <input type='file' className='fileInput' id='firstImage' />
            </div>
           <div className='inputBox'>
                <label htmlFor='secondImage'>Upload small Image</label>
                <input type='file' className='fileInput' id='secondImage' />
            </div>
           <div className='inputBox'>
                <label htmlFor='thirdImage'>Upload small Image</label>
                <input type='file' className='fileInput' id='thirdImage' />
            </div>
           <div className='inputBox videoInput'>
                <label htmlFor='video'>Upload video</label>
                <input type='file' className='fileInput' id='video' />
            </div>
            <div className='inputBox'>
                <label htmlFor='overview'>Overview</label>
                <textarea id='overview' rows={4} cols={40}></textarea>
            </div>
            <div className='inputBox'>
                <label htmlFor='additionalInfo'>Additional Information</label>
                <textarea id='additionalInfo' rows={4} cols={40}></textarea>
            </div>
           </div>
           <div className='bottomSubmitBar'>
           <button type='submit' className='vendorSubmit'>Submit</button>
           </div>
      </form>
    </div>
  )
}

export default FirstForm
