const express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../models/User');
const connection = require('../models/connection.js');

// For Register Page
const registerView = (req, res) => {
    res.render("register");
}

// For Login View 
const loginView = (req, res) => {
    res.render("login");
}




  const loginUser = async (req,res)=>{
    
    
    if (req.body.action == "Sign Up")
    {
      // Check if passwords match
      if (req.body.password !== req.body.confirmPassword) {
        return res.send("Passwords do not match");
      }

      const query = "INSERT INTO mydb.user (name, email, password) VALUES (?, ?, ?)";
      const values = [
        req.body.name,
        req.body.email,
        req.body.password  // Consider hashing the password before storing
      ]
      connection.query(query, [...values], (err, data) => {
        if(err) return res.send("Signup Failed");
        return res.send("Signup Successful");
      })
    }
    else{
      const query = "SELECT * FROM mydb.user WHERE email = ? AND password = ?";
      const values = [
        req.body.email,
        req.body.password
      ]
      connection.query(query, [...values], (err, data) => {
        if(err) return res.send("Login Failed");
        return res.json(data);
      })
    }
}
  

module.exports =  {
    registerView,
    loginView,
    loginUser
};
