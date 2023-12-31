import React, { useState } from 'react';
import './admin.css'
import axios from 'axios';

export const AddCategory = () => {
    
    const [name,setName] = useState("");

    function AddCat(event){
        event.preventDefault();
        axios.post('http://localhost:4111/addCategory',{name})
        .then(res => {
            if (res.data === 'Category Added'){
                alert('Category Added!');
            }
            else if (res.data === 'Category with the same name exists'){
                alert('Category with the same name exists!');
            }
        })
        .catch(err =>console.log(err));
    }


    return (
        <div>
            <h2>Add a category</h2>
            <form onSubmit={AddCat}>
                <div className="add-product-input">
                    <label htmlFor="category">Category name: </label>
                    <input id={'category'} type="text" required
                    onChange = {e=>setName(e.target.value)}/>
                    <input className={'category-button'} type="submit"/>
                </div>

            </form>
        </div>
    )
}
