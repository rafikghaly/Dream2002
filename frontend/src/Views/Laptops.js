import React, {useState , useEffect } from "react";
import NavBar from "../Components/NavBar/Menu";
import Product from "../Components/Product/Product";
import laptop from '../Components/Assets/laptop-banner.jpg'
import {getLaptop} from "../Components/NavBar/Menu";

const Laptops =() =>{

    const [items_list, setItemsList] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getLaptop();
          setItemsList(response);
        } catch (error) {
          console.error('Error fetching laptop value:', error);
        }
      };

      fetchData();
    }, []);

    return(
        <div>
            <NavBar/>
            <img className={'sale'} src={laptop} alt=""/>
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

export default Laptops