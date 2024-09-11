import React, { useState } from 'react'

const ProductUi = () => {
  const [input2, setInput2] = useState(false)
  const [input1, setInput1] = useState(false)
  // dropdownList
  const [list1, setList1] = useState(false)
  const [list2, setList2] = useState(false)
  const [list3, setList3] = useState(false)
  const [list4, setList4] = useState(false)
  const list1Func = () => {
    setList1(!list1)
  }
  const list2Func = () => {
    setList2(!list2)
  }
  const list3Func = () => {
    setList3(!list3)
  }
  const list4Func = () => {
    setList4(!list4)
  }
  // dropdownList
  const input2Func = () => {
    setInput2(!input2)
  }
  const input1Func = () => {
    setInput1(!input1)
  }
  return (
    <>
      <div className='productuiHead'>
        <p>Home</p>
        <i class='fa-solid fa-arrow-right'></i>
        <h3>New In</h3>
      </div>
      <div className='productuiHeadLogos'>
        <div className='productuiHeadLogo1'>
          <div className='productuiheadlogo1img'>
            <img src='imges/pic1.webp' alt='' />
          </div>
          <div className='productuiPara'>
            <p>Excusivliy Online</p>
          </div>
        </div>
        <div className='productuiHeadLogo1'>
          <div className='productuiheadlogo1img'>
            <img src='imges/pic2.webp' alt='' />
          </div>
          <div className='productuiPara'>
            <p>Best Sellers</p>
          </div>
        </div>
        <div className='productuiHeadLogo1'>
          <div className='productuiheadlogo1img'>
            <img src='imges/pic3.webp' alt='' />
          </div>
          <div className='productuiPara'>
            <p>Just In : Sale</p>
          </div>
        </div>
        <div className='productuiHeadLogo1'>
          <div className='productuiheadlogo1img'>
            <img src='imges/pic5.webp' alt='' />
          </div>
          <div className='productuiPara'>
            <p>Just in 20%</p>
          </div>
        </div>
        <div className='productuiHeadLogo2'>
          <div className='productuiheadlogo1img'>
            <img src='imges/pic4.webp' alt='' />
          </div>
          <div className='productuiPara'>
            <p>Just in : 30%</p>
          </div>
        </div>
        <div className='productuiHeadLogo3'>
          <div className='productuiheadlogo1img'>
            <img src='imges/pic6.webp' alt='' />
          </div>
          <div className='productuiPara'>
            <p>Just in : 40%</p>
          </div>
        </div>
      </div>
      <div className='productUiCenterArea'>
        <div className='productUiCenterAreaLeft'>
          <div className='productUiCenterAreaLeftDiv1'>
            <div className='productUiLeftDiv1Input'>
              <input type='text' placeholder='Filter by' />
            </div>
            <div className='productUiLeftDiv1Icons'>
              <i class='fa-solid fa-angle-down' onClick={input1Func}></i>
            </div>
            <div
              className={
                input1
                  ? 'productUiLeftDropDown active'
                  : 'productUiLeftDropDown'
              }
            >
              <div className='productUiLeftDropDownDiv1'>
                <div className='productUiLeftDropDownDiv1body'>
                  <p>Category</p>
                  <i class='fa-solid fa-angle-down' onClick={list1Func}></i>
                </div>
                <div
                  className={
                    list1
                      ? 'productUiLeftDropdownDiv1list active'
                      : 'productUiLeftDropdownDiv1list'
                  }
                >
                  <li>
                    <input type='checkbox' />
                    <p>Kurta()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>3 piece()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>Pants()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>Dupatta()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>Shalwar()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>Shirt()</p>
                  </li>
                </div>
              </div>
              <hr />

              <div className='productUiLeftDropDownDiv1'>
                <div className='productUiLeftDropDownDiv1body'>
                  <p>Price</p>
                  <i class='fa-solid fa-angle-down' onClick={list2Func}></i>
                </div>
                <div
                  className={
                    list2
                      ? 'productUiLeftDropdownDiv1list active'
                      : 'productUiLeftDropdownDiv1list'
                  }
                >
                  <li>
                    <input type='checkbox' />
                    <p>Summer Collection()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>Spring Collection()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>Autumn Collection()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>Winter Collection()</p>
                  </li>
                </div>
              </div>
              <hr />
              <div className='productUiLeftDropDownDiv1'>
                <div className='productUiLeftDropDownDiv1body'>
                  <p>Size</p>
                  <i class='fa-solid fa-angle-down'></i>
                </div>
              </div>
              <hr />
              <div className='productUiLeftDropDownDiv1'>
                <div className='productUiLeftDropDownDiv1body'>
                  <p>Color</p>
                  <i class='fa-solid fa-angle-down'></i>
                </div>
              </div>
              <hr />
              <div className='productUiLeftDropDownDiv1'>
                <div className='productUiLeftDropDownDiv1body'>
                  <p>Fabric</p>
                  <i class='fa-solid fa-angle-down' onClick={list3Func}></i>
                </div>
                <div
                  className={
                    list3
                      ? 'productUiLeftDropdownDiv1list active'
                      : 'productUiLeftDropdownDiv1list'
                  }
                >
                  <li>
                    <input type='checkbox' />
                    <p>Cambric()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>Lawn()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>Dobby()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>Cotton Viscose()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>messuri()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>Ripple Crinkle()</p>
                  </li>
                </div>
              </div>
              <hr />
              <div className='productUiLeftDropDownDiv1'>
                <div className='productUiLeftDropDownDiv1body'>
                  <p>Discount</p>
                  <i class='fa-solid fa-angle-down' onClick={list4Func}></i>
                </div>
                <div
                  className={
                    list4
                      ? 'productUiLeftDropdownDiv1list active'
                      : 'productUiLeftDropdownDiv1list'
                  }
                >
                  <li>
                    <input type='checkbox' />
                    <p>70% off()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>50% off()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>40% off()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>30% off()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>20% off()</p>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <p>Shirt()</p>
                  </li>
                </div>
              </div>
              <hr />
              <div className='productUiLeftDropDownDiv1'>
                <div className='productUiLeftDropDownDiv1body'>
                  <p>Compaign</p>
                  <i class='fa-solid fa-angle-down'></i>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className='productUiCenterAreaLeftDiv2'>
            <div className='productUiLeftDiv2Input'>
              <input type='text' placeholder='New Arrival' />
            </div>
            <div className='productUiLeftDiv2Icons'>
              <i class='fa-solid fa-angle-down' onClick={input2Func}></i>
            </div>
            <div
              className={
                input2
                  ? 'productUiLeftDiv2Dropdown active'
                  : 'productUiLeftDiv2Dropdown '
              }
            >
              <div className='productUiLeftDiv2List'>
                <li>Top Sellers</li>
                <li>Recommended</li>
                <li>Most Popular</li>
                <li>New Arrival</li>
                <li>Price High To Low</li>
                <li>Price Low To High</li>
              </div>
            </div>
          </div>

          <div className='productUiCenterAreaLeftDiv3'>
            <p>5124 items</p>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className='ProductUiSection'>
        <div className='productUiSectionDiv1'>
          <div className='productUiSectionImg'>
            <img src='imges/section1.webp' alt='' />
            <img
              src='imges/section2.webp '
              className='productUiSectionImg1'
              alt=''
            />
            <div className='productUiSectionIcon'>
              <i class='fa-regular fa-heart'></i>
              <i class='fa-solid fa-bag-shopping'></i>
            </div>
          </div>

          <div className='ProductUiSectionBody'>
            <p>Kurta| Embroided</p>
            <h3>PKR 4800</h3>
          </div>
          <div className='productUiButton'>
            <div className='productUiBtn1'>
              <button>New In</button>
            </div>
            <div className='productUiBtn2'>
              <button>20% off</button>
            </div>
          </div>
        </div>
        <div className='productUiSectionDiv1'>
          <div className='productUiSectionImg'>
            <img src='imges/section1.webp' alt='' />
            <img
              src='imges/section2.webp '
              className='productUiSectionImg1'
              alt=''
            />
            <div className='productUiSectionIcon'>
              <i class='fa-regular fa-heart'></i>
              <i class='fa-solid fa-bag-shopping'></i>
            </div>
          </div>
          <div className='ProductUiSectionBody'>
            <p>Kurta| Embroided</p>
            <h3>PKR 4800</h3>
          </div>
          <div className='productUiButton'>
            <div className='productUiBtn1'>
              <button>New In</button>
            </div>
            <div className='productUiBtn2'>
              <button>20% off</button>
            </div>
          </div>
        </div>
        <div className='productUiSectionDiv1'>
          <div className='productUiSectionImg'>
            <img src='imges/section1.webp' alt='' />
            <img
              src='imges/section2.webp '
              className='productUiSectionImg1'
              alt=''
            />
            <div className='productUiSectionIcon'>
              <i class='fa-regular fa-heart'></i>
              <i class='fa-solid fa-bag-shopping'></i>
            </div>
          </div>
          <div className='ProductUiSectionBody'>
            <p>Kurta| Embroided</p>
            <h3>PKR 4800</h3>
          </div>
          <div className='productUiButton'>
            <div className='productUiBtn1'>
              <button>New In</button>
            </div>
            <div className='productUiBtn2'>
              <button>20% off</button>
            </div>
          </div>
        </div>
        <div className='productUiSectionDiv1'>
          <div className='productUiSectionImg'>
            <img src='imges/section1.webp' alt='' />
            <img
              src='imges/section2.webp '
              className='productUiSectionImg1'
              alt=''
            />
            <div className='productUiSectionIcon'>
              <i class='fa-regular fa-heart'></i>
              <i class='fa-solid fa-bag-shopping'></i>
            </div>
          </div>
          <div className='ProductUiSectionBody'>
            <p>Kurta| Embroided</p>
            <h3>PKR 4800</h3>
          </div>
          <div className='productUiButton'>
            <div className='productUiBtn1'>
              <button>New In</button>
            </div>
            <div className='productUiBtn2'>
              <button>20% off</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductUi
