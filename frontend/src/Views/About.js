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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus adipisci assumenda debitis dolores eveniet incidunt
                    minima nemo nesciunt officiis omnis pariatur porro recusandae
                    saepe sequi temporibus veniam veritatis, vero voluptatibus?
                    </p>
                </div>

                <div className="about-us-image"></div>
            </div>
        </div>
    );

}
export default About