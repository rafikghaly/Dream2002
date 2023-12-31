import React, {useState , useEffect } from "react";
import NavBar from "../Components/NavBar/Menu";
import Product from "../Components/Product/Product";
import mobile from '../Components/Assets/mobile-banner.jpg'
import {getMobile} from "../Components/NavBar/Menu";


const Mobiles =() =>{

    const [items_list, setItemsList] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getMobile();
          setItemsList(response);
        } catch (error) {
          console.error('Error fetching mobile value:', error);
        }
      };

      fetchData();
    }, []);

    return(
        <div>
            <NavBar/>
            <img className={'sale'} src={mobile} alt=""/>
            <div className="row">
                {
                    items_list.length === 0 ?
                        (
                            <div className='col'>
                                <p>No Products.</p>
                            </div>
                        )
                        :
                        (items_list.map((item) => (
                            <Product data={item}/>
                        )))

                }
            </div>
        </div>
    );

}
export default Mobiles