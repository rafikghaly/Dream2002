import React from 'react'
import './Menu.css'
import logo from '../Assets/logo.gif'
const Menu = () => {
    return (
        <nav>
            <div className="logo-container">
                <img className='Logo' src={logo} alt='mobilaty logo'/>
                <a className='Brand' href={'/'}>Mobilaty</a>
            </div>

            <div className="links">
                <ul>
                    <li><a href={'/about'}>About</a></li>
                    <li><a href={'/contact'}>Contact</a></li>
                    <li><a href={'/mobile'}>Mobiles</a></li>
                    <li><a href={'/laptop'}>Laptops</a></li>
                </ul>
            </div>

        </nav>
    )
}

export default Menu
