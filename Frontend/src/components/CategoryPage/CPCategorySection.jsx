import React, { useEffect, useState } from 'react'
import "./CPCategorySection.css"
import CPCategoryCard from './CPCategoryCard'
import ReactPaginate from 'react-paginate'

function CPCategorySection() {

  const [items, setItems] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(()=>{
      const getPosts = async()=>{
        const res = await fetch(
          "http://localhost:8000/category"
        );
        const data = await res.json();
        console.log(data)
        setItems(data);

      }
      getPosts();
  },[])

 

  const handlePageClick = async (data) => {
    let currentPage = data.selected;
        currentPage=currentPage*6;
        setCurrent(currentPage);
 }
  return (<>
    <div className='cpCategorySection'>
    {items.filter((it, i) => i < current+6&&i>=current ).map((item, index) => {
      return  <CPCategoryCard key={index} category={item}/>
    })}
   
    </div>
    <ReactPaginate 
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      pageCount={Math.ceil(items.length/6)}
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

      {/* <CPCategoryCard />
      <CPCategoryCard />
      <CPCategoryCard />
      <CPCategoryCard />
      <CPCategoryCard />
      <CPCategoryCard />
      <CPCategoryCard />
      <CPCategoryCard />
      <CPCategoryCard /> */}
      </>
  )
}

export default CPCategorySection
