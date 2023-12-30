import React, { useState, useEffect } from 'react';
import sale from"../Components/Assets/sale.gif"
import NavBar from "../Components/NavBar/Menu";
import Product from "../Components/Product/Product";
import MobileBtn from "../Components/Button/MobileBtn";
import './page.css'
import axios from 'axios'



const Homepage=() =>{
      // const dataToSend='laptop';
      //console.log('ana hommeeee');
      //console.log({dataToSend});
      const [items_list, setData] = useState([]);
 
     
      fetch('http://localhost:4111/Home')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json(); // Parse JSON data
      })
      .then(data => {
        // Work with the retrieved 'data' from the backend
        console.log(data);
        setData(data);
       
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
      });
     
      //console.log(data[0]);
    

    return(
            <div>
             <NavBar/>
                <div>
                  <div className="mobilebuttons">
                      <MobileBtn name="mobile"/>
                      <MobileBtn name="mobile"/>
                      <MobileBtn name="mobile"/>
                      <MobileBtn name="mobile"/>
                      <MobileBtn name="mobile"/>

                  </div>
                    <div>
                        <img className="sale" src={sale} alt='Sale'/>
                    </div>
                    <div className='row'>
                    { items_list.length===0 ?   (  <p>Nol Products.</p>                                     
                       )    
                                                :                                
                    (items_list.map((item) => (  <Product data={item}/>                    
                     )))   
                  } 
                  </div> 
                </div>

            </div>
    );

    }
export default Homepage