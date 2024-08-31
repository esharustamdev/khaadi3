import React from 'react'

const MobNav = () => {
  return (
    <div>
      <div className='mob-logo'>
        <img
          src='https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwb33579b0/images/logo/logo.svg'
          alt=''
        />
      </div>
      <div className='mob-navbar'>
        <div className='mob-icons'>
          <i class='fa-solid fa-bars'></i>
          <ul className='mobdrop-down'>
            <li>
              <h2>Menu</h2>
            </li>
            <li className='rightarrow'>
              <a href=''>Sale</a>
              <i class='fa-solid fa-arrow-right'></i>
            </li>
            <li className='rightarrow'>
              <a href=''>New In</a>
              <i class='fa-solid fa-arrow-right'></i>
            </li>
            <li className='rightarrow'>
              <a href=''>Fabrics</a>
              <i class='fa-solid fa-arrow-right'></i>
            </li>
            <li className='rightarrow'>
              <a href=''>Ready To Wear</a>
              <i class='fa-solid fa-arrow-right'></i>
            </li>
            <li className='rightarrow'>
              <a href=''>Fragrances</a>
              <i class='fa-solid fa-arrow-right'></i>
            </li>
            <li className='rightarrow'>
              <a href=''>Home</a>
              <i class='fa-solid fa-arrow-right'></i>
            </li>
          </ul>
          <i class='fa-solid fa-house'></i>
          <i class='fa-solid fa-cart-shopping'></i>
          <i class='fa-solid fa-magnifying-glass'></i>
          <i class='fa-regular fa-user'></i>
        </div>
      </div>
    </div>
  )
}

export default MobNav
