import React from 'react'

const SingleP = () => {
  return (
    <>
      <div className='singlepHead'>
        <div className='singlephead1'>
          <p>Home</p>
          <i class='fa-solid fa-arrow-right'></i>
        </div>
        <div className='singlephead1'>
          <p>Ready To Wear</p>
          <i class='fa-solid fa-arrow-right'></i>
        </div>
        <div className='singlephead1'>
          <p>Essentials</p>
          <i class='fa-solid fa-arrow-right'></i>
        </div>
        <div className='singlephead1'>
          <p>Tailored 3 piece</p>
          <i class='fa-solid fa-arrow-right'></i>
        </div>
      </div>
      <div className='singleContainer'>
        <div className='singleLeft'>
          <div className='singleLeftimg'>
            <img
              src='https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw3003b200/images/hi-res/bdo240438st_black_2.jpg?sw=800&sh=1200'
              alt=''
            />
          </div>
          <div className='singleLeftimg'>
            <img
              src='https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwb5379bfb/images/hi-res/bdo240438st_black_3.jpg?sw=800&sh=1200'
              alt=''
            />
          </div>
          <div className='singleLeftimg'>
            <img
              src='https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw192a9831/images/hi-res/bdo240438st_black_4.jpg?sw=800&sh=1200'
              alt=''
            />
          </div>
          <div className='singleLeftimg'>
            <img
              src='https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw192a9831/images/hi-res/bdo240438st_black_4.jpg?sw=800&sh=1200'
              alt=''
            />
          </div>
        </div>
        <div className='singleCenter'>
          <div className='singleCenterimg'>
            <img
              src='https://pk.khaadi.com/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw17c49b65/images/hi-res/bdo240438st_black_5.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='singleRight'>
          <div className='singleRHeading'>
            <p>Dobby|Embroided</p>
            <h1>Tailored 3 Piece</h1>
            <h3>PKR 9,600</h3>
            <p>SKU: BDO240438ST</p>
          </div>
          <div className='singleRButton'>
            <h3>Quantity</h3>
            <div className='singleRbtnbtn'>
              <div className='singleRbtn'>
                <button>-</button> <div> 1 </div> <button>+</button>
              </div>
            </div>
          </div>
          <hr />
          <div className='singleRSize'>
            <div className='singleRsizeDiv1'>
              <h3>size</h3>
              <span>In stock</span>
            </div>
            <div className='singleRsizebtn'>
              <button>10</button>
              <button>12</button>
              <button>14</button>
              <button>16</button>
            </div>
          </div>
          <div className='singleRmainButton'>
            <button>Add To Bag</button>
          </div>
          <div className='singleRDetails'>
            <h3>Details</h3>
            <div className='singleRdrtailsDiv1'>
              <h3>Top Fabric:</h3>
              <p>Printed Embroidered Dobby | 100% Cotton</p>
            </div>
            <div className='singleRdrtailsDiv1'>
              <h3>Bottom Fabric:</h3>
              <p>Dyed Cambric | 100% Cotton</p>
            </div>
            <div className='singleRdrtailsDiv1'>
              <h3>Dupatta Fabric: </h3>
              <p>Printed Cationic Crinkle Chiffon | 100% Polyester</p>
            </div>
            <div className='singleRdrtailsDiv1'>
              <h3>Sleeve Length:</h3>
              <p>Full</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleP
