//import React from 'react'
import './Menu.css'
import logo from '../Assets/logo.gif'
import cart_icon from '../Assets/nav_cart.png'
import axios from 'axios'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const getCart = async()=>{
    //console.log('IN THE FUNC');
    try {
        const response = await axios.get('http://localhost:4111/cart');
        return response.data;
      } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error;
    }

    // await axios.get('http://localhost:4111/cart')
    //     //res gowha el products ll front
    //     .then(res =>{console.log('gowa:'+ res);
    //         return res.data;})
    //     .catch(err =>console.log(err));
    // const [data, setData] = useState([]);
 
     
    // fetch('http://localhost:4111/cart')
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok.');
    //   }
    //   return response.json(); // Parse JSON data
    // })
    // .then(data => {
    //   // Work with the retrieved 'data' from the backend
    //   console.log(data);
    //   setData(data);
     
    // })
    // .catch(error => {
    //   // Handle any errors that occurred during the fetch
    //   console.error('Fetch error:', error);
    // });
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
    // //RES NADOHA FI FRONT FIHA ITEM GOWA EL CART
    // const getCart = async () => {
    //     try {
    //       const cartItems = await getCartItems();
    //       console.log('Cart items:', cartItems);
    //       // Handle cart items as needed
    //     } catch (error) {
    //       console.error('Error getting cart items:', error);
    //     }
    // };


    function gethistory(){
        axios.get('http://localhost:4111/history') // this is back
        .then(res => {
            if (res.data === 'ok2'){
                window.location.href = '/About'; // this is front
            }
        })
    }
    

    return (
        <nav>
            <div className="logo-container">
                <img className='Logo' src={logo} alt='mobilaty logo'/>
                <a className='Brand' href={'/home'}>Dream2002</a>
            </div>

            <div className="links">
                
                <ul>
                    <li><a onClick={gethistory}>About</a></li>
                    <li><a onClick={getContact}>Contact</a></li>
                    {/* FOFO */}
                    <li><a onClick={getProduct1}>Mobiles</a></li>
                    <li><a onClick={getProduct2}>Laptops</a></li> 
                    {/* <li><a onClick={getCart}></a>cart</li> */}
                    <li><Link to='/cart' onClick={getCart} >Cart</Link> </li>
                </ul>
            </div>

            <a href={'/cart'}> <img className={'cart-icon'} src={cart_icon} alt="cart icon"/> </a>

        </nav>
    )
}
export{getCart}

export default Menu
