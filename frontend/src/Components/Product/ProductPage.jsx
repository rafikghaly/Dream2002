import React from 'react'
import love from "../Assets/heart.png";
import cart from "../Assets/cart.png";
import './ProductPage.css'

export const ProductPage = (props) => {
    const data = props.data;
    const photo = require(`../Assets/${data.category}/${data.id}.jpg`);

    return (
        <div className='product-card'>
            {/* Image and description text */}
            <img src={photo} alt="" className="product-img"/>

            {/*Details Div*/}
            <div className="details">
                <p><b>Category: </b>{data.category}</p>
                <p><b>Name: </b>{data.name}</p>
                <p><b>ID: </b>#{data.id}</p>
                <p><b>Brand: </b>{data.brand}</p>
                <p><b>Description: </b>{data.description}</p>
                <p><b>Color: </b>{data.color}</p>
                <p><b>Release Year: </b>{data.year}</p>
                <p><b>Price: </b>{data.price}</p>
            </div>
        </div>
    )
}
