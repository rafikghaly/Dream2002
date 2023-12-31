import React, {useState , useEffect } from "react";
import NavBar from "../Components/NavBar/Menu";
import Product from "../Components/Product/Product";
import tv from '../Components/Assets/tv.jpg'
import {getTelvision} from "../Components/NavBar/Menu";


const TV =() =>{

    const [items_list, setItemsList] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getTelvision();
          setItemsList(response);
        } catch (error) {
          console.error('Error fetching television value:', error);
        }
      };

      fetchData();
    }, []);

    return(
        <div>
            <NavBar/>
            <img className={'sale'} src={tv} alt=""/>
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
export default TV