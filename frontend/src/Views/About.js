import React from "react";
import NavBar from "../Components/NavBar/Menu";
import aboutUs from "../Components/Assets/about us.jpg"
import './page.css'

const About =() =>{
    return(
        <div>
            <NavBar/>
            <div className="row">
                <div className="about-us-description">
                    <h1>About Us</h1>
                    <hr/>
                    <p>
                        Welcome to <b><em>Dream 2002</em></b>, where cutting-edge technology meets
                        unparalleled service. With a passion for innovation and a commitment
                        to customer satisfaction, we take pride in providing a curated selection
                        of top-of-the-line mobile phones and laptops. Our journey began with a vision
                        to redefine the way you experience technology, and today, we stand as a trusted
                        destination for high-quality electronic devices. From the latest smartphone
                        releases to powerful laptops that empower your digital lifestyle, we strive
                        to bring you the best in the world of electronics. Explore our range, discover
                        the future, and join us on a journey of excellence in every device.
                    </p>
                </div>

                <div className="about-us-image"></div>
            </div>
        </div>
    );

}
export default About