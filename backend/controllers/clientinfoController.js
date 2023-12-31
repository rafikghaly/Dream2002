const userModel = require('../models/User');

const ClientinfoView = async (req, res) => {
    results= await userModel.getusers(); 
    if(results){
        res.send(results);
    }
    else{
        console.log('error');
    }  
}

const clientupdate = async (req, res) => {
    const { name, email } = req.body;
    try{
        if(name.length>0 && email.length>0){
            await userModel.updatename(name)
            await userModel.updateemail(email)  
            res.send("User Modified");
        }
    }
    catch(error){
        res.send("error");
    }
};

module.exports =  {
   ClientinfoView,
  clientupdate
};