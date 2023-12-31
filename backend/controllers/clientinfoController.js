const express = require('express');
const connection = require("../models/connection.js");
const app = express();
const userModel = require('../models/User');

const ClientinfoView = (req, res) => {
    //console.log("yaraaaaaab");
    results= userModel.getusers(); 
        if(results){
            console.log(results);
            res.send(results);
        }
        else{
            console.log('error');
        }
         
   
}

const clientupdate = (req, res) => {
    //console.log("fok el dee2a");
    const { name, email } = req.body;
    results=userModel.getid();
    try{    
    if(name.length>0){
            userModel.updatename(name,results[0].id)
        }
        if(email.length>0){
            userModel.updateemail(email,results[0].id)
        }
        res.send("User Modified");
    }
    catch(error){
        res.send("error");
    }
 
};





module.exports =  {
   ClientinfoView,
  clientupdate
};