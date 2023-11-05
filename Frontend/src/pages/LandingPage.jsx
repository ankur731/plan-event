import React from 'react'
import Navbar from '../components/LandingPage/Navbar'
import Banner from '../components/LandingPage/Banner'
import PopularCategory from '../components/LandingPage/PopularCategory'
import Why from '../components/LandingPage/Why'
import Slider from '../components/LandingPage/Slider'
import How from '../components/LandingPage/How'
import Vendor from '../components/LandingPage/Vendor'
import Footer from '../components/LandingPage/Footer'
import GoToTop from '../components/GoToTop'
import TestimonialSection from '../components/LandingPage/TestimonialSection'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <PopularCategory />
      <Slider />
      <Why />
      <How />
      <TestimonialSection />
      <Vendor />
      <Footer />
      <GoToTop />
    </div>
  )
}

export default LandingPage
