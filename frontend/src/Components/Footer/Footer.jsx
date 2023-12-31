import React from 'react'
import './Footer.css'
import logo from '../Assets/Logo_white.png'
import {unstable_renderSubtreeIntoContainer} from "react-dom";

export const Footer = () => {
    return (
        <>
            <div className={"footer-container"}>
                <div className={'footer-col'}>
                    <h2>Services</h2>
                    <hr/>
                    <ul>
                        <li><a href="/Mobiles">Mobiles</a></li>
                        <li><a href="/Laptops">Laptops</a></li>
                        <li><a href="/tv">TVs</a></li>
                    </ul>
                </div>
                <div className={'footer-col'}>
                    <h2>Information</h2>
                    <hr/>
                    <ul>
                        <li><a href="/About">About Us</a></li>
                        <li><a href="/Contact Us">Contact Us</a></li>
                    </ul>
                </div>
                <div className={'footer-col'}>
                    <img src={logo} alt=""/>
                </div>

            </div>
            <hr className={'line'}/>
            <p className="copyrights">El-Abd For Web Services 2023. All Rights Reserved ©</p>
        </>
    )
}
