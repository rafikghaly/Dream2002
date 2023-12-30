import React from "react";
import NavBar from "../Components/NavBar/Menu";
import {useParams} from "react-router-dom";

import './ProductInfo.css'
import './page.css'

const ProductInfo =() =>{

    const {p_id} = useParams();
    console.log(p_id);

    // There must be some function to return the item from the database given the id

    var item={
        id:1,
        name:'Iphone 13 Pro Max',
        brand:'Apple',
        description: '256GB - 4GB RAM - 6.5\' OLED Display',
        color:'Gold',
        year:2021,
        category:'mobiles',
        price: 30000
    }

    const product_image = require(`../Components/Assets/mobiles/${p_id}.jpg`);

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
                            <td>(item.description)</td>
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