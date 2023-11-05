import React from 'react'
import Navbar from '../components/LandingPage/Navbar'
import Banner from '../components/CategoryPage/CPBanner'
import ProductSection from '../components/ProductPage/ProductSection'
import Footer from '../components/LandingPage/Footer'

function ExplorePage() {
  return (
    <div>
      <Navbar />
      <Banner heading="Explore" />
      <ProductSection />
      <Footer />
    </div>
  )
}

export default ExplorePage
