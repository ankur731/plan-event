import React from 'react'
import Navbar from '../components/LandingPage/Navbar'
import PPBanner from '../components/ProductPage/PPBanner'
import ProductSection from '../components/ProductPage/ProductSection'
import Footer from '../components/LandingPage/Footer'
import GoToTop from '../components/GoToTop'

function ProductsPage() {
  return (
    <div>
      <Navbar />
      <PPBanner />
      <ProductSection />
      <Footer />
      <GoToTop />
    </div>
  )
}

export default ProductsPage
