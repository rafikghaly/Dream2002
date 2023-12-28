import React from "react";
// import LoginSignup from "../Components/LoginSignup/LoginSignup";

import NavBar from "../Components/NavBar/Menu"
import Product from "../Components/Product/Product";
import MobileBtn from "../Components/Button/MobileBtn";


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

    return(
            <div>
             <NavBar/>
                {/*<div>*/}
                {/*    <MobileBtn/>*/}
                {/*    <div className="row">*/}
                {/*        <Product data={phone1}/>*/}

                {/*    </div>*/}

                {/*</div>*/}

            </div>
    );

}
export default Homepage