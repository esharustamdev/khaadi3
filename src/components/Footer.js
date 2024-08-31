import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='footerCont'>
        <div className='footerDiv'>
          <h3>Help</h3>
          <li>Track Your Order</li>
          <li>Terms And Conditions</li>
          <li>Privacy Policy</li>
        </div>
        <div className='footerDiv'>
          <h3>Customer Support</h3>
          <li>Customer Services</li>
          <li>Store Locator</li>
          <li>Disclaimer</li>
          <li>Delivery</li>
          <li>Exchange</li>
          <li>Faqs</li>
        </div>
        <div className='footerDiv'>
          <h3>More For Khaadi</h3>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Blogs</li>
        </div>
        <div className='footerDiv1'>
          <h3>Our Socials</h3>
          <i class='fa-brands fa-facebook'></i>
          <i class='fa-brands fa-instagram'></i>
          <i class='fa-brands fa-linkedin'></i>
        </div>
      </div>
      <hr />
      <div className='footerEnd'>
        <div className='footerEndDiv1'>
          <p>100% Save Checkout</p>
          <img
            src='https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw568e0aba/images/FooterImages/0.0-0.0-0.0-0.0-PK-2024-08-20-updated-1.svg'
            alt=''
          />
        </div>
        <div className='footerEndDiv2'>
          <p>Secured By</p>
          <img
            src='https://seal.godaddy.com/images/3/en/siteseal_gd_3_h_l_m.gif'
            alt=''
          />
        </div>
        <div className='footerEndDiv3'>
          <img
            src='https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw6994d6b6/images/FooterImages/Khaadi-Logo.png'
            alt=''
          />
          <p>
            Copyright © 2024 Khaadi Corporation Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
