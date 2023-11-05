import React from 'react'
import Navbar from '../components/LandingPage/Navbar'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import Overview from '../components/ProductDetail/Overview'
import FaqContainer from '../components/ProductDetail/FaqContainer'
import Similar from '../components/ProductDetail/Similar'
import Footer from '../components/LandingPage/Footer'
import GoToTop from '../components/GoToTop'



function ProductDetailPage() {
  return (
    <div style={{backgroundColor:"#f1f1f1"}}>
      <Navbar />
      <ProductDetail />
      <Overview />
      <FaqContainer />
      <Similar />
      <Footer />
      <GoToTop />
    </div>
  )
}

export default ProductDetailPage
