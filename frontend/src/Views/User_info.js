import React, { useState } from 'react'
import NavBar from "../Components/NavBar/Menu";
import axios from 'axios'
import email_icon from "../Components/Assets/email.png";
import './page.css'
import user_icon from "../Components/Assets/user.png";
import location from "../Components/Assets/location.png";
const User_info =() =>{

    const [email,setEmail] = useState("");
    const [Originialemail,setOEmail] = useState("");
    const [Originalname,setOName] = useState("");
    const [name,setName] = useState("");
    
    axios.get('http://localhost:4111/user_info')
    .then(res => {
        setOName(res[0].name)
        setOEmail(res[0].email)
    })
    axios.post('http://localhost:4111/user_info',email,name)
    .then(res => {
    if (res.data === 'User Modified'){
    alert("User Modified")
    }
    })
    .catch(err =>console.log(err));


    return (

        <div>
            <NavBar/>
            <form>
                <div className='userinfo'>
                    <h1 className="he">User Info</h1>

                    <div className="inputs">

                        <div className="info">
                            <img src={user_icon} alt=""/>
                            <input type="text" placeholder={Originalname}
                            onChange = {e=>setName(e.target.value)}/>
                            <button className="edit">Edit</button>
                        </div>

                        <div className="info">
                            <img src={email_icon} alt=""/>
                            <input type="email" placeholder={Originialemail}
                            onChange = {e=>setEmail(e.target.value)}/>
                            <button className="edit">Edit</button>
                        </div>

                        <div className="info">
                            <img src={location} alt=""/>
                            <input type="text" readOnly={true} placeholder=''/>
                        </div>


                    </div>

                 </div>
            </form>

        </div>
    );

}
export default User_info