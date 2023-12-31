import React, {useState ,  useEffect } from "react";
import {gethistory} from "../Components/NavBar/Menu"
import NavBar from "../Components/NavBar/Menu";
import empty_cart from '../Components/Assets/empty_cart.png'
import { HistoryItem } from "../Components/History/History";


const History = () => {
    const [items_list, setItemsList] = useState([]);
  

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await gethistory();
          setItemsList(response);
        } catch (error) {
          console.error('Error fetching history value:', error);
        }
      };
  
      fetchData(); //important: Run for one time only --m7adesh y7ot parameterssss
    }, []);
 
   
    return(
        <div>
            <NavBar/>
 
            <div className="col">
                <h1>My History</h1>
                { 
                    items_list.length===0 ?
                    (
                        <div className='col'>
                            <img className='empty_cart_img' src={empty_cart} alt="empty history image"/>
                            <p className='empty_cart_msg'>Looks like you haven't added anything to your History. <br/>Go ahead & explore top categories.</p>
                        </div>
                    )
                    :
                    (items_list.map((item) => (
                        <HistoryItem data={item}/>
                    )))
                }
            </div>
        </div>
    );
}
export default History