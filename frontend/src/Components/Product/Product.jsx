import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import love from '../Assets/heart.png';
import cart from '../Assets/cart.png';

const Product = (props) => {
  const data = props.data;
  const photo = require(`../Assets/${data.category}/${data.id}.jpg`);

  return (
    <Link to={`/product/${data.id}`} className='product-container'>
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

      {/*Buttons */}
      <div className="buttons">
        <div className="icon">
          <img src={love} alt="" />
        </div>
        <div className="icon">
          <img src={cart} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default Product;
