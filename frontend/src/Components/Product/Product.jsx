import React from 'react'
import './Product.css'
import axios from 'axios'

const Product = (props) => {

    const data = props.data;
    const p_id = data.id
    const photo = require(`../Assets/${data.category}/${data.id}.jpg`);

    function gotoInfo (id) {
        window.location.href = `/product/${id}`;
    }

    function addToCartHandle(event){
        event.preventDefault();
        axios.post('http://localhost:4111/cartadd',{p_id})
        .then(res => {
            if (res.data === 'Product added to the cart successfully'){
                alert("Added to Cart")
            }
        })
        .catch(err =>console.log(err));
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
                <p className="price">{data.price} $</p>
            </div>
        </div>

        {/*Buttons */}
        <button className={'product-card-button'} onClick={addToCartHandle}>Add to cart</button>
    </div>
  )
}

export default Product