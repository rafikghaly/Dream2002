import React from 'react'
import user_icon from "../Assets/user.png";
import email_icon from "../Assets/email.png";

export const ContactUs = () => {
    return (
        <div className='inputs'>
            <h1>Contact Us</h1>
            <form action="">
                <div className="inputs">

                    <div className="input">
                        <img src={user_icon} alt=""/>
                        <input type="text" placeholder='Name'/>
                    </div>

                    <div className="input">
                        <img src={email_icon} alt=""/>
                        <input type="email" placeholder='E-mail'/>
                    </div>

                    <textarea rows='50' cols='50' placeholder='Message'/>

                    <div className="submit">Send Message</div>
                </div>
            </form>
        </div>
    )
}
