const express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../models/User');
const connection = require('../models/connection.js');

//to be tested
const logout = async (req, res) => {
  console("LOGGGOUTTT");
  if (req.body.action == "logout") {
    console("IFFF LOGGGOUTTT");
    userModel.logoutt(userModel.getemail());
  }
}


 
 
const LoginSignup = async (req, res) => {
 
 
    if (req.body.action == "Sign Up") {
 
        const { name, email, password, confirmPassword } = req.body;
 
        if (!name || !email || !password || !confirmPassword) {
            console.log("Fill empty fields");
        }
        if (password !== confirmPassword) {
            console.log("Password must match");
        }
        else {
            // Validation
          const user = await userModel.validate(email);
          //console.log("el user")
          //console.log(user)
            if (user) {
                console.log(user);
                console.log("email exists");
                res.send("Email Exists")
            }
            else {
                // Password Hashing
                userModel.add(name, email, password);
                console.log('added!');
                res.send("added!");
 
            }
 
        }
    }
    else {
        const { email, password } = req.body;
        if (!email || !password) {
            console.log("Fill empty fields");
        } else {
            // Validation
            const results = await userModel.validate(email);
            if (results.length > 0 && email == results[0].email) {
                console.log("email correct");
                res.send("email correct");
                const results1 = await userModel.checkPass(email);
                console.log(results1);
                if (results1.length > 0 && password == results1[0].password) {
                    userModel.update(email);
                    console.log("correct password");
                  //   res.send("correct password");
                  //  res.redirect("/contactUs");
 
 
                }
                else {
                    console.log("Wrong password");
                 //   res.send("Wrong password");
 
                }
 
 
            }
 
        }
    }
}
 

 
module.exports =  {
  logout,
  LoginSignup
};
 