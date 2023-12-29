import React, {useState} from "react";
import NavBar from "../Components/NavBar/Menu";
import {CartItem} from "../Components/Cart/CartItem";
import empty_cart from '../Components/Assets/empty_cart.png'
const Cart =() =>{

    var items_list = [
        {
            id:1,
            name:'Iphone 13 Pro Max',
            brand:'Apple',
            description:'Iphones are the longest lasting devices',
            color:'black',
            year:2023,
            category:'mobiles',
            price:56999
        },
        {
            id:2,
            name:'Galaxy s21 Ultra',
            brand:'Samsung',
            description: 'Galaxy devices are weaker than iphones',
            color:'black',
            year:2023,
            category:'mobiles',
            price: 30000
        },
        {
            id:3,
            name:'Iphone 8 Plus',
            brand:'Apple',
            description: 'It was great back in the day',
            color:'black',
            year:2018,
            category:'mobiles',
            price: 7500
        }
    ]

    // var items_list = [];

    const [showImage, setShowImage] = useState(true);

    const handleDelete = () => {
        setShowImage(false);
    };

    return(
        <div>
            <NavBar/>

            <div className="col">
                <h1>My Cart</h1>
                {
                    items_list.length===0 ?
                        (
                            <div className='col'>
                                <img className='empty_cart_img' src={empty_cart} alt="empty cart image"/>
                                <p className='empty_cart_msg'>Looks like you haven't added anything to your cart. <br/>Go ahead & explore top categories.</p>
                            </div>
                        )
                        :
                        (items_list.map((item) => (
                            <CartItem onDelete={handleDelete} data={item}/>
                        )))

                }
            </div>

        </div>
    );

}
export default Cart