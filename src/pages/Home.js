import React from 'react'
import Navbar from '../components/Navbar'
import Banner from './Banner'
import Footer from '../components/Footer'
import MobNav from '../components/MobNav'
import SingleP from './SingleP'
import ProductUi from './ProductUi'
import Shipping from './Shipping'
import SingleMob from './SingleMob'

const Home = () => {
  return (
    <div>
      <div className='desktopNavbar'>
        <Navbar />
      </div>
      <div className='mobNavbar'>
        <MobNav />
      </div>
      {/* <ProductUi /> */}
      <div className='desktopSingle'>
        <SingleP />
      </div>

      <div className='mobSingle'>
        <SingleMob />
      </div>
      {/* <Banner /> */}
      {/* <Shipping /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default Home
