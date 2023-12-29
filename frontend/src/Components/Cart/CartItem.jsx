import React from 'react'
import trash_icon from '../Assets/trash-bin.png'
import './Cart.css'

export const CartItem = (props) => {
    const data = props.data;
    const product_img = require(`../Assets/${data.category}/${data.id}.jpg`);

    return (
        <div className='item'>
            <img src={product_img} alt="product image" className="item-image"/>

            <p className="text">{data.category}</p>

            <div className="name-id">
                <p className="text"><b>{data.name}</b></p>
                <p className="text">id: {data.id}</p>
            </div>

            <p className="text">{data.price} EGP</p>

            <img src={trash_icon} alt="trash icon" className="icon"/>
        </div>
    )
}
