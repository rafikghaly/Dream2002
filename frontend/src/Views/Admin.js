import React, {useState} from "react";
import NavBar from "../Components/NavBar/Menu";
import add_icon from '../Components/Assets/add_product.png'
import categories_icon from '../Components/Assets/categories.png'
import report_icon from '../Components/Assets/report.png'
import feedback_icon from '../Components/Assets/feedback.png'
import {AddCategory} from "../Components/AdminComponents/AddCategory";
import {AddProduct} from "../Components/AdminComponents/AddProduct";
import {ProductInvItem} from "../Components/AdminComponents/ProductInvItem";
import '../Components/AdminComponents/admin.css'
import {Feedback} from "../Components/AdminComponents/Feedback";

const Admin =() =>{

    // This belongs to frontend --- dont touch
    const [action, setAction] = useState("add_product");

    // Remove this ya nas yally wara
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

    let feedback_list = [{
        name:'Hesham Salah',
        email:'egg@gmail.com',
        feedback:'el report makan4 ad keda, we el sensors mala2et4 7araet gesm el namla ely fe a5er el oda, we en3ekas ar3et Mina 3amany.'
    }, {
        name:'Ahmed Nabieh',
        email:'gay@gmail.com',
        feedback:'Kosom el fo2y'
    }]

    // These belong to frontend --- Don't touch
    let componentToRender;

    if (action === "add_product") {
        componentToRender = <AddProduct />;
    }
    else if (action === "add_category") {
        componentToRender = <AddCategory />;
    }
    else if (action === "show_inventory"){
        if (items_list.length===0) {
            componentToRender = <div>Your inventory is empty!</div>
        } else {
            componentToRender = (items_list.map((item) => (

                <div className={'admin-item-slot'}>
                    <p>Category: {item.category}</p>
                    <p>Name: {item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            )))
        }
    }
    else if (action === "show_feedback"){
        if (feedback_list.length===0) {
            componentToRender = <div>M7d4 by7bak</div>
        } else {
            componentToRender = (feedback_list.map((item) => (
                <Feedback feedback={item}/>
            )))
        }
    }
    else {
        componentToRender = <div>Invalid value</div>;
    }

    return (
        <div>
            <div className="admin-title-background">
                <h1 className="admin-title">Adminstrator Page</h1>
            </div>
            {/*<NavBar/>*/}
            <div className="admin-buttons">
                <button onClick={()=>{setAction("add_product")}}><img src={add_icon} alt=""/></button>
                <button onClick={()=>{setAction("add_category")}}><img src={categories_icon} alt=""/></button>
                <button onClick={()=>{setAction("show_inventory")}}><img src={report_icon} alt=""/></button>
                <button onClick={()=>{setAction("show_feedback")}}><img src={feedback_icon} alt=""/></button>
            </div>

            <div className="admin-comp">
                {componentToRender}
            </div>
        </div>
    );

}
export default Admin