import React from 'react'
import Navbar from '../components/LandingPage/Navbar'
import Banner from '../components/CategoryPage/CPBanner'
import CPCategorySection from '../components/CategoryPage/CPCategorySection'
import Footer from '../components/LandingPage/Footer'
import GoToTop from '../components/GoToTop'

function VendorPage() {
  return (
    <div>
      <Navbar />
      <Banner heading="Vendor"/>
      <CPCategorySection />
      <Footer />
      <GoToTop />
    </div>
  )
}

export default VendorPage
