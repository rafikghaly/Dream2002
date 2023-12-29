import React from 'react'
import './Menu.css'
import logo from '../Assets/logo.gif'
import axios from 'axios'
const Menu = () => {

    function getContact(){
        axios.get('http://localhost:4111/contactUs') // this is back
        .then(res => {
            if (res.data === 'ok2'){
                window.location.href = '/contact'; // this is front
            }
        })
    }
    //FOFO
    function getProduct1(){
        const dataToSend='mobiles';
        console.log('ana dost mobiles');
        console.log({dataToSend});
        axios.post('http://localhost:4111/showproduct', {dataToSend})
        //res gowha el products ll front
        .then(res =>console.log(res))
        .catch(err =>console.log(err));
    };
    function getProduct2(){
        const dataToSend='laptop';
        console.log('ana dost mobiles');
        console.log({dataToSend});
        axios.post('http://localhost:4111/showproduct', {dataToSend})
        //res gowha el products ll front
        .then(res =>console.log(res))
        .catch(err =>console.log(err));
    };

    
    

    return (
        <nav>
            <div className="logo-container">
                <img className='Logo' src={logo} alt='mobilaty logo'/>
                <a className='Brand' href={'/'}>Mobilaty</a>
            </div>

            <div className="links">
                <ul>
                    <li><a href={'/about'}>About</a></li>
                    <li><a onClick={getContact}>Contact</a></li>
                    {/* FOFO */}
                    <li><a onClick={getProduct1}>Mobiles</a></li>
                    <li><a onClick={getProduct2}>Laptops</a></li> 
                </ul>
            </div>
        </nav>
    )
}

export default Menu
