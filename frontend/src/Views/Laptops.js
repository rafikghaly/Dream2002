import React from "react";
import NavBar from "../Components/NavBar/Menu";
import Product from "../Components/Product/Product";
import laptop from '../Components/Assets/laptop-banner.jpg'

const Laptops =() =>{

    // ya beto3 el back 4elo dah we badeloh bel code beta3ko
    let items_list = [
        {
            id:1,
            name:'Iphone 13 Pro Max',
            brand:'Apple',
            description:'Iphones are the longest lasting devices',
            color:'black',
            year:2023,
            category:'mobiles',
            price:56999,
            quantity: 50
        },
        {
            id:2,
            name:'Galaxy s21 Ultra',
            brand:'Samsung',
            description: 'Galaxy devices are weaker than iphones',
            color:'black',
            year:2023,
            category:'mobiles',
            price: 30000,
            quantity: 61
        },
        {
            id:3,
            name:'Iphone 8 Plus',
            brand:'Apple',
            description: 'It was great back in the day',
            color:'black',
            year:2018,
            category:'mobiles',
            price: 7500,
            quantity: 24
        }
    ]

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