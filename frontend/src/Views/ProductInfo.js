import React, {useState} from "react";
import NavBar from "../Components/NavBar/Menu";
import {useParams} from "react-router-dom";

import './ProductInfo.css'
import './page.css'
import axios from 'axios'

const ProductInfo =() =>{

    const {p_id} = useParams();
    const [item, setData] = useState("");
    const [product_image, setImage] = useState("");

    axios.post('http://localhost:4111/productinfo',{p_id})

    .then(res => {
    if (res.data === 'Product not found'){
    alert("product not found")
    }
    else {
    setData(res.data)
    const product_image = require(`../Components/Assets/${item.category}/${p_id}.jpg`);
    setImage(product_image)
    }
    })
    .catch(err =>console.log(err));
    console.log(item);
    

    return(
        <div>
            <NavBar/>
            <div className={'row'}>
                <div className="product-image">
                    <img src={product_image} alt="product image"/>
                </div>

                <div className="col">
                    <h1 className={'product-info'}>Product Info</h1>
                    <table>
                        <tr>
                            <td className={'att'}>ID:</td>
                            <td>#{p_id}</td>
                        </tr>

                        <tr>
                            <td className={'att'}>Category:</td>
                            <td>{item.category}</td>
                        </tr>

                        <tr>
                            <td className={'att'}>Name:</td>
                            <td>{item.name}</td>
                        </tr>

                        <tr>
                            <td className={'att'}>Brand:</td>
                            <td>{item.brand}</td>
                        </tr>

                        <tr>
                            <td className={'att'}>Description:</td>
                            <td>{item.description}</td>
                        </tr>

                        <tr>
                            <td className={'att'}>Color:</td>
                            <td>{item.color}</td>
                        </tr>

                        <tr>
                            <td className={'att'}>Release year:</td>
                            <td>{item.year}</td>
                        </tr>

                        <tr>
                            <td className={'att'}>Price:</td>
                            <td>{item.price}</td>
                        </tr>
                    </table>

                    {/*fe hob el rafik rafik rafik el raqiq*/}
                    <button className="add">Add to cart</button>
                </div>

            </div>
        </div>
    );

}
export default ProductInfo