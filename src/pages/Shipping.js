import React from 'react'

const Shipping = () => {
  return (
    <>
      <div className='shippingCont'>
        <div className='shippingDiv1'>
          <div className='shippingIcon'>
            <i class='fa-solid fa-truck-fast'></i>
          </div>
          <div className='shippingBody'>
            <h3>Shipping charges</h3>
            <p>Starting from Rs.120</p>
          </div>
        </div>
        <div className='shippingDiv1'>
          <div className='shippingIcon'>
            <i class='fa-regular fa-heart'></i>
          </div>
          <div className='shippingBody'>
            <h3>Crafted with Care</h3>
            <p>Curated with you in mind</p>
          </div>
        </div>
        <div className='shippingDiv1'>
          <div className='shippingIcon'>
            <i class='fa-solid fa-location-dot'></i>
          </div>
          <div className='shippingBody'>
            <h3>Find Stores</h3>
            <p>Stores contrywide across Pakistan Uk,UAE,US</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shipping
