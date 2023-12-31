import React, {useState ,  useEffect } from "react";
import {getCart} from "../Components/NavBar/Menu"
import NavBar from "../Components/NavBar/Menu";
import {CartItem} from "../Components/Cart/CartItem";
import empty_cart from '../Components/Assets/empty_cart.png'
import axios from 'axios'


const Cart = () => {
    const [items_list, setItemsList] = useState([]);
  
    async function checkout(){
        try{
            await axios.get('http://localhost:4111/checkout')
        }
        catch (error) {
            console.error('Error in checking out:', error);
            throw error;
        }
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getCart(); // Replace with your actual API endpoint
          setItemsList(response);
        } catch (error) {
          console.error('Error fetching cart value:', error);
        }
      };
  
      fetchData(); //important: Run for one time only
    }, []);
 
    const [setShowImage] = useState(true);
 
    const handleDelete = () => {
        setShowImage(false);
    };
 
    return(
        <div>
            <NavBar/>
 
            <div className="col">
                <h1>My Cart</h1>
                { 
                    items_list.length === 0 ? (
                        <div className='col'>
                            <img className='empty_cart_img' src={empty_cart} alt="empty cart image"/>
                            <p className='empty_cart_msg'>Looks like you haven't added anything to your cart. <br/>Go ahead & explore top categories.</p>
                        </div>
                    ) : (
                        <>
                            {items_list.map((item) => (
                                <CartItem onDelete={handleDelete} data={item} key={item.id} />
                            ))}
                            <form onSubmit={checkout}>
                                <button className="add" type="submit">Checkout</button>
                            </form>
                        </>
                    )
                }
                
            </div>
        </div>
    );
}
export default Cart