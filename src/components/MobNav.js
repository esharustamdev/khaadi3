import React, { useState } from 'react'

const MobNav = () => {
  const [saleMenu, setSaleMenu] = useState(false)
  const [newInMenu, setNewInMenu] = useState(false)
  const [FabricsMenu, setFabricsMenu] = useState(false)
  const [ReadyToWearMenu, setReadyToWearMenu] = useState(false)
  const [FragrancesMenu, setFragrancesMenu] = useState(false)
  const [HomeMenu, setHomeMenu] = useState(false)
  const saleMenuFunc = () => {
    setSaleMenu(!saleMenu)
  }
  const NewInMenuFunc = () => {
    setNewInMenu(!newInMenu)
  }
  const FabricsMenuFunc = () => {
    setFabricsMenu(!FabricsMenu)
  }
  const ReadyToWearMenuFunc = () => {
    setReadyToWearMenu(!ReadyToWearMenu)
  }
  const FragranceMenuFunc = () => {
    setFragrancesMenu(!FragrancesMenu)
  }
  const HomeMenuFunc = () => {
    setHomeMenu(!HomeMenu)
  }
  const [mobMenu, setmobMenu] = useState(false)
  const mobMenuFunc = () => {
    setmobMenu(!mobMenu)
  }
  return (
    <div>
      <div className='mob-logo'>
        <img
          src='https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwb33579b0/images/logo/logo.svg'
          alt=''
        />
      </div>
      <hr />
      <div className='mob-navbar'>
        <div className='mob-icons'>
          <i class='fa-solid fa-bars' onClick={mobMenuFunc}></i>

          <ul className={mobMenu ? 'mobdrop-down active' : 'mobdrop-down'}>
            <li className='menuIcon'>
              <i class='fa-solid fa-angle-up' onClick={mobMenuFunc}></i>
            </li>
            <li>
              <h2>Menu</h2>
            </li>
            <li className='rightarrow'>
              <a href=''>Sale</a>
              <i class='fa-solid fa-arrow-right' onClick={saleMenuFunc}></i>
            </li>
            {/* saleMenuBar */}
            <div className={saleMenu ? 'saleMenuList active' : 'saleMenuList'}>
              <div className='saleMenuListHeading'>
                <i class='fa-solid fa-arrow-left' onClick={saleMenuFunc}></i>
                <h3>Sale</h3>
              </div>
              <div className='saleMenuListLinks'>
                <li>Fabrics</li>
                <li>Ready To Wear</li>
                <li>Home</li>
                <li>Fragrance</li>
              </div>
            </div>
            {/* saleMenuBar */}
            <li className='rightarrow'>
              <a href=''>New In</a>
              <i class='fa-solid fa-arrow-right' onClick={NewInMenuFunc}></i>
            </li>
            {/* MenuNewIn*/}
            <div
              className={newInMenu ? 'MenuNewInMain active' : 'MenuNewInMain'}
            >
              <div className='saleMenuNewInHeading'>
                <i class='fa-solid fa-arrow-left' onClick={NewInMenuFunc}></i>
                <h3>NewIn</h3>
              </div>
              <div className='MenuNewInList'>
                <li>Ready To Wear</li>
              </div>
            </div>
            {/* MenuNewIn */}
            <li className='rightarrow'>
              <a href=''>Fabrics</a>
              <i class='fa-solid fa-arrow-right' onClick={FabricsMenuFunc}></i>
            </li>
            {/* Fabrics */}
            <div
              className={
                FabricsMenu ? 'MenuFabricsMain active' : 'MenuFabricsMain'
              }
            >
              <div className='MenuFabricsHeading'>
                <i class='fa-solid fa-arrow-left' onClick={FabricsMenuFunc}></i>
                <h3>Fabrics</h3>
              </div>
              <div className='MenuFabricsList'>
                <h2>Essentials</h2>
                <li>2 Piece</li>
                <li>3 Piece</li>
                <h2>Signature</h2>
                <li>3 Piece</li>
              </div>
            </div>
            {/* Fabric */}
            <li className='rightarrow'>
              <a href=''>Ready To Wear</a>
              <i
                class='fa-solid fa-arrow-right'
                onClick={ReadyToWearMenuFunc}
              ></i>
            </li>
            {/* Ready To Wear */}
            <div
              className={
                ReadyToWearMenu ? 'readyToWearMain active' : 'readyToWearMain'
              }
            >
              <div className='readyToWearHeading'>
                <i
                  class='fa-solid fa-arrow-left'
                  onClick={ReadyToWearMenuFunc}
                ></i>
                <h3>Ready To Wear</h3>
              </div>
              <div className='readyToWearList'>
                <h3>Essentails</h3>
                <li>Tailored 3 piece</li>
                <li>Kurta</li>
                <li>Pants</li>
                <li>Shalwar</li>
                <li>Dupatta</li>
                <li>Chaadar</li>
                <h3>Signature</h3>
                <li>Tailored 3 piece</li>
                <li>Kurta</li>
                <li>Pants</li>
                <li>Shalwar</li>
                <li>Dupatta</li>
                <h3>Casuals</h3>
                <li>Co-ord Sets</li>
                <li>Shirts</li>
                <li>T-shirts</li>
                <li>Blouse</li>
                <li>Tunic</li>
                <li>Maxi Dress</li>
                <li>Trousers</li>
                <li>Jeans</li>
                <li>Tank Top</li>
                <h3>Smart Casuals</h3>
                <li>Shirt</li>
                <li>T-Shirt</li>
                <li>Blouse</li>
                <li>Maxi Dress</li>
                <li>Trousers</li>
              </div>
            </div>
            {/* Ready To Wear */}
            <li className='rightarrow'>
              <a href=''>Fragrances</a>
              <i
                class='fa-solid fa-arrow-right'
                onClick={FragranceMenuFunc}
              ></i>
            </li>
            {/* Fragrances */}
            <div
              className={
                FragrancesMenu ? 'fragrancesMain active' : 'fragrancesMain'
              }
            >
              <div className='fragrancesMainHeading'>
                <i
                  class='fa-solid fa-arrow-left'
                  onClick={FragranceMenuFunc}
                ></i>
                <h3>Fragrances</h3>
              </div>
              <div className='fragrancesList'>
                <li>Body Mist</li>
                <li>Eau De Parfum</li>
              </div>
            </div>
            {/* Fragrances */}
            <li className='rightarrow'>
              <a href=''>Home</a>
              <i class='fa-solid fa-arrow-right' onClick={HomeMenuFunc}></i>
            </li>
            {/* Home */}
            <div className={HomeMenu ? 'homeMain active' : 'homeMain'}>
              <div className='homeMainHeading'>
                <i class='fa-solid fa-arrow-left' onClick={HomeMenuFunc}></i>
                <h3>Home</h3>
              </div>
              <div className='homeMainList'>
                <li>Coaster</li>
                <li>Cushion Cover</li>
                <li>Envelops</li>
                <li>Hot Plate</li>
                <li>Table Mat</li>
                <li>Table Runner</li>
              </div>
            </div>
            {/* Home */}
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
