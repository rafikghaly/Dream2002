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
            res.send("Fill empty fields")
        }
        else if (password !== confirmPassword) {
            res.send("Password must match")
        }
        else {
            // Validation
          const user = await userModel.validate(email);
            if (user) {
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
        if (email=="admin@123"&&password=="1234")
        {
            res.send("Admin");
        }
        else if (!email || !password) {
            res.send("Fill empty fields");
        } else {
            // Validation
            const results = await userModel.validate(email);
            if (results.length > 0 && email == results[0].email) {
                const results1 = await userModel.checkPass(email);
                if (results1.length > 0 && password == results1[0].password) {
                    userModel.update(email);
                    res.send("correct password");
                }
                else {
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
 