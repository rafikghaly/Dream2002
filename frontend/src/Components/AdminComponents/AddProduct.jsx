import React, { useState } from 'react';
import axios from 'axios';

export const AddProduct = () => {
    const [file, setFile] = useState(null);
    const [brand,setBrand] = useState("");
    const [name,setName] = useState("");
    const [year,setYear] = useState("");
    const [color,setColor] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [description,setDescription] = useState("");

    function AddHandle(event){
        event.preventDefault();
        axios.post('http://localhost:4111/adminAddProduct',{ name, price, category, description, brand, year, color})
        .then(res => {
            if (res.data === 'Product Added'){
                alert('Product Added!');
            }
            else if (res.data === 'Product with the same name exists'){
                alert('Product with the same name exists!');
            }
        })
        .catch(err =>console.log(err));
      }

    function selectCategory(event){
        setCategory(event.target.value);
    }

    // const handleFileChange = (e) => {
    //     setFile(e.target.files[0]);
    // };

    // const handleUpload = async () => {
    //     if (!file) {
    //         alert('Please select a file.');
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append('file', file);

    //     try {
    //         const response = await axios.post('http://localhost:3001/upload', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

    return (
        <div>
            <h2>Add a product</h2>
            <form onSubmit={AddHandle}>
                {/*The name of the product*/}
                <div className="add-product-input">
                    <label htmlFor="name">Name: </label>
                    <input id={'name'} type="text" required
                     onChange = {e=>setName(e.target.value)}/>
                </div>


                {/*The brand of the product*/}
                <div className="add-product-input">
                    <label htmlFor="brand">Brand: </label>
                    <input id={'brand'} type="text" required
                     onChange = {e=>setBrand(e.target.value)}/>
                </div>


                {/*The release date of the product*/}
                <div className="add-product-input">
                    <label htmlFor="year">Year Released: </label>
                    <input id={'year'} type="number" min={2000} max={2080} required
                     onChange = {e=>setYear(e.target.value)}/>
                </div>

                {/*The color of the product*/}
                <div className="add-product-input">
                    <label htmlFor="color">Color: </label>
                    <input id={'color'} type="text" required
                     onChange = {e=>setColor(e.target.value)}/>
                </div>



                {/*The price of the product*/}
                {/*the maximum price is 1000000 34an feh t3wim we keda*/}
                <div className="add-product-input">
                    <label htmlFor="price">Price: </label>
                    <input id={'price'} type="number" min={10} max={1000000} required
                     onChange = {e=>setPrice(e.target.value)}/>
                </div>

                {/*The category of the product */}
                {/*-------- This shall be edited to add categories from the database*/}
                <div className="add-product-input">
                    <label htmlFor="categories">Choose a category: </label>
                    <select id="categories" name="cars" required
                     onChange = {selectCategory}>
                        <option disabled></option>
                        <option value="mobiles">Mobile</option>
                        <option value="laptops">Laptop</option>
                        <option value="televisions">Televisions</option>
                    </select>
                </div>

                {/*The description of the product*/}
                <textarea className={'admin-textarea'} name="description" id="description" cols="30" rows="50"
                          placeholder={'Description'}
                          onChange = {e=>setDescription(e.target.value)}></textarea>

                {/* <div className="add-product-input">
                    <label htmlFor=""></label>
                    <input type="file" onChange={handleFileChange} accepts={'image/png, image/jpg'} required/>
                </div> */}

                <input className={'add-submit-button'} type="submit"/>
            </form>
        </div>
    )
}
