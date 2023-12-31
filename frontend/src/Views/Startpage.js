import React from "react";
import LoginSignup from "../Components/LoginSignup/LoginSignup";
import main_logo from '../Components/Assets/Logo.png'
import './page.css'
const Startpage=() => {
    return(
        <div className="Homepage-container">
            <img className={'main-logo'} src={main_logo} alt=""/>
            <LoginSignup />
        </div>
    )
}
export default Startpage