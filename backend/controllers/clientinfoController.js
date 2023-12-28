const express = require('express');
const connection = require("../models/connection.js");
const app = express();
const userModel = require('../models/User');

const ClientinfoView = (req, res) => {
    console.log("yaraaaaaab");
    results= userModel.getusers(); 
        if(results){
            console.log(results);
            res.render("clientinfo",{
                name: results[0].name,
                email: results[0].email,
                location: results[0].location
            });
        }
        else{
            console.log('error');
        }
         
   
}

const clientupdate = (req, res) => {
    console.log("fok el dee2a");
    const { name, email, location } = req.body;
    results=userModel.getid();
        if(name.length>0){
            userModel.updatename(name,results[0].id)
        }
        if(email.length>0){
            userModel.updateemail(email,results[0].id)
        }
        if(location.length>0){
            userModel.updatelocation(name,results[0].id)
        }

 
};





module.exports =  {
   ClientinfoView,
  clientupdate
};