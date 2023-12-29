import React from "react";
import NavBar from "../Components/NavBar/Menu";
import Product from "../Components/Product/Product";
import MobileBtn from "../Components/Button/MobileBtn";

const Mobiles =() =>{
    var phone1={
        id:2,
        name:'Galaxy s21 Ultra',
        brand:'Samsung',
        description: 'shit',
        color:'black',
        year:2023,
        category:'mobiles',
        price: 3000
    }
    return(
        <div>
            <NavBar/>
            <MobileBtn/>
            {/*<MobileBtn/>*/}
            <Product data={phone1}/>
        </div>
    );

}
export default Mobiles