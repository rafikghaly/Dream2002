import React from 'react'
import './admin.css'

export const AddCategory = () => {
    return (
        <div>
            <h2>Add a category</h2>
            <form action="">
                {/*The name of the category*/}
                {/* For Rafik: I don't know if having the same id and name for different files might conlict */}
                <div className="add-product-input">
                    <label htmlFor="category">Category name: </label>
                    <input id={'category'} type="text"/>
                    <input className={'category-button'} type="submit"/>
                </div>

            </form>
        </div>
    )
}
