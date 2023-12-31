import React from "react";
import NavBar from "../Components/NavBar/Menu";
import {ContactUs} from '../Components/Contact Us/ContactUs'
const Contact =() =>{
    return(
        <div>
            <NavBar/>
            <div className="row">
                <ContactUs/>
                <div className="contact-us-img"></div>
            </div>

        </div>
    );

}
export default Contact