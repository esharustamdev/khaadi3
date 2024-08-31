import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='divHeader'>
        <p>Shop upto 50% off on your Favourite item</p>
      </div>
      <div className='navbarContainer'>
        <div className='navLogo'>
          <img
            src='https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwb33579b0/images/logo/logo.svg'
            alt=''
          />
        </div>
        <div className='navLinks'>
          <ul>
            <li>
              <a href=''>Sale</a>
            </li>
            <li>
              <a href=''>NewIn</a>
            </li>
            <li>
              <a href=''>Fabrics</a>
            </li>
            <li>
              <a href=''>Ready To Wear</a>
            </li>
            <li>
              <a href=''>Fragrance</a>
            </li>
            <li>
              <a href=''>Home</a>
            </li>
          </ul>
        </div>
        <div className='navIcons'>
          <i class='fa-solid fa-magnifying-glass'></i>
          <i class='fa-regular fa-user'></i>
          <i class='fa-solid fa-heart'></i>
          <i class='fa-solid fa-truck-fast'></i>
        </div>
      </div>
    </>
  )
}

export default Navbar
