import React from "react";
import NavBar from "../Components/NavBar/Menu";
import aboutUs from "../Components/Assets/aboutUs.png"
import './page.css'

const About =() =>{
    return(
        <div>

            <NavBar/>
            <div className="aboutus"><h3 className="hed">About Us</h3></div>
            <p className="pr">Welcome to <b><em>Mobilaty</em></b>, where cutting-edge technology meets
                unparalleled service. With a passion for innovation and a commitment
                to customer satisfaction, we take pride in providing a curated selection
                of top-of-the-line mobile phones and laptops. Our journey began with a vision
                to redefine the way you experience technology, and today, we stand as a trusted
                destination for high-quality electronic devices. From the latest smartphone
                releases to powerful laptops that empower your digital lifestyle, we strive
                to bring you the best in the world of electronics. Explore our range, discover
                the future, and join us on a journey of excellence in every device.</p>

            <img src={aboutUs} alt="AboutUs" className="photo"/>


        </div>
    );

}
export default About