import React from 'react'
import mobile from '../Assets/mobile.png'
import './CategoryBtn.css'

const MobileBtn = (props) => {
    const btn=props.name
    const photo = require(`../Assets/${btn}.png`);
  return (
    <div className='button'>
        <img src={photo} alt="" />
        <p>{btn}</p>
    </div>

  )
}

export default MobileBtn
