import React, {useState ,  useEffect } from "react";
import NavBar from "../Components/NavBar/Menu";
import Product from "../Components/Product/Product";
import {getProduct2} from "../Components/NavBar/Menu";
import empty_cart from '../Components/Assets/empty_cart.png';
const Laptops =() =>{

    const [items_list, setItemsList] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getProduct2(); // Replace with your actual API endpoint
          setItemsList(response);
          console.log(response);
        } catch (error) {
          console.error('Error fetching laptop value:', error);
        }
      };
  
      fetchData(); //important: Run for one time only
    }, []);

    return(
        <div>
            <NavBar/>
            {/* <MobileBtn/> */}
           <div>
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
                            <Product data={item}/>
                    )))
 
            }
            </div>
            {/*<h1>This is laptop page</h1>*/}
        </div>
    );

}
export default Laptops