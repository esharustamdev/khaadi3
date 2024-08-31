import React from 'react'
import Navbar from '../components/Navbar'
import Banner from './Banner'
import Footer from '../components/Footer'
import MobNav from '../components/MobNav'

const Home = () => {
  return (
    <div>
      <div className='desktopNavbar'>
        <Navbar />
      </div>
      <div className='mobNavbar'>
        <MobNav />
      </div>
      <Banner />
      <Footer />
    </div>
  )
}

export default Home
