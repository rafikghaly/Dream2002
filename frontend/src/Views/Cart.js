import React, {useState ,  useEffect } from "react";
import {getCart} from "../Components/NavBar/Menu"
import NavBar from "../Components/NavBar/Menu";
import {CartItem} from "../Components/Cart/CartItem";
import empty_cart from '../Components/Assets/empty_cart.png'
 
 
// getCart().then(itemsList => {
//     console.log('items:', itemsList);
//     // Now you can access the values from itemsList
//     console.log(itemsList[0]); // Accessing the first item in the array
//     console.log(itemsList[1]); // Accessing the second item in the array
// });

// async function fetchData() {
//     try {
//       const result = await getCart();
//       console.log(result);
//       return result
//     //   const itemsList = result[[PromiseResult]];
//       console.log('items:', itemsList);
//       console.log(itemsList[0]); // Accessing the first item in the array
//       console.log(itemsList[1]); // Accessing the second item in the array
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
// }
// async function cart(){
//     const items_list = await getCart();
//     console.log("a333:"+items_list);
//     return items_list;
// }
const Cart = () => {
    const [items_list, setItemsList] = useState([]);
  
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