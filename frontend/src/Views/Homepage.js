import React, { useState, useEffect } from 'react';
import sale from"../Components/Assets/sale.gif"
import NavBar from "../Components/NavBar/Menu";
import Product from "../Components/Product/Product";
import './page.css'

const Homepage=() =>{
      const [items_list, setData] = useState([]);
      
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:4111/Home');
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };
      
      useEffect(() => {
        fetchData();
      }, []);
      
    return(
            <div>
             <NavBar/>
                <div>
                  <div>
                    <img className="sale" src={sale} alt='Sale'/>
                  </div>
                  <div className='productRow'>
                    { items_list.length===0 ?
                    (<p>No Products.</p>)    :   (items_list.map((item) => (  <Product data={item}/>  )))   
                  } 
                  </div> 
                </div>
            </div>
    );
}
export default Homepage