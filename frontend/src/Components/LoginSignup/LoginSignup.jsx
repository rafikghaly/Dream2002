import React, { useState } from 'react'
import './LoginSignup.css'

// Importing icons
import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import axios from 'axios'

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  function LoginHandle(event){
    //console.log("HENAAAA")
    event.preventDefault();
    axios.post('http://localhost:4111/login',{email,password,action})
    .then(res =>console.log(res))
    .catch(err =>console.log(err));
  }
  
  function SignUpHandle(event){
    //console.log("HENAAAA")
    event.preventDefault();
    axios.post('http://localhost:4111/login',{name,email,password,confirmPassword,action})
    .then(res =>console.log(res))
    .catch(err =>console.log(err));
  }

  return (
    <div className='Form'>
        <div className='container'>
            {/* Header of the component */}
            <div className="header">
                <h1 className={action==="Sign Up"?"header-text":"header-text gray"} onClick={()=>{setAction("Sign Up")}}>Signup </h1>
                <h1 className='header-text'>|</h1>
                <h1 className={action==="Log In"?"header-text":"header-text gray"} onClick={()=>{setAction("Log In")}}>Log In </h1>
            </div>

            {action==="Sign Up"?
            // Render Sign Up Form
            <form onSubmit={SignUpHandle}>
                <div className="inputs">

                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Enter your name'
                        onChange = {e=>setName(e.target.value)}/>
                    </div>
                    
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Enter your email'
                        onChange = {e=>setEmail(e.target.value)}/>
                    </div>

                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Enter your Password'
                        onChange = {e=>setPassword(e.target.value)}/>
                    </div>

                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Confirm Password'
                        onChange = {e=>setConfirmPassword(e.target.value)}/>
                    </div>

                    <button className="submit">Submit</button>
                </div>
            </form>
            :
            // Render Log In form
            <form onSubmit={LoginHandle}>
                <div className="inputs">                  
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Enter your email'
                         onChange = {e=>setEmail(e.target.value)}/>
                    </div>

                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Enter your Password'
                        onChange = {e=>setPassword(e.target.value)}/>
                    </div>

                    <button className="submit">Submit</button>
                </div>
            </form>}
        </div>
        <div className='Accessory'> </div>
    </div>
  )
}

export default LoginSignup