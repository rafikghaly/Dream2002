import React from 'react'
import './Product.css'
//import mobile from '../Assets/1.jpg'
import love from '../Assets/heart.png'
import cart from '../Assets/cart.png'

const Product = (props) => {

    const data = props.data;
    const photo = require(`../Assets/${data.category}/${data.id}.jpg`);

    function gotoInfo (id) {
        window.location.href = `/product/${id}`;
    }

    function goToCart () {
        window.location.href = `/cart`;
    }

    return (
    <div className='product-container'>
        <div  onClick={()=>gotoInfo(data.id)}>
            {/* Image and description text */}
            <div className="product-image">
                <img src={photo} alt="" />
                <div className="description">
                    <p> {data.description} </p>
                </div>
            </div>

            {/*Card Text*/}
            <div className="product-text">
                <p className="brand">{data.brand}</p>
                <p className="title">{data.name}</p>
                <p className="brand">{data.color}</p>
                <p className="price">{data.price} EGP</p>
            </div>
        </div>

        {/*Buttons */}
        <button className={'product-card-button'} onClick={()=>goToCart()}>Add to cart</button>
    </div>
  )
}

export default Product