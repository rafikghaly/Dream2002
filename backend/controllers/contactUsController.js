const express = require('express');
const feedbackModel = require('../models/WebsiteFeedback');

const ContactUsView = (req, res) => {
    res.send("ok2");
};

const ContactUsUpdate= async (req,res)=>{
    const { name ,email ,feedback } = req.body;
    console.log(feedback);
    if (!name || !email || !feedback ) {
        console.log("Fill empty fields");
        res.send("Fill empty fields")
    }
    else{
    await feedbackModel.addfeed(name ,email ,feedback);
    res.send("Feedback Sent");
    }
};

module.exports =  {
    ContactUsView,
    ContactUsUpdate
 };