import React from 'react'
import './History.css'
import axios from 'axios'

export const HistoryItem = (props) => {
    
    const data = props.data;
    const product_img = require(`../Assets/${data.category}/${data.id}.jpg`);

    return (
        <div className='cart-item'>
            <img src={product_img} alt="product image" style={{height: '25px'}}className="item-image"/>

            <div className="name-id">
                <p className="text"><b>{data.name}</b></p>
                <p className="text">id: {data.id}</p>
            </div>

            <p className="text">{data.category}</p>

            <p className="text">Quantity: {data.quantity}</p>

            <p className="text">{data.price} $</p>

        </div>
    )
}