import React, {useState} from "react";
import NavBar from "../Components/NavBar/Menu";
import {useParams} from "react-router-dom";
import axios from 'axios'
import './ProductInfo.css'
import './page.css'


const ProductInfo =() =>{

    const {p_id} = useParams();
    const [item, setData] = useState("");
    const [product_image, setImage] = useState("");
    const [feedback, setFeedback] = useState("");

    function addToCartHandle(event) {
        event.preventDefault();
        axios.post("http://localhost:4111/cartadd", { p_id })
        .then((res) => {
          if (res.data === "Product added to the cart successfully") {
            alert("Added to Cart");
          }
        })
        .catch(err => console.log(err));
      }
    
      function submitFeedback(event) {
        event.preventDefault();
        axios.post("http://localhost:4111/submitFeedback", { p_id, feedback })
          .then((res) => {
            if (res.data === "Feedback sent") {
              alert("Feedback submitted successfully");
            }
          })
          .catch((err) => console.log(err));
      };
    
    axios.post("http://localhost:4111/productInfo", { p_id })
    .then((res) => {
        if (res.data === "Product not found") {
        alert("product not found");
        } else {
        setData(res.data);
        const product_image = require(
            `../Components/Assets/${item.category}/${p_id}.jpg`
        );
        setImage(product_image);
        }
    })
    .catch((err) => console.log(err));
    

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

                    <form onSubmit={addToCartHandle}>
                        <button type="submit" className="add">
                            Add to cart
                        </button>
                    </form>

                    <form onSubmit={submitFeedback}>
                        <label htmlFor="feedback">Feedback:</label>
                        <textarea
                        id="feedback"
                        name="feedback"
                        rows="4"
                        cols="50"
                        value={feedback} required
                        onChange={(e) => setFeedback(e.target.value)}
                        />
                        <br />
                        <button type="submit">Submit Feedback</button>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default ProductInfo