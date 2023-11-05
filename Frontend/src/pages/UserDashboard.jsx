import React from 'react'
import Navbar from '../components/LandingPage/Navbar'
import Banner from '../components/CategoryPage/CPBanner'
import Footer from '../components/LandingPage/Footer'
import GoToTop from '../components/GoToTop'
import UserContainer from '../components/UserDashboard/UserContainer'

function UserDashboard() {
  return (
    <div>
      <Navbar />
      <Banner heading="Account" />
      <UserContainer />
      <Footer />
      <GoToTop />
    </div>
  )
}

export default UserDashboard
