import React, { useState } from 'react'
import user_icon from "../Assets/user.png";
import email_icon from "../Assets/email.png";
import axios from 'axios'

export const ContactUs = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [feedback,setMessage] = useState("");

    function ContactUsHandle(event){
        event.preventDefault();
        axios.post('http://localhost:4111/contactUs',{name,email,feedback})
        .then(res => {
            if (res.data === 'Feedback Sent'){
                alert("Feedback Sent")
            }
            else if (res.data === 'Fill empty fields'){
                alert("Fill empty fields")
            }
        })
        .catch(err =>console.log(err));
      }

    return (
        <div className='inputs'>
            <h1>Contact Us</h1>
            <form onSubmit={ContactUsHandle}>
                <div className="inputs">

                    <div className="input">
                        <img src={user_icon} alt=""/>
                        <input type="text" placeholder='Name'
                        onChange = {e=>setName(e.target.value)}/>
                    </div>

                    <div className="input">
                        <img src={email_icon} alt=""/>
                        <input type="email" placeholder='E-mail'
                        onChange = {e=>setEmail(e.target.value)}/>
                    </div>

                    <textarea rows='50' cols='50' placeholder='Message'
                    onChange = {e=>setMessage(e.target.value)}/>

                    <button className="submit">Send Message</button>
                </div>
            </form>
        </div>
    )
}
