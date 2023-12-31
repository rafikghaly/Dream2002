import React from 'react'
import './Menu.css'
import logo from '../Assets/Logo_white.png'
import user_icon from '../Assets/user_nav.png'
import cart_icon from '../Assets/nav_cart.png'
import axios from 'axios'
import { Link } from 'react-router-dom';

const getCart = async()=>{
    try {
        const response = await axios.get('http://localhost:4111/cart');
        return response.data;
      } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error;
    }
};

const getMobile= async()=>{
    try {
        const dataToSend='mobiles';
        const response = await axios.post('http://localhost:4111/showproduct', {dataToSend});
        return response.data;
      } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error;
    }
};

const getLaptop =async()=>{
    try {
        const dataToSend='laptops';
        const response = await axios.post('http://localhost:4111/showproduct', {dataToSend});
        return response.data;
      } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error;
    }
};

const getTelvision =async()=>{
    try {
        const dataToSend='televisions';
        const response = await axios.post('http://localhost:4111/showproduct', {dataToSend});
        return response.data;
      } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error;
    }
};



const Menu = () => {


    function getContact(){
        axios.get('http://localhost:4111/contactUs') // this is back
        .then(res => {
            if (res.data === 'ok2'){
                window.location.href = '/contact'; // this is front
            }
        })
    }
    
    function gethistory(){
        axios.get('http://localhost:4111/history') // this is back
        .then(res => {
            if (res.data === 'ok2'){
                window.location.href = '/About'; // this is front
            }
        })
    }
    function LogOut(){
        axios.get('http://localhost:4111/login') // this is back
        .then(res => {
            if (res.data === 'ok2'){
                window.location.href = '/'; // this is front
            }
        })
    }

    return (
        <nav>
            <div className="logo-container">
                <img className='Logo' src={logo} alt='mobilaty logo'/>
                <a className='Brand' href={'/home'}>Dream2002</a>
            </div>
            <div className="logo2-container">
                <img src={user_icon}/>
                <ul className="subnav">
                    <li className="ui2"><a href={'/user_info'}>User Info</a></li>
                    <hr/>
                    <li className="ui2"><a onClick={LogOut}>Logout</a></li>
                </ul>

            </div>

            <div className="links">
                <ul>
                    <li><a href={'/about'}>About</a></li>
                    <li><a onClick={getContact}>Contact</a></li>
                    <li><Link to='/mobile' onClick={getMobile}>Mobiles</Link></li>
                    <li><Link to='/laptop' onClick={getLaptop}>Laptops</Link></li> 
                    <li><Link to='/tv' onClick={getTelvision}>Televisions</Link></li>
                </ul>
            </div>

            <a href={'/cart'}> <img className={'cart-icon'} src={cart_icon} alt="cart icon"/> </a>

        </nav>
    )
}
export{getCart,getMobile,getLaptop,getTelvision};

export default Menu
