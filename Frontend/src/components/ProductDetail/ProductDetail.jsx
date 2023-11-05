import React, { useEffect, useState } from 'react'
import "./ProductDetail.css"
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useParams } from 'react-router-dom';

function ProductDetail() {

    const [items, setItems] = useState([]);

    const {category, id} = useParams();

    useEffect(()=>{
        
        const getPosts = async()=>{
          const res = await fetch(
            `http://localhost:8000/:${category}/${id}`
          );
          const data = await res.json();
          setItems(data);
        }
        getPosts();
    },[id, category])
  

    return (
        <div className={'productDetailContainer'}>
            <div className='productDetailContainer-header'>
                <div className='productDetailContainer-header-top'>
                    <h3>{items.categoryName}</h3>
                    <div className='productDetailContainer-icons'>
                        <CallIcon className='productDetailIcon'/>
                        <WhatsAppIcon className='productDetailIcon'/>
                    </div>
                </div>
                <h6>Crawford Market, Mumbai</h6>
                <div className='productDetailContainer-header-bottom'>
                    <p>$4000-5000</p>
                    <button>Message Us</button>
                </div>
            </div>
            <div className='productDetailContainer-bottom'>
                <div className='productDetailContainer-bottom-mainImg'>
                    <img src={require("../../images/pexels-czapp-árpád-16945241.jpg")} alt='mainImg' />
                </div>
                <div className='productDetailContainer-bottom-images'>
                        {/* <img src={image({
          type: items.image?.contentType,
          data: items.image1,
        })} alt='mainsmallimg' /> */}
                        {/* <img src={`http://localhost:8000/${items.categorySelected}/${items._id}/${items.image1}`} alt='mainsmallimg' /> */}
                        <img src={require("../../images/pexels-fabian-wiktor-994605.jpg")} alt='mainsmallimg' />
                        <img src={require("../../images/pexels-fabian-wiktor-994605.jpg")} alt='mainsmallimg' />
                        <img src={require("../../images/pexels-fabian-wiktor-994605.jpg")} alt='mainsmallimg' />
                        <video 
   controls  loop   >
     <source src={require("../../videos/video1.mp4")}  type="video/mp4"></source>
  </video>                </div>
            </div>
        </div>
    )
}

export default ProductDetail
