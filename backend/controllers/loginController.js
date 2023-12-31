const userModel = require('../models/User');

//to be tested
const logout = async (req, res) => {
    try{
        userModel.logoutt();
        res.send("ok2");
    }
    catch (error) {
        console.error('Error logging out:', error);
        res.status(500).send('Internal Server Error: ' + error.message);
    }
}
 
const LoginSignup = async (req, res) => {
 
    if (req.body.action == "Sign Up") {
 
        const { name, email, password, confirmPassword } = req.body;
 
        if (!name || !email || !password || !confirmPassword) {
            console.log("Fill empty fields");
            res.send("Fill empty fields")
        }
        else if (password !== confirmPassword) {
            console.log("Password must match");
            res.send("Password must match")
        }
        else {
            // Validation
          const user = await userModel.validate(email);
            if (user) {
                console.log(user);
                console.log("email exists");
                res.send("Email Exists")
            }
            else {
                // Password Hashing
                userModel.add(name, email, password);
                userModel.update(email);
                console.log('Ok');
                res.send("Ok");
 
            }
 
        }
    }
    else {
        const { email, password } = req.body;
        if (!email || !password) {
            console.log("Fill empty fields");
            res.send("Fill empty fields");
        } else {
            // Validation
            const results = await userModel.validate(email);
            if (results.length > 0 && email == results[0].email) {
                const results1 = await userModel.checkPass(email);
                console.log(results1);
                if (results1.length > 0 && password == results1[0].password) {
                    userModel.update(email);
                    console.log("correct password");
                    res.send("correct password");
                }
                else {
                    console.log("Incorrect Email or Password");
                    res.send("Incorrect Email or Password");
                }
            }
        }
    }
}
 

 
module.exports =  {
  logout,
  LoginSignup
};
 