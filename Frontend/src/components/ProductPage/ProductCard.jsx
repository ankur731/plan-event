import React from 'react'
import "./ProductCard.css"
import MessageIcon from '@mui/icons-material/Message';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';


function ProductCard(props) {

    const navigate = useNavigate();
  
    // const [items, setItems] = useState([]);

    // const {category} = useParams();
    
   
    //  useEffect(() => {
    //    const getPosts = async()=>{
    //      const res = await fetch(
    //        `http://localhost:8000/${category}/${props.id}`
    //      );
    //      const data = await res.json();
    //      setItems(data);
    //    }
    //    getPosts();
    //  }, [category])
    

    function handleClick() {
      navigate(`/${props.category.toLowerCase()}/${props.id}`);
    }
  return (
    <div className='productCard' onClick={handleClick}>
    <button className='rating'>5.0</button>
        <div className='productImg'>
            <img src={require("../../images/pexels-czapp-árpád-16945241.jpg")} alt='productDetails' />
        </div>
        <div className='productDetail'>
                <div className='productDetails-TopBar'>
                    <h1>{props.name}</h1>
                    <MessageIcon />
                </div>
                <div className='productDetails-location'>
                <LocationOnIcon  fontSize='small'/> 
                <h4>Maldives</h4>
                </div>
                <p>$5000</p>
                <button>Know More</button>
        </div>
    </div>
  )
}

export default ProductCard
