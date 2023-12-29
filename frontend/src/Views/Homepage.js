import React from "react";
import sale from"../Components/Assets/sale.gif"
import NavBar from "../Components/NavBar/Menu";
import Product from "../Components/Product/Product";
import MobileBtn from "../Components/Button/MobileBtn";
import './page.css'


const Homepage=() =>{
    var phone1={
        id:1,
        name:'Iphone 13 Pro Max',
        brand:'Apple',
        description: '256GB - 4GB RAM - 6.5\' OLED Display',
        color:'Gold',
        year:2021,
        category:'mobiles',
        price: 30000
    }
    var phone2={
        id:2,
        name:'Galaxy s21 ultra',
        brand:'Samsung',
        description: '256GB - 4GB RAM - 6.5\' OLED Display',
        color:'Black',
        year:2021,
        category:'mobiles',
        price: 29000
    }

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
                    <div className="row">
                        <Product data={phone1}/>
                        <Product data={phone2}/>
                        <Product data={phone1}/>
                        <Product data={phone2}/>

                    </div>
                    <div className="row">
                        <Product data={phone1}/>
                        <Product data={phone1}/>
                        <Product data={phone1}/>
                        <Product data={phone1}/>

                    </div>

                </div>

            </div>
    );

}
export default Homepage