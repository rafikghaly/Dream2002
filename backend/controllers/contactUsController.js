const express = require('express');
const connection = require("../models/connection.js");
const feedbackModel = require('../models/WebsiteFeedback');
const app = express();
const ContactUsView = (req, res) => {
    // connection.query('SELECT feedback FROM WebsiteFeedback', async (error, results) => {
    //     console.log(results);
     //   res.render("contactUs",{   
           // feed: results[0].feedback,
    //     });
    //  });

    res.send("ok2");
};
const ContactUsUpdate= async (req,res)=>{
    console.log("fok el dee2a");
    const { feedback } = req.body;
    console.log(feedback);
    if(feedback.length>0){
    const results = await feedbackModel.getid();
    await feedbackModel.addfeed(results[0].id ,feedback);
    res.redirect("/clientinfo");  
    }
};
    




module.exports =  {
    ContactUsView,
    ContactUsUpdate
 };