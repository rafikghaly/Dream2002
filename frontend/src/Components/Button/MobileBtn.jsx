import React from 'react'
import mobile from '../Assets/mobile.png'
import './CategoryBtn.css'

const MobileBtn = () => {
  return (
    <div className='button'>
        <img src={mobile} alt="" />
        <p>Mobile</p>
    </div>
  )
}

export default MobileBtn
