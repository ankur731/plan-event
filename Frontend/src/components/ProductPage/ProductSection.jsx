import React, { useEffect, useState } from 'react'
import "./ProductSection.css";
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ProductCard from './ProductCard';
import ReactPaginate from 'react-paginate'
import { useParams } from 'react-router-dom';


function ProductSection() {
  const [items, setItems] = useState([]);
  const [current, setCurrent] = useState(0);
  const [filterDropdown, setFilterDropdown] = useState(false);

  const { category } = useParams();


  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(
        `http://localhost:8000/${category}`
      );
      const data = await res.json();
      setItems(data);
    }
    getPosts();
  }, [category])


  const handlePageClick = async (data) => {
    let currentPage = data.selected;
    currentPage = currentPage * 3;
    setCurrent(currentPage);
  }
  const toggleFilterDropdown = ()=>{
    setFilterDropdown(!filterDropdown);
  }
  return (
    <>
      <div className='filterBar'>
        <div className='filterMenu'>
          <button onClick={toggleFilterDropdown}>Filter <FilterAltIcon /></button>
          <div style={filterDropdown?{display:"block"}:{display:"none"}} className='filterDropdown'>
            City <input type='text'/>
            <button type='submit'>Apply</button>
          </div>
        </div>
        <div className='sortMenu'>
          <button>Sort <SortIcon /></button>
        </div>
      </div>
      <div className='productCardsSection'>

        {items.filter((it, i) => i < current + 3 && i >= current).map((item, index) => {
          return <ProductCard key={index} id={item._id} category={item.categorySelected} name={item.categoryName} />
        })}
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={Math.ceil(items.length / 3)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link '}
        activeClassName={'active'}

      />
    </>
  )
}

export default ProductSection
