import React from 'react'
import trash_icon from '../Assets/trash-bin.png'
import './Cart.css'
import axios from 'axios'

export const CartItem = (props) => {
    
    const data = props.data;
    const product_img = require(`../Assets/${data.category}/${data.id}.jpg`);

    function handleDeleteClick(){
        axios.post('http://localhost:4111/cartremove',{data})
        .then(res => {
            if (res.data === 'Item removed'){
                alert("Item removed")
                window.location.reload();
            }
        })
        .catch(err =>console.log(err));
    }

    return (
        <div className='cart-item'>
            <img src={product_img} alt="product image" className="item-image"/>

            <div className="name-id">
                <p className="text"><b>{data.name}</b></p>
                <p className="text">id: {data.id}</p>
            </div>

            <p className="text">{data.category}</p>

            <p className="text">Quantity: {data.quantity}</p>

            <p className="text">{data.price} EGP</p>

            <img onClick={handleDeleteClick} src={trash_icon} alt="trash icon" className="icon"/>
        </div>
    )
}