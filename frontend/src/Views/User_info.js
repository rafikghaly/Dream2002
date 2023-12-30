import React from "react";
import NavBar from "../Components/NavBar/Menu";

import email_icon from "../Components/Assets/email.png";
import './page.css'
import user_icon from "../Components/Assets/user.png";
import location from "../Components/Assets/location.png";
const User_info =() =>{
    return (

        <div>
            <NavBar/>

            <div className='userinfo'>
                <h1 className="he">User Info</h1>

                <div className="inputs">

                    <div className="info">
                        <img src={user_icon} alt=""/>
                        <input type="text" readOnly={true}/>
                        <button className="edit">Edit</button>
                    </div>

                    <div className="info">
                        <img src={email_icon} alt=""/>
                        <input type="email" readOnly={true}/>
                        <button className="edit">Edit</button>
                    </div>

                    <div className="info">
                        <img src={location} alt=""/>
                        <input type="text" readOnly={true}/>
                    </div>


                </div>


            </div>

        </div>
    );

}
export default User_info